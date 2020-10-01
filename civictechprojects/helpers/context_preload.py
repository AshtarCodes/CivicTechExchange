import json
from django.conf import settings
from civictechprojects.caching.cache import ProjectCache
from common.helpers.constants import FrontEndSection


def preload_api_call(context, path, content):
    if 'PRELOADED_CONTENT' not in context:
        context['PRELOADED_CONTENT'] = {}
    context['PRELOADED_CONTENT'][path] = content
    return context


def about_project_preload(context, query_args):
    context = default_preload(context, query_args)
    project_id = query_args['id'][0]
    project_json = ProjectCache.get(project_id)
    if project_json is not None:
        context['title'] = project_json['project_name'] + ' | DemocracyLab'
        context['description'] = project_json['project_short_description'] or project_json['project_description'][:300]
        if 'project_thumbnail' in project_json:
            context['og_image'] = project_json['project_thumbnail']['publicUrl']
        preload_api_call(context, '/api/project/{id}/'.format(id=project_id), project_json)
    else:
        print('Failed to preload project info, no cache entry found: ' + project_id)
    return context


def default_preload(context, query_args):
    context['title'] = 'DemocracyLab'
    context['description'] = 'Everyone has something to contribute to the technical solutions society needs. ' \
                             'Volunteer today to connect with other professionals volunteering their time.'
    context['og_type'] = 'website'
    context['og_image'] = settings.STATIC_CDN_URL + '/img/Democracylab_is_a_global_volunteer_tech_for_good_nonprofit.png'
    return context


preload_urls = [
    {'section': FrontEndSection.AboutProject.value, 'handler': about_project_preload}
]


def context_preload(section, query_args, context):
    handler = next((preload_url['handler'] for preload_url in preload_urls if preload_url['section'] == section), default_preload)
    context = handler(context, query_args)
    if 'PRELOADED_CONTENT' in context:
        context['PRELOADED_CONTENT'] = json.dumps(context['PRELOADED_CONTENT'], default=str)
    return context


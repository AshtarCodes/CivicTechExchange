# -*- coding: utf-8 -*-
# Generated by Django 1.11.28 on 2020-06-02 15:35
from __future__ import unicode_literals

from django.db import migrations, models
from civictechprojects.migrations.data_migrations.migrate_location import migrate_locations_from_city_list


class Migration(migrations.Migration):

    dependencies = [
        ('civictechprojects', '0030_project_project_location_coords'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='project_city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='project',
            name='project_country',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='project',
            name='project_state',
            field=models.CharField(blank=True, max_length=100),
        ), migrations.RunPython(migrate_locations_from_city_list, reverse_code=migrations.RunPython.noop)
    ]

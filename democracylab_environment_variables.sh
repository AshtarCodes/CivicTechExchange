# S3 bucket and credentials for uploading files
#export AWS_ACCESS_KEY_ID=ASK
#export AWS_SECRET_ACCESS_KEY=ASK
#export S3_BUCKET=ASK

# Password for account used to send email
export EMAIL_HOST_PASSWORD=betterDemocracyViaTechnology

# Url prefix to generate links on the back-end
export PROTOCOL_DOMAIN=http://127.0.0.1:8000

# Email of the admin account, used to
export ADMIN_EMAIL=marlonakeating+1111@gmail.com

# Secret key used to encrypt session tokens
export DJANGO_SECRET_KEY="d!01@gn+%1ql1n(*)8xo+nx$$&n@mg$0_)9g+!(t-2vncaq!j8"

# Whether to show django debug info page on errors
export DJANGO_DEBUG=True

# Configure footer links
export FOOTER_LINKS='[{"u":"https://connect.democracylab.org","n":"About"},{"u":"https://connect.democracylab.org/donatenow","n":"Donate", "isButton":"true"},{"u":"mailto:hello@democracylab.org","n":"Contact Us"}]'

# Event Header
export HEADER_ALERT="<p>You are invited to our upcoming event, St. Hat-trick's day!  Come with a team or join a new one on Saturday, March 16.  Be sure to RSVP on <a href='https://www.eventbrite.com/e/st-hack-tricks-day-tickets-54897293282'>Eventbrite</a>!</p>"

# Configure project description example link
export PROJECT_DESCRIPTION_EXAMPLE_URL='https://www.democracylab.org/index/?section=AboutProject&id=1'

# Configure position description example link
export POSITION_DESCRIPTION_EXAMPLE_URL='https://docs.google.com/document/d/142NH4uRblJP6XvKdmW4GiFwoOmVWY6BJfEjGrlSP3Uk/edit'

# Configure exit survey url for volunteers concluding their commitment with a project
export VOLUNTEER_CONCLUDE_SURVEY_URL='https://docs.google.com/forms/d/e/1FAIpQLSd4e9FQYX3ARPg7qz1ct5qM_bQW_kkEvQaMuM5LV9Ma1NDgbA/viewform'

# Static asset CDN
export STATIC_CDN_URL='https://d1agxr2dqkgkuy.cloudfront.net'

# If True, emails won't be sent to their recipients, but to the ADMIN_EMAIL address (with metadata for debugging)
export FAKE_EMAILS=True

# This array specifies how many days we should space our reminder emails.  In this case, the first reminder comes after
# two days, the second after seven days, and none after that
export APPLICATION_REMINDER_PERIODS='[2,7,-1]'

# This array specifies how many days we should space our volunteer renewal reminder emails.  In this case, the first
# reminder comes two weeks before the volunteer's end date, and the second comes one week before
export VOLUNTEER_RENEW_REMINDER_PERIODS='[7,7,-1]'

# Sample email account configuration
# export EMAIL_SUPPORT_ACCT='{"host":"smtp.gmail.com","port":"587","display_name":"DemocracyLab Support","username":"support@democracylab.org","password":"SECRET","use_tls":"True","use_ssl":"False"}'
# export EMAIL_VOLUNTEER_ACCT='{"host":"smtp.gmail.com","port":"587","display_name":"DemocracyLab Volunteering","username":"volunteer@democracylab.org","password":"SECRET","use_tls":"True","use_ssl":"False"}'

export S3_BUCKET=democracylab-marlok
export EMAIL_HOST_PASSWORD=betterDemocracyViaTechnology

# ONLY FOR USE IN PRODUCTION
#export HOTJAR_APPLICATION_ID=1097784

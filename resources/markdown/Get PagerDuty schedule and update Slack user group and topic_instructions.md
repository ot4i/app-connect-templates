To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/marion-pdtoslack/resources/markdown/Get%20PagerDuty%20schedule%20and%20update%20Slack%20group%20and%20topic_instructions.md) (opens in a new window).

Before you use this flow, you must have:

### PagerDuty

**Schedule**
You will need to know the ID for the schedule you wish to query.  The number at the end of the URL when viewing the schedule (e.g. https://my-company.pagerduty.com/schedules#AB12345).

**v2 API user token**
- You can create this in PagerDuty under the **User Settings** tab on **My Profile**.
- Copy the API key as this will be required in the flow.

### Slack

**User group**
You will need to know the ID for the user group you wish to update.  The number at the end of the URL when viewing the group (e.g. https://my-company.slack.com/usergroups/CD12345).

**Channel**
You will need to know the ID for the channel whose topic you wish to update.  The number at the end of the URL when viewing the channel (e.g. https://my-company.slack.com/messages/EF12345).

**Slack App**
You can create this from the [Slack apps](https://api.slack.com/apps/) page.

1. Click **Create New App**, then give your app a name and select the `Workspace` you wish to interact with.
1. Click **Create App**
1. Click on **Permissions**, then under **Scopes** use the dropdown to add the following permission scopes:
    - channels:write
    - usergroups:write
    - users:read
    - users:read.email
1. Click **Save Changes**
1. Click **Install App to Workspace**
1. Click **Authorize**
1. Copy the OAuth Access Token as this will be required in the flow.

## Using the template

1. Click **Create flow** to start using the template.
1. Click on the first **HTTP** node, and create a HTTP account.  You do not need to provide any of the optional details, click to connect.
1. Update the URL to include your PagerDuty schedule ID between `schedule_ids%5B%5D=` and `&earliest`.
1. Update the Authorization request header to include your PagerDuty API token after `Token token=`.
1. Click on the second **HTTP** node, and connect to your HTTP account.
1. Update the URL to match your Slack workspace domain (e.g. https://my-company.slack.com) and include your OAuth Access Token between `token=` and `&email`.
1. Click on the third **HTTP** node, and connect to your HTTP account.
1. Again, update the URL to match your Slack workspace domain (e.g. https://my-company.slack.com) and include your OAuth Access Token between `token=` and `&usergroup`.  Also, include your user group ID between `usergroup=` and `&users`.
1. Click on the fourth **HTTP** node, and connect to your HTTP account.
1. Again, update the URL to match your Slack workspace domain (e.g. https://my-company.slack.com) and include your OAuth Access Token between `token=` and `&channel`.  Also, include your channel ID between `channel=` and `&topic`.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

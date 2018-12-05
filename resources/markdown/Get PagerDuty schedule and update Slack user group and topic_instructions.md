To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/marion-pdtoslack/resources/markdown/Get%20PagerDuty%20schedule%20and%20update%20Slack%20group%20and%20topic_instructions.md) (opens in a new window).

Before you use this flow, you must have:

**PagerDuty v2 API user token**

- You can create this in PagerDuty from your `My Profile` on the `User Settings` tab.  
- Copy the API key as this will be required in the flow.

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



1. Click **Operations**, then **Edit flow** for the _Create leads_ operation.
1. Click on the **Google Sheets** node, and if you're not already connected, connect to your [Google Sheets account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-google-sheets/).
1. Select the Google Sheets spreadsheet and worksheet to use for this flow. Also, if desired, alter the number of rows processed. This default used in this flow is 25.
1. Click on the **Salesforce node**, and if you're not already connected, connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).



1. Click **Done**.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

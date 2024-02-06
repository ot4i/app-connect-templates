To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/API%20to%20create%20or%20update%20leads%20in%20Salesforce%20based%20on%20a%20Google%20Sheets%20spreadsheet_instructions.md) (opens in a new window).

This API takes an event name and uses that name to compare against data in a Google Sheets spreadsheet. Any leads found in the spreadsheet for the event name specified in the call will be either added to, or updated in Salesforce depending on whether or not a lead with the same email address already exists in Salesforce. The flow does not change the original spreadsheet.

Before you use this flow, you must have a Google Sheets spreadsheet with the following columns, in this order:
* **First Name** 
* **Last Name**
* **Email Address** (This will be used to work out if this user already exists in Salesforce, or not.)
* **Company**
* **Event** (When you call the API, this is the column that will be used to check if the event name matches the one you've specified.)

Any other columns after the first five specified here will be ignored by this flow.

## Using the template

1. Click **Create flow** to start using the template.
1. Click **Operations**, then **Edit flow** for the _Create leads_ operation.
1. Click the **Google Sheets** node, and if you're not already connected, connect to your [Google Sheets account](https://ibm.biz/aasgsheets).
1. Select the Google Sheets spreadsheet and worksheet to use for this flow. Also, if desired, alter the number of rows processed. This default used in this flow is 25.
1. Click on the **Salesforce node**, and if you're not already connected, connect to your [Salesforce account](https://ibm.biz/aassalesforce).
1. Click **Done**.
1. To start the flow, in the banner click **Start flow**.

Want to see if working? Click **Manage** in the API flow, then follow the instructions on getting started. Once you're in the API portal, use the Try it link and then **Generate** some test data. Replace the value for `event_name` with the event name you want to match in your spreadsheet, and click **Call operation**.

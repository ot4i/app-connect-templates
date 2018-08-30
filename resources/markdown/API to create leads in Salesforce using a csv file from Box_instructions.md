To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/API%20to%20create%20leads%20in%20Salesforce%20using%20a%20csv%20file%20from%20Box_instructions.md) (opens in a new window).

This API takes a url to a Box document, and an optional event name. It uses that information to retrieve the document, parse the csv inside, and create a new lead in Salesforce for every line that matches the event name given when calling the API. If you didn't give an event name, all the lines from the csv are created or updated in Salesforce.  The email address is used to determine if the lead already exists in Salesforce or not. The flow does not change the original file.

Before you use this flow, you must have a csv file in Box with the following items in the header row, in this order:
* **First Name** 
* **Last Name**
* **Email Address** (This will be used to work out if this user already exists in Salesforce, or not.)
* **Company**
* **Event** (When you call the API, this is the column that will be used to check if the event name matches the one you've specified.)

The first line in your csv file should look like this:
`First Name,Last Name,Email,Company,Event`

## Using the template

1. Click **Create flow** to start using the template.
1. Click **Operations**, then **Edit flow** for the _Create leads_ operation.
1. Click on the **Box** node, and if you're not already connected, connect to your [Box account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-box/).
1. Click on the **Salesforce node**, and if you're not already connected, connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
1. Click **Done**.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

Want to see if working? Click **Manage** in the API flow, then follow the instructions on getting started. Once you're in the API portal, use the Try it link and then **Generate** some test data. Replace the value for `file_url` with the url for the csv file you want to use. Replace the value for `event_name` with the event name you want to match in your file, and click **Call operation**.

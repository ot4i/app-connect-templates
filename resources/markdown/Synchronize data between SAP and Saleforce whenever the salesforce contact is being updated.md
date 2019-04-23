To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/At%20regular%20intervals%20extract%20Salesforce%20lead%20details%20and%20upload%20Box%20file%20with%20CSV%20output_instructions.md) (opens in a new window).
## Prerequisites
- To connect to SAP , you need to setup the Agent while creating a connection . That can be edited or seen in `Private network connections` hamburger menu on the App Connect Dashboard
## Using the template
1. Click **Create flow** to start using the template.
1. Connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
1. Connect to your [SAP account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/how-to-use-ibm-app-connect-with-sap/), choosing the network that you've already created.
1. Check each node in the flow to review its configuration and, if necessary, change the data that will be used.
1. To start the flow, open the options menu [&#8942;] from the banner, then click **Start flow**.
1. Test your flow by updating an existing contact to your Salesforce account.   
When your flow runs, the **If** node checks that wheather the customerID exist in SAP whose contact details got updated in salesforce. If the same customerID exist in SAP, the flow updates the customer data with the specified values from your Salesforce account and give notification as `CUSTOMER FOUND`.  If the customer doesn't exist in SAP, the flow gives notification as `CUSTOMER NOT FOUND` . 

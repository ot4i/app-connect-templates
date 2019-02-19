To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/At%20regular%20intervals%20extract%20Salesforce%20lead%20details%20and%20upload%20Box%20file%20with%20CSV%20output_instructions.md) (opens in a new window).
## Prerequisites
- To connect to SAP via OData, create a private network by following the instructions in [Configuring a private network for IBM App Connect](https://developer.ibm.com/integration/docs/app-connect/creating-managing-event-driven-flows/adding-applications-apis-flow/configuring-private-network/).
## Using the template
1. Click **Create flow** to start using the template.
1. Connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
1. Connect to your [SAP (via OData) account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/how-to-use-ibm-app-connect-with-sap/), choosing the network that you've already created.
1. Check each node in the flow to review its configuration and, if necessary, change the data that will be used.
1. To start the flow, open the options menu [&#8942;] from the banner, then click **Start flow**.
1. Test your flow by adding a new contact to your Salesforce account.   
When your flow runs, the **If** node checks that the agency number exists in SAP. If the agency number does exist, the flow updates the agency record with the specified values from your Salesforce account.  If the agency number doesn't exist in SAP, the flow creates a travel agency by using the data from Salesforce. 

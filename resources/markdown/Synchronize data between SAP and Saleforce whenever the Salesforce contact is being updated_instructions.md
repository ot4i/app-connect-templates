To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Synchronize%20data%20between%20SAP%20and%20Saleforce%20whenever%20the%20salesforce%20contact%20is%20being%20updated_instructions.md) (opens in a new window).
## Prerequisites
- To connect to SAP, you need to setup the Agent while creating a connection. To edit or view the agent, use the Private network connections App Connect menu on the App Connect Dashboard.
## Using the template
1. Click **Create flow** to start using the template.
1. Connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
1. Connect to your [SAP account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/how-to-use-ibm-app-connect-with-sap/), choosing the network that you've already created.
1. Check each node in the flow to review its configuration and, if necessary, change the data that will be used.
1. To start the flow, open the options menu [&#8942;] from the banner, then click **Start flow**.
1. Test your flow by updating an existing contact in your Salesforce account.  
 
When your flow runs, the **If** node checks whether the customerID exists in SAP whose contact details got updated in Salesforce. If the same customerID exists in SAP, the flow updates the customer data with the specified values from your Salesforce account and creates a notification of CUSTOMER FOUND..  If the customer doesn't exist in SAP, the flow creates a notification of CUSTOMER NOT FOUND. 

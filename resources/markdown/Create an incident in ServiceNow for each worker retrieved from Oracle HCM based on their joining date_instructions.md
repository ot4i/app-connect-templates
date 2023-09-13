To refer to these instructions while editing the flow, open the [GitHub page]
(https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Create%20an%20incident%20in%20ServiceNow%20for%20each%20worker%20retrieved%20from%20Oracle%20HCM%20based%20on%20their%20joining%20date_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Oracle Human Capital Management](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-oracle-human-capital-management)
   - [Microsoft Azure Active Directory](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-microsoft-azure-active-directory) 
   - [ServiceNow](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-servicenow) 
3. To start the flow, in the banner, click **Start flow**.

Use this template to create a user in Microsoft Azure Active Directory and an incident in ServiceNow for each worker retrieved from Oracle Human Capital Management. In this example, when a worker is created in Oracle HCM with a start date that is 7 days prior to the joining date, a new user is created in Microsoft Azure Active Directory based on the worker's details. An incident is also created in ServiceNow requesting a new procurement laptop for the worker.



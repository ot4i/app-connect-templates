To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Create%20a%20system%20user%20in%20ServiceNow%20for%20new%20employees%20of%20a%20specific%20work%20type%20that%20is%20created%20in%20Oracle%20HCM_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Oracle Human Capital Management](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-oracle-human-capital-management) 
   - [ServiceNow](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-servicenow)
   - [Slack](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-slack)
3. To start the flow, in the banner, click **Start flow**.

Use this template to create a system user in ServiceNow based on the worker details retrieved from Oracle HCM. If it’s an employee of a specific work group who joined after a specified date, a new system user account is created in ServiceNow for the worker. Otherwise, a Slack message is posted on the intended channel, notifying the worker that they are not from a specific work group.






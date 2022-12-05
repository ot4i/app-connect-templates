To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Sync%20Salesforce%20leads%20between%20accounts%20and%20check%20and%20record%20state_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - **Salesforce** 
   - **Slack**
   - **Gmail**
3. To start the flow, in the banner, open the options menu [⋮] and click **Start flow**.

The flow is started whenever a contact is created in a Salesforce New contact event.
This flow is a scheduler-based flow that schedules a monthly synchronisation (batch) between the leads of two Salesforce accounts. You can use this template to perform a check on the status of a batch process.

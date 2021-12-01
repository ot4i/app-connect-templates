To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/CMPE272_Team15/resources/markdown/API%20to%20update%20the%20campaign%20member%20info%20from%20Salesforce%20campaign%20to%20Hubspot%20CRM_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2.	Connect your salesforce account (https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-salesforce), we connect salesforce “New or updated campaign member” (Trigger connector)
3.	Connect your Hubspot CRM (Action connector), we connect Hubspot CRM “create contact”
4.	Now the App Connect will keep polling salesforce campaign every 1 min (can set to any time) to check if a new member was added or updated
5.	Now we use IBM App Connect Toolbox to create a “if” condition, this “if” condition would check if the “Email” field is present in the campaign member details.
6.	If the “Email” field is present in the campaign member details, it will update these details in Hubspot CRM and it will output the message “Email found, updated the contact in hubspot”
7.	If the “Email” field is NOT present in the campaign member details, it will NOT update these details in Hubspot CRM and it will output the message “Email not found, so not updating hubspot”.
8.	From the banner, open the options menu and click “start flow”

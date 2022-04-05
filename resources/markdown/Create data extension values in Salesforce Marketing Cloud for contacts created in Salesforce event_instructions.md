To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Create%20data%20extension%20values%20in%20Salesforce%20Marketing%20Cloud%20for%20contacts%20created%20in%20Salesforce%20event_instructions.md) (opens in a new window).

1.	Click **Create flow** to start using the template.
2.	Connect to the following accounts by using your credentials:
    -	**Salesforce** 
    - **Salesforce Marketing Cloud**
    - **Slack**
3.	To start the flow, in the banner, open the options menu [⋮] and click **Start flow**.

The flow is triggered whenever a new contact is created in Salesforce.  The action then taken depends on the new contact's Mailing Country (MailingCountry):
- If the new contact's MailingCountry is either USA or India, a contact’s data extension values table in Salesforce Marketing Cloud is created with the contact’s details.
- Otherwise, a Slack message is sent that a table with the contact's MailingCountry does not exist.

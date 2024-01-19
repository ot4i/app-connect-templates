To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/Create%20a%20contact%20list%20or%20a%20contact%20in%20HubSpot%20Marketing%20when%20a%20new%20form%20entry%20is%20created%20in%20Wufoo_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Wufoo](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-wufoo)
   - [HubSpot Marketing](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-hubspot-marketing)
   - [Gmail](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-gmail) 
3. To start the flow, in the banner, click **Start flow**.


Use this template to create a contact list or a contact in HubSpot Marketing when a new form entry is created in Wufoo. 

In this example, consider that an event is being organized only for women. When a new Wufoo form entry is created, HubSpot Marketing retrieves its contact list. A contact list will be created based on the company details provided in the form. If the company doesn't exist in HubSpot Marketing, a new contact list is created. If the company already exists, a contact is directly created in HubSpot Marketing. 

A contact is created in HubSpot Marketing only if the contact is female. Otherwise, a Gmail message gets sent to the recipient, notifying them that the event is only for women.

To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Create%20a%20new%20Trello%20card%20for%20a%20new%20Salesforce%20campaign_instructions.md) (opens in a new window).

1. Click **Create flow** to create an event-driven flow to start using the template on IBM app connect.

2. Connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/) with the IBM app connect and configure the opportunity record create trigger such that a new card is created whenever a new oportunity record is created on salesforce.


3. Connect to your [Trello account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-trello/) to the IBM app connect and configure the board and list in which the cards are to be added when a new opportunity record is created on salesforce.

4. Click on start the flow after successfully configuring with the IBM app connect.

5. Click on the "Opportunities" on the salesforce app launcher to create a new opportunity record.  

6. A new card would be created in the Trello app with corresponding metadata.
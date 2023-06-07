To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Create%20a%20new%20Trello%20card%20when%20a%20new%20row%20is%20added%20in%20Google%20Sheets_instructions.md) (opens in a new window).

1. Click **Create flow** to create an event-driven flow from the template.
2. Click Google Sheets / **New complete row appended**
3. Connect to your [Google sheet account](http://ibm.biz/aasgsheets) and then select the spreadsheet and worksheet to which you will add new rows.
4. Click Trello / **Add card to list**
5. Connect to your [Trello account](https://ibm.biz/aastrello) and then select the board and list in which cards are to be added when a new opportunity record is created on salesforce.
6. To start the flow, click **Start flow**.

## Testing the Flow

Add new row to the configured Google Sheets worksheet.  A new card should be created in the Trello app with metadata from the Google Sheets row.

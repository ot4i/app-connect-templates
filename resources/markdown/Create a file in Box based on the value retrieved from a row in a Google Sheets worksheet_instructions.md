To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Create%20a%20file%20in%20Box%20based%20on%20the%20value%20retrieved%20from%20a%20row%20in%20a%20Google%20Sheets%20worksheet_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Google Sheets](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-google-sheets)
   - [Slack](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-slack)
   - [HTTP](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-http)
   - [Box](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-box)
3. To start the flow, in the banner, click **Start flow**.


Use this template to create a file in Box based on the value retrieved from each new row in a Google Sheets worksheet. In this example, if the value retrieved from the worksheet contains 'http', an HTTP method is invoked with a URL request to run the URL, which is retrieved from the worksheet's current item value. This request retrieves the content, and a file is created with the obtained content in Box.







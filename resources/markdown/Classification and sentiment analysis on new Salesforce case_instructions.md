To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Classification%20and%20sentiment%20analysis%20on%20new%20Salesforce%20case_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to your [Salesforce account](https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-salesforce).
3. In a separate window, log in to your Salesforce account and add custom fields to your cases: _(Watson Tone Analysis,_ and _Watson Tone Analysis Performed)_.
4. Connect to your [Watson Tone Analyzer account](https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-watson-tone-analyzer).
5. Connect to your [Slack account](https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-slack).
6. In the **Slack** node, choose the channel that you want to post the message to.
7. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

To test the flow, create a new Case in your Salesforce account (make sure that you select an Account and in the Subject field, enter the text that you want to be analyzed; for example, `Excellent service` or `Bad service`).

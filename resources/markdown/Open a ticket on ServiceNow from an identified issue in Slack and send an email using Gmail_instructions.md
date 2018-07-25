To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Open%20a%20ticket%20on%20ServiceNow%20from%20an%20identified%20issue%20in%20Slack%20and%20send%20an%20email%20using%20Gmail_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
1. Connect to your [Slack account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. On the Slack "New message" event, copy the callback URL to the clipboard, and [create a custom slash command](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/#considerations). Follow a pattern like this in Slack - "/message [your email] [description of the issue]".
1. Connect to your [ServiceNow account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-servicenow/).
1. Connect to your Gmail account and choose the email address as per your needs.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Create%20a%20Slack%20translation%20bot_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
1. Connect to your [Slack account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. On the Slack "New message" event, copy the callback URL and [configure a custom slash command](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/#considerations) called `/translate`.
1. Connect to your [Watson Language Translator account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-watson-language-translator/).
1. For each "Create message" Slack node, choose the channel that you want to post the message to.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

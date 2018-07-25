To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Copy%20messages%20between%20Slack%20channels_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
1. Connect to your [Slack account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. In the Slack "New message" event, copy the callback URL to the clipboard.
1. In the Slack browser UI, [create a custom slash command](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/#considerations). Follow a pattern like this in Slack - `/message [message]`.
1. In the App Connect UI "Create message" action, select a Slack channel or connect to a different Slack account and select a Slack channel.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

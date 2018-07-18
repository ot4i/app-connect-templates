1. Clicking **Create flow** takes you to the App Connect flow editor. Click each node in your flow to validate it.
1. In App Connect, connect to your Slack account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. In the Slack "New message" event, copy the callback URL to the clipboard. 
1. In the Slack browser UI, create a custom slash command. Follow a pattern like this in Slack - `/message [message]` - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/#considerations).
1. In the App Connect UI "Create message" action, select a Slack channel or connect to a different Slack account and select a Slack channel.
1. Click **Start** and you’re done!

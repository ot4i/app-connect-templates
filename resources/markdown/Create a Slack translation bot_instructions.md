1. Clicking **Create flow** takes you to the App connect flow editor. Click on each node in your flow to validate it. 
1. In App Connect, connect to your Slack account.
1. On the Slack "New message" event, copy the callback URL and configure a customer slash command called `/translate` - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/). 
1. Connect to your Watson Language Translator account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-watson-language-translator/). 
1. For each "Create message" Slack node, choose the channel that you want to post the message to.
1. Click **Exit and switch on** and you’re done!

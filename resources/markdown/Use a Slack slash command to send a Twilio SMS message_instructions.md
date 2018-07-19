1. Clicking **Create flow** takes you to the App Connect flow editor. 
1. In App Connect, connect to your Slack account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. Connect to your Twilio account.
1. Click the **Slack** "New message" event and copy the callback URL to the clipboard. Use this to create a custom slash command to use in Slack, for example "/sms [my message]".  Details of how to create the slash command in slack can be found in the tutorial [here](https://developer.ibm.com/integration/docs/app-connect/tutorials-for-ibm-app-connect/creating-event-driven-flow-can-use-slack-perform-action-another-application/).
1. Click on the **Twilio** node and update the From and To fields with the numbers you want to use.
1. Start the flow, and you’re done!

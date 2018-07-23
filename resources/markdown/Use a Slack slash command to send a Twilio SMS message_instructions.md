1. To refer to these instructions while editing the flow, open this [page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Use%20a%20Slack%20slash%20command%20to%20send%20a%20Twilio%20SMS%20message_instructions.md) in a new window.
1. Clicking **Create flow** takes you to the App Connect flow editor. 
1. In App Connect, connect to your Slack account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. Connect to your Twilio account.
1. Click the **Slack** _New message_ event and copy the callback URL to the clipboard. Use this to create a custom slash command to use in Slack, for example ```/sms [my message]```.  Details of how to create the slash command in slack can be found in the tutorial [here](https://developer.ibm.com/integration/docs/app-connect/tutorials-for-ibm-app-connect/creating-event-driven-flow-can-use-slack-perform-action-another-application/).
1. Click on the **Twilio** node and update the **From** and **To** fields with the numbers you want to use.
1. From the banner, open the options menu [&#8942;] and click **Start**, then you’re done!


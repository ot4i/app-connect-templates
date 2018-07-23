To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Use%20a%20Slack%20slash%20command%20to%20send%20a%20Twilio%20SMS%20message_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template in App Connect. 
1. In App Connect, connect to your [Slack account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. Connect to your Twilio account.
1. Click the **Slack** _New message_ event and copy the callback URL to the clipboard. Use this to create a custom slash command to use in Slack, for example ```/sms [my message]```.  Details of how to create the slash command in slack can be found in from step 6 in the [Adding a Mailchimp subscriber when a new message is added to Slack](https://developer.ibm.com/integration/docs/app-connect/tutorials-for-ibm-app-connect/creating-event-driven-flow-can-use-slack-perform-action-another-application/) tutorial.
1. Click on the **Twilio** node and update the **From** field with your Twilio number and **To** field where you want the message to go to.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

Want to see the flow working? Go into Slack and post a message using the custom slash command you've defined, and await the message on your phone.


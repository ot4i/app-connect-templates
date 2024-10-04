To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Use%20a%20Slack%20slash%20command%20to%20send%20a%20Twilio%20SMS%20message_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
1. Connect to your [Slack account](https://ibm.biz/aasslack).
1. Click the **Slack** _New message_ event and copy the callback URL to the clipboard. Use this to [create a custom slash command to use in Slack](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-slack#index__consider-general), for example ```/sms [my message]```.
1. Click on the **Twilio** node and connect to your Twilio account.
1. Also in the **Twilio** node, update the **From** field with your Twilio number and the **To** field with where you want the message to go.
1. To start the flow, in the banner click **Start flow**.

Want to see the flow working? Go to Slack and post a message using the custom slash command you've defined, and in a minute or two you should see a message on the phone you used in your flow.

To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Add%20a%20Mailchimp%20subscriber%20from%20a%20Slack%20slash%20command_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
1. Connect to your [Slack account](https://ibm.biz/aasslack).
    - **Note:** To add the slash command app, you need to be the owner of a workspace or have admin privileges.
1. On the Slack "New message" event, copy the callback URL and [configure a custom slash command](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-slack#index__consider-general) called `/contact`.
1. Click on the **Mailchimp** node and connect to your [Mailchimp account](https://ibm.biz/aasmailchimp).
1. Select the list you want to add a member to.
    - If the **Email Address** field is empty, start typing ``message`` and then select **Message body** from the displayed list of objects
1. To start the flow, in the banner click **Start flow**.

To test your flow:

1. Go to any channel in your Slack workspace.
1. Type ``/contact joeblogs@acme.com``
1. To confirm that the message has been sent, you’ll see a "Message published" message in Slack.
1. Open Mailchimp and then display the audience for your mailing list
    - You’ll see the new addition in the list.

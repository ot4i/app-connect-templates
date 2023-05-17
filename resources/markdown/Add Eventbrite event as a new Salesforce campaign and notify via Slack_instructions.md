To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Add%20Eventbrite%20event%20as%20a%20new%20Salesforce%20campaign%20and%20notify%20via%20Slack_instructions.md) (opens in a new window).

1. Clicking **Create flow** to start using the template.
2. Click the Eventbrite / **New order** node.
3. Connect to your [Eventbrite](https://ibm.biz/aceventbrite) account and then select the Organization that you want to use.
4. Click the [Salesforce](https://ibm.biz/aassalesforce) / **Create campaign** node.
5. Connect to your Salesforce account.
6. Click the [Slack](https://ibm.biz/aasslack) / **Create message** node.
7. Connect to your Slack account and then select the channel to which you want to post your message.
8. To start the flow, in the banner click **Start flow**.

To test the flow, create a new order in the Eventbrite account.  In response, the flow creates a new campaign in Salesforce and adds a message to the Slack channel.

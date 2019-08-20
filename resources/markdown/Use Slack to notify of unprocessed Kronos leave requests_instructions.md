To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Use%20Slack%20to%20notify%20of%20unprocessed%20Kronos%20leave%20requests_instructions.md) (opens in a new window).
## Prerequisites
This template assumes that the following resources are available:
- Employee leave records in Kronos Workforce Dimensions that include employees' IDs and full names, and leave request IDs
- A Slack channel where messages can be posted

## Using the template
1. Click **Create flow** to start using the template.
1. Click each node to review its configuration and connect to your accounts, if necessary.
1. In the scheduler, you can change how often you want the flow to run.
1. In the Kronos node, specify relevant employee IDs and choose the start and end dates between which you want to retrieve data.
1. In the Slack node, choose the channel where you'd like to post notifications.  You can also change the text of the message.
1. If you want to change the message that's written to the log if no pending leave requests are found, click the "else" branch of the "if" statement and update the message.
1. To start the flow, open the options menu [&#8942;] then click **Start flow**.

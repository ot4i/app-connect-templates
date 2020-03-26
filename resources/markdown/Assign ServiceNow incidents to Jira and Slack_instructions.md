To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Assign%20ServiceNow%20incidents%20to%20Jira%20and%20Slack_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
1. Connect to your [ServiceNow account](http://ibm.biz/acservicenow).
1. Connect to your [Jira account](http://ibm.biz/ach2jira).
1. For the Jira "Create issue" action in the If branch (for incidents with urgency=high), select the project in which you want to create the issue.
1. For the Jira "Create issue" action in the Else branch (for other incidents), select the project in which you want to create the issue.
1. Connect to your [Slack account](http://ibm.biz/acslack).
1. For the Slack "Create message" action in the If node, select the channel to which you want to post your message.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

To test the flow, in your ServiceNow account create a new incident with urgency=high; you should see a new issue created in Jira and a message added to your Slack channel.
Create a new incident with urgency=low (for example); you should see a new task created in Jira.

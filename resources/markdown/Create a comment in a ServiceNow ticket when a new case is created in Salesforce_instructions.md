To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Create%20a%20comment%20in%20a%20ServiceNow%20ticket%20when%20a%20new%20case%20is%20created%20in%20Salesforce_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
1. Connect to your [Salesforce account](https://ibm.biz/aassalesforce).
   
   This is a polling event trigger - this means App Connect looks for changes in your events as per the timeframe selected in the "Check for new 'Case' every (minutes)" box. You can choose to change this interval but please be aware of your API limits.
1. Connect to your [ServiceNow account](https://ibm.biz/aasservicenow).
1. To start the flow, in the banner click **Start flow**.

This template looks for new cases added in your Salesforce account and syncs this by creating a new ticket in ServiceNow that includes the comments from the original case.

1. Clicking **Create flow** takes you to the App Connect flow editor. 
1. In App Connect, connect to your Salesforce account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/). This is a polling event trigger - this means App Connect looks for changes in your events as per the timeframe selected in the 'Check for new 'Case' every (minutes)' box. You can choose to change this interval but please be aware of your API limits. 
1. Click on the Salesforce retrieve account action node to validate it.
1. Connect to your ServiceNow account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-servicenow/). 
1. Click on the Salesforce retrieve case comments action node to validate it. 
1. Click on the IF node to validate it. 
1. Click on the For Each node to validate it. 
1. Click on the ServiceNow create comment node to validate it. 
1. Click **Exit and switch on** and you’re done!

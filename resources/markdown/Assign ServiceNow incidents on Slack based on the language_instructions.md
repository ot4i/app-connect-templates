1. Clicking **Create flow** takes you to the App connect flow editor. Click each node in your flow to validate it. 
1. In App Connect, connect to your ServiceNow account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-servicenow/). 
1. Connect to your Watson Language Translator account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-watson-language-translator/).
1. Click the first If node and, if necessary, change the two-character language codes according to your business needs. If you change the language, you'll also need to expand **Output data** for each branch of the If node to change the name of the team who'll deal with the incident.
1. Connect to your Slack account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. For each Slack "Create message" action in the If node, select the channel that you want to post your message to for the language that's specified for that branch of the If node. If you've changed the language, you might also want to update the **Text** field. 
1. Click the **If 2** node to validate it.
1. For the Slack "Create message" action in the If 2 node, select the channel that you want to post your message to for urgent incidents.   
1. Click **Exit and switch on** and you’re done!

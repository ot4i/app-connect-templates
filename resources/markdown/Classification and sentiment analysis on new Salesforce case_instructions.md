1. Clicking **Create flow** takes you to the App Connect flow editor. Click each node in your flow to validate it. 
1. In App Connect, connect to your Salesforce account - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
3. In a separate window, log in to your Salesforce account and add three custom fields to your cases: _(Watson Tone Analysis, Watson Tone Analysis Performed,_ and _Watson Classification)_.
4. In App Connect, connect to Watson Natural Language Classifier - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-watson-natural-language-classifier/). 
5. In Watson Natural Language Classifier, add some training data. 
6. In App Connect, select the correct classifier in your flow.
5. Connect to Watson Tone Analyzer - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-watson-tone-analyzer/).
6. Connect to your Slack account and choose the channel that you want to post the message to - [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
7. Click **Exit and switch on** and you’re done!

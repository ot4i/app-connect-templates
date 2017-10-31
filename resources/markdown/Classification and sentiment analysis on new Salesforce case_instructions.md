1. Clicking the ‘use this template’ button will take you to the App connect flow editor 
2. You will need to click on each app in your flow to be able to switch it on
2. In App Connect, connect to your Salesforce account [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/)
3. In a separate window, log in to your salesforce account and add three custom fields to your cases _(1. Watson Tone Analysis 2. Watson Tone Analysis Performed 3. Watson Classification)_
4. Go back into App Connect and connect to Watson Natural Language Classifier [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-watson-natural-language-classifier/). 
5. You will need to add training data into your Language Classifer instance for this flow to work. 
6. In App Connect make sure in your flow that the Watson Natural Language Classifier has your correct classifier selected
5. Connect to Watson Tone Analyzer [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-watson-tone-analyzer/)
6. Connect to your Slack account and choose the channel you want to post the message to [more info here](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/)
7. Select exit and turn on flow and you’re done!

To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Assign%20ServiceNow%20incidents%20on%20Slack%20based%20on%20the%20language_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
1. Connect to your [ServiceNow account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-servicenow/).
1. Connect to your [Watson Language Translator account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-watson-language-translator/).
1. Click the first **If** node and, if necessary, change the two-character language codes according to your business needs. If you change the language, you'll also need to expand **Output data** for each branch of the **If** node to change the name of the team who'll deal with the incident.
1. Connect to your [Slack account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. For each Slack "Create message" action in the If node, select the channel that you want to post your message to for the language that's specified for that branch of the If node. If you've changed the language, you might also want to update the **Text** field.
1. For the Slack "Create message" action in the **If 2** node, select the channel that you want to post your message to for urgent incidents.   
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

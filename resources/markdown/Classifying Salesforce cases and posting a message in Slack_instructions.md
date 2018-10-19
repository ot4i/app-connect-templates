To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Classifying%20Salesforce%20cases%20and%20posting%20a%20message%20in%20Slack_instructions.md) (opens in a new window).

## Prerequisites

To classify text, you need to train the Watson Natural Language Classifier with sample text and classifications. We have provided some sample data for you to use. To access this data follow the instructions provided in Step 4 [here](https://developer.ibm.com/integration/docs/app-connect/tutorials-for-ibm-app-connect/create-event-driven-flow-classify-salesforce-customer-service-queries-post-message-slack/#travel_csv).

## Using the template

1. Click **Create flow** to start using the template.
1. Click each node to review its configuration. If necessary:
   - Connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
   - Connect to your [Watson Natural Language Classifier account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-watson-natural-language-classifier/).
   - Connect to your [Slack account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-slack/).
1. Validate all the mappings and ensure that they are correct.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

## Testing the template
1. Log in to your Salesforce account.
1. In the **Subject** field type `Lost Baggage`.
1. Fill in the rest of the form including all the mandatory fields, then save the case.
1. You will receive a message instantly in Slack notifying you about the new case.

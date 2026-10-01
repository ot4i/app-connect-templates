To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Classify%20new%20Salesforce%20leads%20as%20Hot%20or%20Warm%20or%20Cold%20using%20Amazon%20SageMaker%20then%20update%20probability%20and%20create%20a%20task_instructions.md) (opens in a new window).

Use this template to classify new Salesforce leads by passing them to an Amazon SageMaker endpoint, which scores each lead as Hot, Warm, or Cold. The flow then updates the lead probability in Salesforce, creates a follow-up task with an appropriate due date and priority, and sends a notification to a Microsoft Teams channel.

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Amazon SageMaker](https://ibm.biz/acamazonsagemaker)
   - [Salesforce](https://ibm.biz/acsalesforce)
   - [Microsoft Teams](https://ibm.biz/acmsteams)
3. In the **Amazon SageMaker Invoke endpoint** node, set the **EndpointName** field to the name of your deployed SageMaker endpoint.
4. In the **Microsoft Teams Send message to channel** node, update the **teamId** and **channelId** fields with your Microsoft Teams details.
5. To start the flow, in the banner, click **Start flow**.

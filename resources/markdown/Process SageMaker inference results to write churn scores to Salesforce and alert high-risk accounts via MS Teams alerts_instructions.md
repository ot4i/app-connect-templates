To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Process%20SageMaker%20inference%20results%20to%20write%20churn%20scores%20to%20Salesforce%20and%20alert%20high-risk%20accounts%20via%20MS%20Teams%20alerts_instructions.md) (opens in a new window).

Use this template to process Amazon SageMaker batch transform results from Amazon S3 when an Amazon EventBridge event signals that a transform job has completed. The flow reads the output CSV file, updates churn probability scores on matching Salesforce accounts, and sends a Microsoft Teams alert for any account identified as high risk.

**This is the second flow in a two-part sequence.** It is triggered automatically when the companion flow, [Retrieve customer usage support and billing data from Amazon S3 then invoke SageMaker for churn probability scoring](https://github.com/ot4i/app-connect-templates/blob/main/resources/Retrieve%20customer%20usage%20support%20and%20billing%20data%20from%20Amazon%20S3%20then%20invoke%20SageMaker%20for%20churn%20probability%20scoring.yaml), completes its batch transform job. Deploy and configure both flows before starting either one.

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Amazon EventBridge](https://ibm.biz/acamazoneventbridge)
   - [Amazon S3](https://ibm.biz/acamazons3)
   - [Salesforce](https://ibm.biz/acsalesforce)
   - [Microsoft Teams](https://ibm.biz/acmsteams)
3. In the **Amazon EventBridge** trigger, update the **eventBus** and **roleArn** fields with your AWS account details.
4. In the **Amazon S3 Retrieve object content** node, update the **bucketName** field to match your S3 bucket.
5. In the **Microsoft Teams Send message to channel** node, update the **teamId** and **channelId** fields with your Microsoft Teams details.
6. To start the flow, in the banner, click **Start flow**.

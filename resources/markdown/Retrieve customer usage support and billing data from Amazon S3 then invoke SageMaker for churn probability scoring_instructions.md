To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Retrieve%20customer%20usage%20support%20and%20billing%20data%20from%20Amazon%20S3%20then%20invoke%20SageMaker%20for%20churn%20probability%20scoring_instructions.md) (opens in a new window).

Use this template to retrieve customer usage, support, and billing data from Amazon S3 and submit it to an Amazon SageMaker batch transform job to produce churn probability scores. The flow runs on a schedule and stores the transform output in a specified S3 location.

**This is the first flow in a two-part sequence.** When the batch transform job completes, Amazon EventBridge emits an event that triggers the companion flow, [Process SageMaker inference results to write churn scores to Salesforce and alert high-risk accounts via MS Teams alerts](https://github.com/ot4i/app-connect-templates/blob/main/resources/Process%20SageMaker%20inference%20results%20to%20write%20churn%20scores%20to%20Salesforce%20and%20alert%20high-risk%20accounts%20via%20MS%20Teams%20alerts.yaml). Deploy and configure both flows before starting either one.

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Amazon SageMaker](https://ibm.biz/acamazonsagemaker)
3. In the **Amazon SageMaker Create transform job** node, update the **S3Uri** field with the path to your input data file, the **TransformJobName** field with a unique job name, and the **S3OutputPath** field with the path where output should be written.
4. To start the flow, in the banner, click **Start flow**.

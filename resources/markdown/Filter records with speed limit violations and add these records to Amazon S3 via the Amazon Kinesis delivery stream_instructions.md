To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Filter%20records%20with%20speed%20limit%20violations%20and%20add%20these%20records%20to%20Amazon%20S3%20via%20the%20Amazon%20Kinesis%20delivery%20stream_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - **Amazon Kinesis**
   - **Amazon CloudWatch**
   - **Slack**
3. To start the flow, in the banner click **Start flow**.

Use this template to add the vehicle records with speed limit violation in Amazon Kinesis. The Amazon CloudWatch event logs are seamlessly retrieved and published to an Amazon Kinesis data stream. The data is processed, and the filtered data (which violates the speed limit) is added to the Amazon S3 bucket via Amazon Kinesis delivery streams.

For more information, see [Using IBM® App Connect to interact with Amazon Kinesis](https://community.ibm.com/community/user/integration/blogs/shamini-arumugam1/2023/03/18/using-ibm-app-connect-to-interact-w-amazonkinesis).

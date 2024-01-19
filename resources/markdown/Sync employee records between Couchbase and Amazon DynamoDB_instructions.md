To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/Sync%20employee%20records%20between%20Couchbase%20and%20Amazon%20DynamoDB_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - **Couchbase** 
   - **Amazon DynamoDB**
   - **Slack**
3. To start the flow, in the banner click **Start flow**.

This flow is a scheduler-based flow that retrieves documents containing the employee records in Couchbase.

In this example, the flow retrieves employee records from Couchbase and synchronizes that data with Amazon DynamoDB. It helps you keep the employee records in sync. 

For more information, visit the IBM Integration Community for this use case. See, [Using IBM® App Connect to interact with Couchbase](https://community.ibm.com/community/user/integration/blogs/shamini-arumugam1/2022/10/27/using-ibm-app-connect-to-interact-with-couchbase).

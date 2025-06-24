To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Create%20a%20message%20in%20a%20new%20Google%20Pub%20Sub%20topic%20using%20data%20from%20Azure%20Cosmos%20DB%20when%20a%20new%20message%20is%20received_instructions.md) (opens in a new window).

This flow creates a new message in a new Google Cloud Pub/Sub topic using the details retrieved from Azure Cosmos DB item whenever a new message is created in a topic.

## Using the template

1. Click **Use this template** to start using the template.
1. Click **Operations**, then **Edit flow** for the _Create vectors_ operation.
1. Click on the **Google Cloud Pub/Sub** node, and if you're not already connected, connect to your [Google Cloud Pub/Sub account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-google-cloud-pubsub)).
1. Click on the **Azure Cosmos DB** node, and if you're not already connected, connect to your [Azure Cosmos DB account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-azure-cosmos-db).
1. Click **Done**.
1. To start the flow, in the banner click **Start flow**.

Want to see if working? Click **Manage** in the API flow, then follow the instructions on getting started. Once you're in the API portal, use the Try it link and then **Generate** some test data. Replace the value for `file_url` with the URL for the CSV file you want to use. Replace the value for `event_name` with the event name you want to match in your file, and then click **Call operation**.

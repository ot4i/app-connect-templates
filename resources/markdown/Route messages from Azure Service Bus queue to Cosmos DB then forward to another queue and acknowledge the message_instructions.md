To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Route%20messages%20from%20the%20Azure%20Service%20Bus%20queue%20to%20Azure%20Cosmos%20DB%20based%20on%20the%20message%20content%2C%20then%20send%20them%20to%20another%20Azure%20Service%20Bus%20queue%20and%20acknowledge%20the%20message_instructions.md) (opens in a new window).

This template is used to recieve a message from a routing queue containing ID that can be used to query Azure Cosmos database to obtain routing details contaning which queue or topic to push the message to, and then acknowlege it.

## Using the template

1. Click **Use this template** to start using the template.
1. Click on the **Azure Service Bus** node, and if you're not already connected, connect to your [Azure Service Bus Account]().
1. Click on the **Azure Cosmos DB** node, and if you're not already connected, connect to your [Azure Cosmos DB account]([https://www.ibm.com/docs/en/app-connect/saas?topic=apps-pinecone-vector-database](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-azure-cosmos-db)).
1. Click **Done**.
1. To start the flow, in the banner click **Start flow**.

Want to see if working? Click **Manage** in the API flow, then follow the instructions on getting started. Once you're in the API portal, use the Try it link and then **Generate** some test data. Replace the value for `file_url` with the URL for the CSV file you want to use. Replace the value for `event_name` with the event name you want to match in your file, and then click **Call operation**.

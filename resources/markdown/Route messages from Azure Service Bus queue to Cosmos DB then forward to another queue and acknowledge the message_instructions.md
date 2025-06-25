To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Route%20messages%20from%20the%20Azure%20Service%20Bus%20queue%20to%20Azure%20Cosmos%20DB%20based%20on%20the%20message%20content%2C%20then%20send%20them%20to%20another%20Azure%20Service%20Bus%20queue%20and%20acknowledge%20the%20message_instructions.md) (opens in a new window).

This template is used to recieve a message from a routing queue containing ID that can be used to query Azure Cosmos database to obtain routing details contaning which queue or topic to push the message to, and then acknowlege it.

## Using the template

1. Click **Use this template** to start using the template.
1. Click on the **Azure Service Bus** node, and if you're not already connected, connect to your [Azure Service Bus Account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-azure-service-bus).
1. Click on the **Azure Cosmos DB** node, and if you're not already connected, connect to your [Azure Cosmos DB account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-azure-cosmos-db).
1. To start the flow, in the banner click **Deploy flow**.

Use this template to route messages from the Azure Service Bus queue to Azure Cosmos DB based on the message content, then send them to another Azure Service Bus queue and acknowledge the message.

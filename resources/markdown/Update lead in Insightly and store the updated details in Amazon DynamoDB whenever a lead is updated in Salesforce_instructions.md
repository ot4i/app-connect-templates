To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Update%20lead%20in%20Insightly%20and%20store%20the%20updated%20details%20in%20Amazon%20DynamoDB%20whenever%20a%20lead%20is%20updated%20in%20Salesforce_instructions.md) (opens in a new window).

1.	Click **Create flow** to start using the template.
2.	Connect to the following accounts by using your credentials:
    - **Salesforce** 
    - **Insightly**
    - **Amazon DynamoDB**
    - **Slack**
3.	To start the flow, in the banner click **Start flow**.

Use this template to update a lead or its details in Insightly, and store the updated information in Amazon DynamoDB whenever a new lead is created in Salesforce. In Amazon DynamoDB, the lead will have the created and last modified timestamp records. A Slack message gets sent to the intended channel.

**Note**: This is a sequel scenario to the use case "***Create lead in Insightly and store the details in Amazon DynamoDB whenever a new lead is created in Salesforce***".

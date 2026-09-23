Use this template to batch retrieve customer order history from Hive, enrich each record with customer data from SAP S/4HANA, and insert the combined data into Google BigQuery.

To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Batch%20retrieve%20customer%20order%20history%20from%20Hive%20and%20enrich%20with%20SAP%20S4HANA%20customer%20data%20and%20insert%20into%20Google%20BigQuery_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Hive](https://ibm.biz/achive2)
   - [SAP S/4HANA](https://ibm.biz/acsaps4hana)
   - [Google BigQuery](https://ibm.biz/acgbigquery)
3. In the **Batch process** action, configure the batch retrieval limit as needed.
4. In the **SAP S/4HANA Retrieve customer data by using customer number** action, verify the `Customer` field mapping.
5. In the **Google Cloud BigQuery Insert record** action, verify the field mappings for the BigQuery table.
6. To start the flow, in the banner, click **Start flow**.

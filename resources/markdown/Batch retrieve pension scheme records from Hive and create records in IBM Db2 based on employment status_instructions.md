Use this template to batch retrieve pension scheme records from Hive and create records in IBM Db2 based on employment status, routing active employees to one table and non-active employees to another.

To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Batch%20retrieve%20pension%20scheme%20records%20from%20Hive%20and%20create%20records%20in%20IBM%20Db2%20based%20on%20employment%20status_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Hive](https://ibm.biz/achive2)
   - [IBM Db2](https://ibm.biz/acibmdb2)
3. In the **Batch process** action, configure the batch retrieval limit as needed.
4. In the **IBM Db2 Create HIVE_PENSION_WORKING record** action, verify the field mappings for active employees.
5. In the **IBM Db2 Create HIVE_PENSION_NON_WORKING record** action, verify the field mappings for non-active employees.
6. To start the flow, in the banner, click **Start flow**.

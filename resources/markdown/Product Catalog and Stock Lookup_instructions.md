To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Product%20Catalog%20and%20Stock%20Lookup_instructions.md) (opens in a new window).

## Prerequisites

This template references entities that you can create as follows:

- In your IBM Db2 instance, create a database table named **INVENTORY** in the **DB2INST1** schema with the following 7 columns: 

 - pid
 - name
 - desc
 - in_stock
 - available_qty
 - location
 - price


  Insert some sample data into the INVENTORY table.

## Using the template

1. Click **Create flow** to start using the template.
1. Click each node to review its configuration. If necessary:
   - Connect to your [IBM Db2 account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-ibm-db2/).
   - Connect to your [NetSuite ERP account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-netsuite/).
1. Validate all the mappings and ensure that they are correct.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.


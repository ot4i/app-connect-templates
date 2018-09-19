To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Sync%20products%20from%20IBM%20Db2%20to%20Salesforce%20Commerce%20Cloud_instructions.md) (opens in a new window).

## Prerequisites

This template references entities that you can create as follows:

- In your IBM Db2 instance, create a database table named **PRODUCTSFCC** in the **DB2INST1** schema with the following 5 columns: 

| Name | Type | 
| :---  | :---  |
| `PRD_ID` | `BIGINT` | 
| `PRD_NAME` | `VARCHAR(50 OCTETS)` | 
| `PRD_COST` | `DOUBLE` | 
| `PRD_CREATED_DATE` | `DATE` | 
| `CATALOG` | `VARCHAR(50 OCTETS)` |

  Insert some sample data into the PRODUCTSFCC table.

## Using the template

1. Click **Create flow** to start using the template.
1. Click each node to review its configuration. If necessary:
   - Connect to your [IBM Db2](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-ibm-db2/).
   - Connect to your [Salesforce Commerce Cloud](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/how-to-use-ibm-app-connect-with-salesforce-commerce-cloud/).
1. Validate all the mappings and ensure that they are correct.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

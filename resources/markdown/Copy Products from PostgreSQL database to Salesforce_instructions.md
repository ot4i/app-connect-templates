To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Copy&20Products&20from&20PostgreSQL&20database&20to&20Salesforce_instructions.md) (opens in a new window).

## Prerequisites
This template references entities that you can create as follows:
- In your Salesforce instance, create a custom field for the Product object to capture the quantity of each Product you are creating. Name the custom field Quantity with data type of Text.
- In your PostgreSQL instance, create a database table named product. Sample DDL: CREATE TABLE product (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, “productName” text, “productCode” text, price integer, “unitPrice” integer, active boolean);
- Insert some sample data into the product table.

## Using the template
1. Click **Create flow** to start using the template.
2. Click each node to review its configuration. If necessary:
  - Connect to your [Salesforce](https://ibm.biz/ach2salesforce) account.
  - Connect to your [PostgreSQL](http://ibm.biz/acpostgresql) account.
3. To start the flow, in the banner open the options menu [[&#8942;]] and then click **Start flow**.

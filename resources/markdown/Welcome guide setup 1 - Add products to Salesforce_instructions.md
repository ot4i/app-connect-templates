To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Welcome%20guide%20setup%201%20-%20Add%20products%20to%20Salesforce_instructions.md) (opens in a new window).

This template sets up the products which are used with the following templates:
* [Welcome guide part 3 - Create a CSV file in Box of the products in Salesforce](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Welcome%20guide%20part%203%20-%20Create%20a%20CSV%20file%20in%20Box%20of%20the%20products%20in%20Salesforce_instructions.md).
* [Welcome guide part 4 - Flower order API](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Welcome%20guide%20part%204%20-%20Flower%20order%20API_instructions.md).

## Prerequisites

In Google Sheets, create a sheet with the [products to add to Salesforce](https://github.com/ot4i/app-connect-templates/blob/apendrich-welcome-4/resources/markdown/sample/sunflowerFestivalProductsSample.csv). They'll need to include a Product Name, Product Code and Product Family.

## Using the template

1. Click **Create flow** to start using the template.
1. Click the Google Sheets "Retrieve rows" action and connect to your [Google Sheets account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-google-sheets/).
1. In the Google Sheets "Retrieve rows" action, select the Spreadsheet and Worksheet you want to use.
1. Click the Salesforce "Update or create price book" action and connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
1. Check that an account has been set for the other "Salesforce" actions.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.
1. Once the flow has run, in the banner open the options menu [&#8942;] then click **Stop flow**, otherwise it will try to create the products again as scheduled.

## Clean up

If you need to delete the products you've created, you can use the 'Welcome guide setup 3 - Delete flowers and order from Salesforce' template.

## Related templates:

Welcome guide setup 2 - Create Sunflower Festival order in Salesforce.


Welcome guide setup 3 - Delete flowers and order from Salesforce.

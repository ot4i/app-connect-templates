To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Welcome%20guide%20part%204%20-%20Flower%20order%20API_instructions.md) (opens in a new window).

This template creates the flow from the [Welcome to IBM App Connect [Part 4 of 4]: Create flows for an API](https://www.youtube.com/watch?v=4m4lS5b8Xlw&list=PLzpeuWUENMK2Q77xr7QkvLxU5YxOJxVSH) video, which creates an API to update flower orders in Salesforce, and add new orders to a Trello board.

## Prerequisites

To use this flow, you'll need:
* A Trello board and list to which you can post your flower orders.
* An order with order products in Salesforce.

To setup the order in Salesforce, you'll need to create:
* Flower products with: Name, Product code, Product family (Seeds or Bulb), Active status set to 'true'.
* A price book. Once this is created, enter all your products into the active price book.
* An order, with order products for each flower product you have. To create the order you'll need to create an account and a  contract.

You can use the following templates to help with this setup in Salesforce:
* Welcome guide setup 1 - Add products to Salesforce.
* Welcome guide setup 2 - Create Sunflower Festival order in Salesforce.

## Using the template

1. Click **Create flow** to start using the template.
1. Click "Operations", then "Edit flow" next to the "Create order" operation.
1. Click the Trello "Add New Card to List" action and connect to your [Trello account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-trello/).
1. On the Trello action select the "Board" and "List" where you'd like the new card created.
1. Click the Salesforce "Retrieve order product" action and connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

## Related templates

The previous template in this series is 'Welcome guide part 3 - Create a CSV file in Box of the products in Salesforce'.

The setup templates are:
* Welcome guide setup 1 - Add products to Salesforce.
* Welcome guide setup 2 - Create Sunflower Festival order in Salesforce.

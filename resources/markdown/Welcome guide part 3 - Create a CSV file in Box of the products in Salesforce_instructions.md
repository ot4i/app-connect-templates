To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Welcome%20guide%20part%203%20-%20Create%20a%20csv%20file%20in%20Box%20of%20the%20products%20in%20Salesforce_instructions.md) (opens in a new window).

This template creates the flow from the [Welcome guide video](https://www.youtube.com/watch?v=ALpxbNq-SkQ&list=PLzpeuWUENMK2Q77xr7QkvLxU5YxOJxVSH) to extract all the seed products from Salesforce, and put them in a CSV file in Box.

## Prerequisites

To use this flow, you'll need to create some products in Salesforce to represent the seeds and bulbs from the Sunflower festival. You'll need some products with the following properties:
* Product Name: The name of the flower or seed
* Product Code: A six digit code, the first two should be letters and the last four should be numbers
* Product Family: Either "Bulb" or "Seeds"

[For example](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/sunflowerFestivalProductsSample.csv):
* Product Name,Product Code,Product Family
* Iris,IR1457,Bulb
* Daffodil,DA4758,Bulb
* Tulip,TU4736,Bulb
* Crocus,CR0527,Bulb
* Poppy,PO0474,Seeds
* Sunflower,SU1532,Seeds
* Marigold,MA4534,Seeds
* Pansy,PA6847,Seeds

## Using the template

1. Click **Create flow** to start using the template.
1. Click the Salesforce event and connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
1. Click the Box "Create file" action and connect to your [Box account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-box/).
1. In the Box "Create file" action, choose the folder where you'd like the file to be created.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

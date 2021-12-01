
## Prerequisites

Enable API support on your Saleforce Developer edition account.
Enable API support for Google Drive in Google API Console.

## Using the template

1. Click **Create flow** to start using the template.
2. Click each node to review its configuration. If necessary:
   - Connect to your [Salesforce account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/).
   - Connect to your [Google Drive account](https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-google-drive).
  
3. Validate all the mappings and ensure that they are correct.
4. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

## Testing the template
1. Log in to your Salesforce Developer account.
2. Create a new **Document** in Salesforce
<img width="1426" alt="Screen Shot 2021-11-30 at 8 13 18 PM" src="https://user-images.githubusercontent.com/20688701/144179931-f19c1a72-ddaf-4525-982e-3af33e672d5d.png">

3. Fill in the document details including all the mandatory fields, attach the document then save.
<img width="1438" alt="Screen Shot 2021-11-30 at 8 13 34 PM" src="https://user-images.githubusercontent.com/20688701/144179966-a237f74a-41e5-497d-81dc-4749bd06f122.png">

4. A New Document would be created in assosiated Google Drive.
<img width="526" alt="Screen Shot 2021-11-30 at 8 18 02 PM" src="https://user-images.githubusercontent.com/20688701/144180059-0890c4fb-b2ad-48d3-a7d0-56e525e1dbff.png">

5. Execution of this Flow would be done every 5 mins.

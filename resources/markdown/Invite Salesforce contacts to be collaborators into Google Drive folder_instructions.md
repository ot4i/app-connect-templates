
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
2. Create a new **Contact** in Salesforce
<img width="1423" alt="Screen Shot 2021-11-30 at 3 43 06 AM" src="https://user-images.githubusercontent.com/20688701/144180875-a8d2d965-1dc1-4f6f-9b61-65146ca2ee19.png">

3. A Shared Folder is Created in Google Drive Account
<img width="1438" alt="Screen Shot 2021-11-30 at 8 13 34 PM" src="https://user-images.githubusercontent.com/20688701/144179966-a237f74a-41e5-497d-81dc-4749bd06f122.png">

4. An Invite is sent to Contact's email address to join the Google Drive Shared Folder.
<img width="526" alt="Screen Shot 2021-11-30 at 8 18 02 PM" src="https://user-images.githubusercontent.com/20688701/144180059-0890c4fb-b2ad-48d3-a7d0-56e525e1dbff.png">

5. A Shared Folder is created and invite is sent out to each new Contact added in Salesforce.

To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/API%20to%20use20Email%20Finder%20in%20Hunter%20to%20find%20people%20who%20have%20not%20paid%20and%20create%20a%20Payment%20Reminder%20Campaign%20in%20Mailchimp_instructions.md) (opens in a new window).

This API makes use of Email Finder in Hunter to find a person who have not done a payment. Any leads found will be added to a list in Mailchimp and a Payment Reminder Campaign is sent to all these leads.

Before you use this flow, you must have following information about the person who has not made payment, in this order:
* **Domain** 
* **Email**
* **FirstName**
* **Lastname**

## Using the template

1. Click **Create flow** to start using the template.
1. Click **Operations**, then **Edit flow** for the _Retrieve Customer with filter_ operation.
1. Click on the **Hunter** node, and if you're not already connected, connect to your [Hunter account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-hunter).
1. Click on the **Mailchimp** node, and if you're not already connected, connect to your [Mailchimp account]([https://ibm.biz/aassalesforce](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-mailchimp)).
1. Click **Done**.
1. To start the flow, in the banner click **Start flow**.

Want to see if working? Click **Manage** in the API flow, then follow the instructions on getting started. Once you're in the API portal, use the Try it link and then **Generate** some test data. Replace the value for `domain` with the domain name of the person who you want to search. Replace the value for `first_name` with the first name of the person you want to search.Replace the value for `last_name` with the last name of the person you want to search, and then click **Send**.

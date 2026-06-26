To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/AI-Driven%20Promotional%20Campaign%20Content%20Generation%20Flow_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [SAP Commerce Cloud](https://ibm.biz/acsapcommercecloud)
   - [Google Gemini](https://ibm.biz/acgooglegemini)
   - [Zoho CRM](https://ibm.biz/aczohocrm)
   - [Gmail](https://ibm.biz/acgmail)
3. In the **SAP Commerce Cloud Retrieve products** action, configure the `baseSiteId` and the product retrieval limit as needed.
4. In the **Google Gemini Generate text with Gemini model** action, review the prompt and update the `modelId` if you want to use a different Gemini model.
5. In the **Zoho CRM Create campaign** action, verify the `Campaign_Name` and `Description` field mappings for your campaign requirements and create campaign for trending products with good rating.
6. To start the flow, in the banner, click **Start flow**.

Use this template to automatically generate AI-driven promotional campaign content for high-rated products in your SAP Commerce Cloud catalogue, create the campaigns in Zoho CRM using Google Gemini-generated descriptions, and send a Gmail notification for each campaign created.

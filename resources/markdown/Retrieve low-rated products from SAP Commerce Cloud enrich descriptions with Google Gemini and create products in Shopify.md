To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/Retrieve%20low-rated%20products%20from%20SAP%20Commerce%20Cloud%20enrich%20descriptions%20with%20Google%20Gemini%20and%20create%20products%20in%20Shopify_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [SAP Commerce Cloud](https://ibm.biz/acsapcommercecloud)
   - [Google Gemini](https://ibm.biz/acgooglegemini)
   - [Shopify](https://ibm.biz/acshopify)
   - [Gmail](https://ibm.biz/acgmail)
3. In the **SAP Commerce Cloud Retrieve products** action, configure the `baseSiteId` and the product retrieval limit as needed.
4. In the **Google Gemini Generate text with Gemini model** action, review the prompt and update the `modelId` if you want to use a different Gemini model.
5. In the **Shopify Create product** action, verify the field mappings for the product title and AI-generated description and create a product for low performing products.
6. To start the flow, in the banner, click **Start flow**.

Use this template to automatically syndicate your SAP Commerce Cloud product catalogue to Shopify, enriching low-rated product descriptions with AI-generated content from Google Gemini, and sending a Gmail notification on each product creation.

To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Use%20Amazon%20SageMaker%20to%20classify%20inbound%20documents%20and%20create%20ServiceNow%20incidents%20or%20Salesforce%20cases%20or%20Coupa%20invoices_instructions.md) (opens in a new window).

Use this template to classify inbound documents using an Amazon SageMaker endpoint. Based on the classification result, the flow creates an incident in ServiceNow, a case in Salesforce, or an invoice in Coupa, and sends a confirmation email via Gmail.

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Amazon SageMaker](https://ibm.biz/acamazonsagemaker)
   - [Gmail](https://ibm.biz/acgmail)
   - [ServiceNow](https://ibm.biz/acservicenow)
   - [Salesforce](https://ibm.biz/acsalesforce)
   - [Coupa](https://ibm.biz/accoupa)
3. In each **Gmail Send email** node, update the **To** field with the recipient email address.
4. To start the flow, in the banner, click **Start flow**.

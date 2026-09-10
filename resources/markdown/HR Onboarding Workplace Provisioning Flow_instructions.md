To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/HR%20Onboarding%20Workplace%20Provisioning%20Flow_instructions.md) (opens in a new window).

This flow triggers when a new candidate record is created in Zoho Recruit. It creates a new person record in IBM Maximo Real Estate and Facilities, retrieves the corresponding employee record, finds an available workstation, creates a move work task to assign the workstation, and sends a confirmation email via Gmail.

1. Click **Use this template** to start using the template.
2. Click the **Zoho Recruit** trigger node, and if you're not already connected, connect to your [Zoho Recruit account](https://ibm.biz/aczohorecruit).
3. Click the **IBM Maximo Real Estate and Facilities** create person node, and if you're not already connected, connect to your [IBM Maximo Real Estate and Facilities account](https://ibm.biz/acibmmaximo).
4. Click the **IBM Maximo Real Estate and Facilities** retrieve space node, and verify the account connection points to your Maximo instance that contains space data.
5. Click the **IBM Maximo Real Estate and Facilities** create work task node, and verify the account connection is the same Maximo account used in step 3.
6. Click the **Gmail** send email node, and if you're not already connected, connect to your [Gmail account](https://ibm.biz/acgmail). Update the **To** field with your preferred recipient email address.
7. To start the flow, in the banner click **Start flow**.

The flow is started when a new candidate is created in Zoho Recruit. It automatically provisions a workstation by creating a move work task in IBM Maximo Real Estate and Facilities and sends a confirmation email with the work task details via Gmail.

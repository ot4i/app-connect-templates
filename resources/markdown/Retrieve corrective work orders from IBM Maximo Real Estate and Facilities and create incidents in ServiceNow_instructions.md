To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Retrieve%20corrective%20work%20orders%20from%20IBM%20Maximo%20Real%20Estate%20and%20Facilities%20and%20create%20incidents%20in%20ServiceNow_instructions.md) (opens in a new window).

Use this template to retrieve corrective work orders from IBM Maximo Real Estate and Facilities on a schedule, create a corresponding incident in ServiceNow for each work order, update the work order record in Maximo with the ServiceNow incident ID, and send a summary email via Gmail.

1. Click **Use this template** to start using the template.
2. Click the **Scheduler** trigger node, and configure the schedule interval and time zone to match your requirements.
3. Click the **IBM Maximo Real Estate and Facilities** retrieve node, and if you're not already connected, connect to your [IBM Maximo Real Estate and Facilities account](https://ibm.biz/acmaximorealestateandfacilities).
4. Click the **ServiceNow** create incident node, and if you're not already connected, connect to your [ServiceNow account](https://ibm.biz/acservicenow).
5. Click the **IBM Maximo Real Estate and Facilities** update node, and verify the account connection is the same Maximo account used in step 3.
6. Click the **Gmail** send email node, and if you're not already connected, connect to your [Gmail account](https://ibm.biz/acgmail). Update the **To** field with your preferred recipient email address.
7. To start the flow, in the banner click **Start flow**.

The flow runs at the configured interval. For each corrective work order created since the last run, the flow creates a ServiceNow incident, writes the incident ID back to the Maximo work order, and sends an email summary via Gmail.

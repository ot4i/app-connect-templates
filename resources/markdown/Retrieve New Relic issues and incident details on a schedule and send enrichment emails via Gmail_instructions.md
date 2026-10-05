To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Retrieve%20New%20Relic%20issues%20and%20incident%20details%20on%20a%20schedule%20and%20send%20enrichment%20emails%20via%20Gmail_instructions.md) (opens in a new window).

Use this template to retrieve New Relic issues on a schedule, then iterate over the associated incident IDs to retrieve each incident and run a custom NRQL (New Relic Query Language) query to enrich the incident data. The enriched results are sent as individual emails via Gmail.

1. Click **Use this template** to start using the template.
2. In the **Scheduler** trigger node, configure the schedule interval and time zone to match your requirements.
3. Click the **New Relic** node, and if you're not already connected, connect to your [New Relic account](https://ibm.biz/acnewrelic).
4. Click the **Gmail** node, and if you're not already connected, connect to your [Gmail account](https://ibm.biz/acgmail).
5. In the **Gmail Send email** action, update the **To** field with the recipient email address.
6. To start the flow, in the banner, click **Start flow**.

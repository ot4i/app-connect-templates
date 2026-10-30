To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Share%20Datadog%20dashboard%20graph%20snapshots%20in%20Slack%20and%20email%20the%20links%20via%20Gmail%20every%20day_instructions.md) (opens in a new window).

Use this template to share a Datadog dashboard every day without logging in to Datadog. The flow retrieves a dashboard, creates a graph snapshot of the last 24 hours for each widget that has a metric query, uploads each snapshot image to a Slack channel, and sends an email via Gmail with links to all the snapshots.

1. Click **Use this template** to start using the template.
2. In the **Scheduler** trigger node, configure the schedule and time zone to match your requirements. By default, the flow runs every day at 09:00 UTC.
3. Click the **Datadog** node, and if you're not already connected, connect to your [Datadog account](https://ibm.biz/acdatadog). In the **Datadog Retrieve dashboard by ID** action, replace `your-dashboard-id` with the ID of your dashboard. The ID is shown in the dashboard URL, for example `abc-def-ghi`.
4. Click the **Slack** node, and if you're not already connected, connect to your [Slack account](https://ibm.biz/acslack). In the **Slack Add file** action, select the channel to upload the snapshots to.
5. Click the **Gmail** node, and if you're not already connected, connect to your [Gmail account](https://ibm.biz/acgmail). In the **Gmail Send email** action, update the **To** field with the recipient email address.
6. To start the flow, in the banner, click **Start flow**.

Note: Widgets that do not have a metric query, such as notes and groups, are skipped.

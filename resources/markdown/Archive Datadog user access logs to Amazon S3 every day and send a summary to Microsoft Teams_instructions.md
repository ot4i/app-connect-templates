To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Archive%20Datadog%20user%20access%20logs%20to%20Amazon%20S3%20every%20day%20and%20send%20a%20summary%20to%20Microsoft%20Teams_instructions.md) (opens in a new window).

Use this template to collect audit evidence automatically. Every day, the flow retrieves the Datadog logs from the last 24 hours that identify a user, keeps only the fields that an access audit needs (timestamp, user ID, service, status, HTTP method, path, status code, and host), and archives them as a JSON file in Amazon S3. A summary with the number of records and denied requests is posted to a Microsoft Teams channel.

1. Click **Use this template** to start using the template.
2. In the **Scheduler** trigger node, configure the schedule and time zone to match your requirements. By default, the flow runs every day at 01:00 UTC.
3. Click the **Datadog** node, and if you're not already connected, connect to your [Datadog account](https://ibm.biz/acdatadog). In the **Datadog Retrieve logs** action, update the query (`@usr.id:*` by default) to select the logs that you want to archive, for example `service:payments-api @usr.id:*`. If more logs than the maximum number of items are found, the flow stops with an error instead of archiving an incomplete file, so increase the limit to match your daily volume.
4. Click the **Amazon S3** node, and if you're not already connected, connect to your [Amazon S3 account](https://ibm.biz/acamazons3). In the **Amazon S3 Create object** action, replace `your-bucket-name` with the name of your bucket.
5. Click the **Microsoft Teams** node, and if you're not already connected, connect to your [Microsoft Teams account](https://ibm.biz/acmsteams). In the **Microsoft Teams Send message to channel** action, select the team and channel to post to.
6. To start the flow, in the banner, click **Start flow**.

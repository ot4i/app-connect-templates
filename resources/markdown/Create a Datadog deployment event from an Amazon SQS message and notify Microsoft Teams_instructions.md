To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Create%20a%20Datadog%20deployment%20event%20from%20an%20Amazon%20SQS%20message%20and%20notify%20Microsoft%20Teams_instructions.md) (opens in a new window).

Use this template to record deployments in Datadog. When your CI/CD pipeline sends a deployment message to an Amazon SQS queue, the flow parses the message, creates a Datadog event that is tagged with the service, environment, version, and pipeline, and posts a summary to a Microsoft Teams channel. The message is then removed from the queue. Failed deployments are created as error events.

1. Click **Use this template** to start using the template.
2. Click the **Amazon SQS** trigger node, and if you're not already connected, connect to your [Amazon SQS account](https://ibm.biz/acamazonsqs). Replace the queue URL with the URL of the queue that your pipeline sends deployment messages to.
3. Make sure that your pipeline sends messages in the JSON format that is shown in the **JSON Parser** node, for example:
`{"status": "success", "service": "payments-api", "version": "2.4.1", "environment": "prod", "pipeline": {"id": "4821", "url": "https://ci.example.com/job/payments-api/4821/"}, "commit": {"sha": "a3f9c21", "author": "jane.doe", "message": "Raise connection pool ceiling"}, "duration_seconds": 214}`
4. Click the **Datadog** node, and if you're not already connected, connect to your [Datadog account](https://ibm.biz/acdatadog).
5. Click the **Microsoft Teams** node, and if you're not already connected, connect to your [Microsoft Teams account](https://ibm.biz/acmsteams). In the **Microsoft Teams Send message to channel** action, select the team and channel to post to.
6. In the **Amazon SQS Remove message** action, replace the queue URL with the same queue URL that you used in the trigger.
7. To start the flow, in the banner, click **Start flow**.

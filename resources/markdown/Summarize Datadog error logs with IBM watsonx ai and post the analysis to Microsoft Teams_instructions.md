To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Summarize%20Datadog%20error%20logs%20with%20IBM%20watsonx%20ai%20and%20post%20the%20analysis%20to%20Microsoft%20Teams_instructions.md) (opens in a new window).

Use this template to analyze error logs when a Datadog monitor alert is triggered. The flow retrieves the error logs for the alert scope from the last 15 minutes, groups them by message, and uses IBM watsonx.ai to identify the most likely root cause and the next diagnostic step. The analysis is posted to a Microsoft Teams channel. Recovery and other non-triggered notifications are ignored.

1. Click **Use this template** to start using the template.
2. Click the **Datadog** trigger node, and if you're not already connected, connect to your [Datadog account](https://ibm.biz/acdatadog). Copy the webhook URL that is displayed for the **New webhook event** trigger.
3. In Datadog, go to **Integrations** > **Webhooks**, create a webhook, paste the webhook URL into the **URL** field, and use the following payload:

```json
{
  "alert_title": "$ALERT_TITLE",
  "alert_transition": "$ALERT_TRANSITION",
  "alert_scope": "$ALERT_SCOPE",
  "link": "$LINK"
}
```

4. In each Datadog monitor that should trigger the analysis, add `@webhook-<your webhook name>` to the monitor message. The **Datadog Retrieve logs** action searches for `<alert scope> status:error`, so use monitors that are grouped by service, for example `service:checkout-api`.
5. Click the **IBM watsonx.ai** node, and if you're not already connected, connect to your [IBM watsonx.ai account](https://ibm.biz/acibmwatsonxai). In the **IBM watsonx.ai Generate text** action, replace `YOUR_WATSONX_PROJECT_ID` with your watsonx.ai project ID, and change the model ID if required.
6. Click the **Microsoft Teams** node, and if you're not already connected, connect to your [Microsoft Teams account](https://ibm.biz/acmsteams). In the **Microsoft Teams Send message to channel** action, select the team and channel to post to.
7. To start the flow, in the banner, click **Start flow**.

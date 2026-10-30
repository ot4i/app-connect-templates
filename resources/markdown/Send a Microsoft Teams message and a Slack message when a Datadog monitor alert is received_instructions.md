To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Send%20a%20Microsoft%20Teams%20message%20and%20a%20Slack%20message%20when%20a%20Datadog%20monitor%20alert%20is%20received_instructions.md) (opens in a new window).

Use this template to send a Microsoft Teams channel message and a Slack message when a Datadog monitor sends an alert notification to App Connect. The messages include the alert transition, title, priority, scope, query, the monitor message (for example, mitigation steps), and a link to the monitor in Datadog.

1. Click **Use this template** to start using the template.
2. Click the **Datadog** trigger node, and if you're not already connected, connect to your [Datadog account](https://ibm.biz/acdatadog). Copy the webhook URL that is displayed for the **New webhook event** trigger.
3. In Datadog, go to **Integrations** > **Webhooks**, create a webhook, paste the webhook URL into the **URL** field, and use the following payload:

```json
{
  "alert_title": "$ALERT_TITLE",
  "alert_transition": "$ALERT_TRANSITION",
  "alert_priority": "$ALERT_PRIORITY",
  "alert_scope": "$ALERT_SCOPE",
  "alert_query": "$ALERT_QUERY",
  "event_message": "$TEXT_ONLY_MSG",
  "link": "$LINK"
}
```

4. In each Datadog monitor that should notify the channels, add `@webhook-<your webhook name>` to the monitor message.
5. Click the **Microsoft Teams** node, and if you're not already connected, connect to your [Microsoft Teams account](https://ibm.biz/acmsteams). In the **Microsoft Teams Send message to channel** action, select the team and channel to post to.
6. Click the **Slack** node, and if you're not already connected, connect to your [Slack account](https://ibm.biz/acslack). In the **Slack Send message** action, select the channel to post to.
7. To start the flow, in the banner, click **Start flow**.

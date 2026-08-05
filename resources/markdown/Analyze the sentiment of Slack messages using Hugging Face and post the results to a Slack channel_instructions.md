To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Classify%20Slack%20messages%20sentiment%20using%20Hugging%20Face%20and%20post%20results%20to%20Slack%20channel_instructions.md) (opens in a new window).

This flow retrieves messages from a Slack channel, classifies their sentiment using Hugging Face (positive, negative, or neutral), and posts the sentiment analysis results back to a Slack channel.

1. Click **Use this template** to start using the template.
2. Click the **Slack** node for the retrieve step, and if you're not already connected, connect to your [Slack account](http://ibm.biz/acslack).
3. Update the Slack channel ID in the **Retrieve messages** step to point to the source channel you want to monitor.
4. Click the **Hugging Face** node, and if you're not already connected, connect to your [Hugging Face account](http://ibm.biz/achuggingface).
5. The Hugging Face node uses the `distilbert/distilbert-base-uncased-finetuned-sst-2-english` model for text classification. Update the model name if you wish to use a different sentiment analysis model.
6. Click the **Slack** node for the send step and update the target channel ID where sentiment results should be posted.
7. To start the flow, in the banner, click **Start flow** or **Deploy flow**.

Use this template to classify the sentiment of Slack messages using Hugging Face and post the analysis results to a Slack channel.

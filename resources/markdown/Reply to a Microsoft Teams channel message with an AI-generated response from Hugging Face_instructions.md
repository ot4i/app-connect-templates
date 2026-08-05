To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Generate%20AI%20chat%20response%20via%20Hugging%20Face%20for%20new%20Microsoft%20Teams%20channel%20message_instructions.md) (opens in a new window).

This flow listens for new messages in a Microsoft Teams channel, sends the message content to Hugging Face for AI-powered chat response generation, and posts the generated response back to the same Teams channel.

1. Click **Use this template** to start using the template.
2. Click the **Microsoft Teams** trigger node, and if you're not already connected, connect to your [Microsoft Teams account](http://ibm.biz/acmsteams).
3. Update the **Team ID** and **Channel ID** in the trigger to point to the Teams channel you want to monitor for new messages.
4. Click the **Hugging Face** node, and if you're not already connected, connect to your [Hugging Face account](http://ibm.biz/achuggingface).
5. The Hugging Face node uses the `meta-llama/Llama-3.1-8B-Instruct` model for chat completion. Update the model name if you wish to use a different language model.
6. Click the **Microsoft Teams** action node and update the **Team ID** and **Channel ID** to point to the channel where the AI response should be posted.
7. To start the flow, in the banner, click **Start flow** or **Deploy flow**.

Use this template to automatically generate AI-powered chat responses via Hugging Face whenever a new message is posted to a Microsoft Teams channel.

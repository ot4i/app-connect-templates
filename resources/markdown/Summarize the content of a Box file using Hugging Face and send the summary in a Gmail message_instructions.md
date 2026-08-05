To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Summarize%20the%20content%20of%20a%20Box%20file%20using%20Hugging%20Face%20and%20send%20the%20summary%20in%20a%20Gmail%20message_instructions.md) (opens in a new window).

This flow downloads a file from Box, summarizes its text content using Hugging Face, and emails the generated summary to a recipient via Gmail.

1. Click **Use this template** to start using the template.
2. Click the **Box** node, and if you're not already connected, connect to your [Box account](http://ibm.biz/ach2box).
3. Update the **File ID** in the Box step to point to the document you want to summarize.
4. Click the **Hugging Face** node, and if you're not already connected, connect to your [Hugging Face account](http://ibm.biz/achuggingface).
5. The Hugging Face node uses the `sshleifer/distilbart-cnn-12-6` model for text summarization. Update the model name if you wish to use a different summarization model.
6. Click the **Gmail** node, and if you're not already connected, connect to your [Gmail account](http://ibm.biz/acgmail).
7. Update the **To** field in the Gmail step with the recipient email address where the summary should be sent.
8. To start the flow, in the banner, click **Start flow** or **Deploy flow**.

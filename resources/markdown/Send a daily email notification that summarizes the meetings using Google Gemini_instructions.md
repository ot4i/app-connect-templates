To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/Send%20a%20daily%20email%20notification%20that%20summarizes%20the%20meetings%20using%20Google%20Gemini_instructions.md) (opens in a new window).


Use this template to automatically receive a daily email summarizing your meeting transcripts stored in Google Drive. The workflow is powered by a scheduler that runs every day, downloads the latest transcripts from Google Drive, processes them through Google Gemini to generate concise summaries, and then sends the summarized meeting notes directly to your inbox. This integration helps you stay up to date with meeting insights without manually reviewing transcripts.

## Using the template

1. Click **Use this template** to start using the template.
1. Connect to your [Google Drive](https://www.ibm.com/docs/en/app-connect/cd?topic=apps-google-drive).
1. On the Google Drive "Retrieve folder items" node, give the __folder id__ for __parent folder__ where you store meeting transcripts daily.
1. Click on the **Google Gemini** node, and if you're not already connected, connect to your [Google Gemini account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-google-gemini).
1. Click on the **Email** node, and if you're not already connected, connect to your [Email](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-email).
1. On the Email "Send Email" node, give your __email__ for __To__ field
1. Click **Done**.
1. To start the flow, in the banner click **Start flow**.

Use this template for getting daily mails summarizing your meeting transcripts stored in Google Drive.

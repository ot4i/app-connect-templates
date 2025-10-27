To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/RAG-Powered%20Slack%20Assistant%20Using%20Google%20Gemini%20and%20Milvus_instructions.md) (opens in a new window).


When the flow is running, In Slack, when we post a question using the custom slash command you've defined, Google Gemini uses this question to generate embeddings. These embeddings are used by Milvus to do a query for the context related to the question. The context that we got from Milvus can be used as a prompt to Google Gemini to get answers to the question.


## Using the template

1. Click **Use this template** to start using the template.
1. Connect to your [Slack account](https://ibm.biz/aasslack).
    - **Note:** To add the slash command app, you need to be the owner of a workspace or have admin privileges.
1. On the Slack "New slash command message
" event, copy the callback URL and [configure a custom slash command](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-slack#index__consider-general) called `/askgemini`.
1. Click on the **Google Gemini** node, and if you're not already connected, connect to your [Google Gemini account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-google-gemini).
1. Click on the **Milvus** node, and if you're not already connected, connect to your [Milvus account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-milvus).
1. On the "Milvus Search Vector" node, you need to select the **Database** and then the **Collection** within that database where the context information for this Assistant is set up.
1. On the "Slack Send Message" node, you need to select the **Destination Type** and then the **Send to** where you want this Assistant whats to reply to the question
1. Click **Done**.
1. To start the flow, in the banner click **Start flow**.

To test your flow:

1. Go to any channel to which you configured in your Slack workspace.
1. Type ``/askgemini <your question>``
1. You will get an answer as a reply.

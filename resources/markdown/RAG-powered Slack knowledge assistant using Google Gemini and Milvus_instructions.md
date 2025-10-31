To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/RAG-powered%20Slack%20knowledge%20assistant%20using%20Google%20Gemini%20and%20Milvus_instructions.md) (opens in a new window).


## Using the template

1. Click **Use this template** to start using the template.
1. Connect to your [Slack account](https://ibm.biz/aasslack).
    
    **Note:** To add the slash command app, you need to be the owner of a workspace or have admin privileges.
1. On the Slack "New slash command message" event, copy the callback URL and [configure a custom slash command](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-slack#index__consider-general) called `/askgemini`.
1. Click on the **Google Gemini** node, and if you're not already connected, connect to your [Google Gemini account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-google-gemini).
1. Click on the **Milvus** node, and if you're not already connected, connect to your [Milvus account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-milvus).
1. On the Milvus "Search vector" node, you need to select the **Database** and then the **Collection** within that database where the context information for this assistant is set up.
1. On the Slack "Send message" node, you need to select the **Destination type** and the **Send to**, where you want this assistant whats to reply to the question
1. Click **Done**.
1. To start the flow, in the banner click **Start flow**.

    When the flow is running, and we post a question in Slack using the custom slash command you defined, Google Gemini generates embeddings for the question. These embeddings are then used by Milvus to query for context related to the question. The context retrieved from Milvus is used as a prompt for Google Gemini to generate an answer to the question.


## Test your flow

1. Go to any channel which you configured in your Slack workspace.
1. Type ``/askgemini <your question>``
1. You will get an answer as a reply.

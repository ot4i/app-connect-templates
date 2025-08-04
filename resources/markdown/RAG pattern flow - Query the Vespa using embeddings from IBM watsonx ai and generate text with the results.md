To refer to these instructions while editing the flow, open [the GitHub page]() (opens in a new window).

This API takes a question and IBM watsonx.ai uses this question to generate embeddings. These embeddings are used by Vespa to do a query. The results generated from this can be used as a prompt to IBM watsonx.ai to get answers to the question.

## Using the template

1. Click **Use this template** to start using the template.
1. Click **Operations**, then **Edit flow** for the _Create vectors_ operation.
1. Click on the **IBM Watsonx AI** node, and if you're not already connected, connect to your [IBM watsonx.ai account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-watsonxai).
1. Click on the **Vespa** node, and if you're not already connected, connect to your [Vespa account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-vespa).
1. Click **Done**.
1. To start the flow, in the banner click **Start flow**.

Want to see if working? Click **Manage** in the API flow, then follow the instructions on getting started. Once you're in the API portal, use the Try it link and then **Generate** some test data. Replace the value for `file_url` with the URL for the CSV file you want to use. Replace the value for `event_name` with the event name you want to match in your file, and then click **Call operation**.

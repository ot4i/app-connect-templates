To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/Summarize%20ServiceNow%20incident%20tickets%20using%20Amazon%20Bedrock%20and%20send%20email%20via%20Gmail_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [ServiceNow](https://ibm.biz/acservicenow)
   - [Amazon Bedrock](https://ibm.biz/acawsbedrock)
   - [Gmail](https://ibm.biz/acgmail)
3. To start the flow, in the banner, click **Start flow**.


In this example, the flow triggers when a new incident ticket is created in ServiceNow. The ticket details are sent to Amazon Bedrock (using the Amazon Nova Pro model) which generates a concise professional summary that includes the incident overview, business impact, likely root cause, recommended resolution steps, a customer-facing response, and the confidence level of the analysis. The summary is then automatically emailed via Gmail. This helps your IT service desk team respond to incidents faster with AI-generated insights.

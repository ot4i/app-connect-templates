To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Amazon%20EventBridge%20sends%20events%20when%20a%20Salesforce%20lead%20is%20successfully%20created%20or%20when%20a%20Salesforce%20lead%20creation%20fails_instructions.md) (opens in a new window).

1.	Click **Use this template** to start using the template.
2.	Connect to the following accounts by using your credentials:
   - [Microsoft Excel Online](https://ibm.biz/acmsexcel)
   - [Salesforce](https://ibm.biz/ach2salesforce)
   - [Amazon EventBridge](https://ibm.biz/acamazoneventbridge)
   - [Slack](https://ibm.biz/acslack)
3.	To start the flow, in the banner click **Start flow**.

Use this template to perform the following use case: When a new row is appended to the Microsoft Excel Online worksheet, a lead is created in Salesforce.
Upon each successful lead creation in Salesforce, Amazon EventBridge sends events to the specified event bus. 
A Slack notification then confirms that the event has been published. 

If the Salesforce lead creation fails, Amazon EventBridge sends events to the specified event bus, and a Slack notification gets sent to the intended channel informing that the failed event is published.

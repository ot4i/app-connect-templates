To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Launch%20an%20Amazon%20EC2%20instance%20for%20each%20retrieved%20alarm%20from%20Amazon%20CloudWatch_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Amazon EC2](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-amazon-ec2)
   - [Amazon CloudWatch](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-amazon-cloudwatch) 
   - [Slack](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-slack)
3. To start the flow, in the banner, click **Start flow**.

Use this template to launch an Amazon EC2 instance for each retrieved alarm from Amazon CloudWatch. If the alarm state is equal to 'Alarm' from the alarm metrics retrieved from Amazon CloudWatch,an instance in Amazon EC2 is launched. In this flow, the Amazon CloudWatch CPU usage metrics are monitored periodically. If the alarm is triggered for breaching the threshold, a new instance is launched in Amazon EC2.



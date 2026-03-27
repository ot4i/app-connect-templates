To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/Consume%20IBM%20MQ%20messages%20and%20send%20them%20to%20Splunk%20over%20HEC_instructions.md) (opens in a new window).


## Using the template

1. Click **Use this template** to start using the template.
1. Connect to [Ibm MQ](https://www.ibm.com/docs/en/app-connect/cd?topic=apps-ibm-mq).
1. On the Ibm mq event node, provide the __Queue name__ for the which queue we have to subscribe.
1. Click on the **Splunk** node, and if you're not already connected, connect to your [Splunk account](https://www.ibm.com/docs/en/app-connect/saas?topic=apps-splunk).
1. On the Splunk "Retrieve HEC token by ID" node, provide your __HEC token name__ in __HEC token id__ field
1. Click **Done**.
1. To start the flow, in the banner click **Start flow**.

Use this template to consume events from IBM MQ and send them to Splunk using HEC

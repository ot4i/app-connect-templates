To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Stop%20or%20start%20or%20reboot%20the%20Amazon%20EC2%20instance%20whenever%20a%20Zendesk%20Service%20ticket%20gets%20created_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - **Zendesk Services** 
   - **Amazon EC2**
   - **Slack**
3. To start the flow, in the banner click **Start flow**.

The flow is started whenever a new ticket gets created in Zendesk Service.

In this example, the flow checks the Zendesk Service ticket’s subject to whether to start, stop, or reboot the Amazon EC2 instance based on the instance ID from the Zendesk Service ticket. A slack message gets sent to notify the intended channel that the instance has been started, stopped, or rebooted.

For more information, visit the IBM Integration Community for this use case. See, [Using IBM® App Connect to interact with Amazon EC2](https://community.ibm.com/community/user/integration/blogs/shamini-arumugam1/2022/10/07/using-ibm-app-connect-to-interact-with-amazon-ec2).


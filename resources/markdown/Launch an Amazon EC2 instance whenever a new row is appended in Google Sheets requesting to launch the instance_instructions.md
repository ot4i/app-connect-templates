To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/?_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - **Google Sheets** 
   - **Amazon EC2**
   - **Gmail**
3. To start the flow, in the banner, open the options menu [⋮] and click **Start flow**.

The flow is started whenever a new row is appended in Google Sheets requesting to launch the instance.

In this example, the worksheet has AMI (Availability Machine Images) related parameters. It checks for the column value that indicates whether to launch the instance. An email is then sent from your Gmail account to the intended recipient to notify them that the instance has been launched.

For more information, visit the IBM Integration Community for this use case. See, [Using IBM® App Connect to interact with Amazon EC2](https://community.ibm.com/community/user/integration/blogs/shamini-arumugam1/2022/10/07/using-ibm-app-connect-to-interact-with-amazon-ec2).


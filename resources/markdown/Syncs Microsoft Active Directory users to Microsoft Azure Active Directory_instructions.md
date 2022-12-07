To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Syncs%20Microsoft%20Active%20Directory%20users%20to%20Microsoft%20Azure%20Active%20Directory_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - **Microsoft Active Directory** 
   - **Microsoft Azure Active Directory**
3. To start the flow, in the banner, open the options menu [⋮] and click **Start flow**.

This flow is a scheduler-based flow that retrieves users from Microsoft Active Directory (AD) based on the base-distinguished name.

The flow creates or updates the user in Microsoft Azure AD whenever a new user is created or updated in Microsoft AD, helping you keep your user information in sync.

For more information, visit the IBM Integration Community for this use case. See, [Using Microsoft Azure AD with IBM® App Connect](https://community.ibm.com/community/user/integration/blogs/shamini-arumugam1/2022/04/01/using-ibm-app-connect-to-interact-with-msazure-ad).


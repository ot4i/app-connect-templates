To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/Syncs%20Microsoft%20Active%20Directory%20users%20to%20Microsoft%20Entra%20ID_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Microsoft Active Directory](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-microsoft-active-directory)
   - [Microsoft Entra ID](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-microsoft-azure-active-directory)
3. To start the flow, in the banner click **Start flow**.

This flow is a scheduler-based flow that retrieves users from Microsoft Active Directory (AD) based on the base-distinguished name.

The flow creates or updates the user in Microsoft Entra ID whenever a new user is created or updated in Microsoft AD, helping you keep your user information in sync.

For more information, visit the IBM Integration Community for this use case. See, [Using Microsoft Entra ID with IBM® App Connect](https://community.ibm.com/community/user/integration/blogs/shamini-arumugam1/2022/04/01/using-ibm-app-connect-to-interact-with-msazure-ad).


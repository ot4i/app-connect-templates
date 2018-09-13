To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Private%20repositories%20infos_instructions.md) (opens in a new window).

This API takes a URL to repository API URL with token and limit. It uses that information to retrieve the repositories, parse its response, and check for the `is_private` value in response. If true, it will send an email to the email address that you specify with a list of the accounts that have a private repository.

1. Click **Create flow For API** to start using the template.
1. For the _Create leads_ operation, click **Operations** &gt; **Edit flow** .
1. Click each node to review its configuration. If necessary:
 - Connect to your [HTTP invoke method](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-http/).
 - Connect to your [Gmail account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-gmail/).
1. In the Gmail node, update the mandatory field by adding a valid email address.
1. Click **Done**.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

Want to see the flow working? Click the **Manage** tab &gt; **Manage API with IBM API Connect**. In the API portal, use the **Try it** link. Enter a value for the `token` and `limit` parameters then click **Call operation**. The token and limit parameters that you specified will be displayed in the response.

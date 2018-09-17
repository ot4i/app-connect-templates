To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/API%20to%20retrieve%20source%20code%20repository%20details%20and%20email%20the%20owners%20of%20inactive%20repositories_instructions.md) (opens in a new window).

## Prerequisites

You'll need an API with a `repositories` resource to retrieve information about repositories in a source control management hosting service.

If you do not have access to an API with this kind of information and you want to test this flow, you can use the following URL which retrieves records from the Bitbucket `repositories` resource using ‘limit’ and ‘token’ API query parameters. `https://api.bitbucket.org/2.0/repositories?pagelen=limitValue&after=tokenValue`

## Using the template

1. Click **Create flow** to start using the template.
1. Click **Operations** &gt; **Edit flow** for the _Retrieve repository with filter_ operation.
1. Click each node to review its configuration. If necessary:
 - Connect to your [HTTP invoke method](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-http/). (To test this template, you can use the following URL in the **Override the HTTP endpoint host name and port of the URL used in the flow:** field - `https://api.bitbucket.org/2.0/repositories?pagelen=limitValue&after=tokenValue`).
 - Connect to your [Gmail account](https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-gmail/).
1. In the Gmail node, update the mandatory **To** field by adding a valid email address.
1. Click **Done**.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

## Testing the template

1. Click the **Manage** tab &gt; **Manage API with IBM API Connect**. 
1. Expose and share the flow as an API.
1. Open the API Portal. 
 - (Optional) If this is your first time using the Portal, click **Settings** &gt; **Portal** &gt; **Select Portal** &gt; **IBM Developer Portal**. 
 - Click the Portal URL link that is generated. Note: It can take up to 2 hours for the Portal to become accessible. 
1. Once you're in the API portal, use the **Try it** link. 
1. Enter a value for the `token` and `limit` parameters.
1. Click **Call operation**. 

The results of the API are displayed using the pagination parameters that you specified.

Check for messages about inactive repositories that were sent to the Gmail account that you specified in the flow. 

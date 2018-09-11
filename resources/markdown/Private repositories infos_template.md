To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Private%20repositories%20infos_instructions.md) (opens in a new window).

This API takes a URL to repository api url with token and limit. It uses that information to retrieve the repositories, parse its response, check for the `is_private` value in response if it is true it will send a mail to admin else nothing. And give a reply of full list which contains account_id of the person who has private repository.

1. Click **Create flow For API** to start using the template.
1. Connect to your Gmail and http accounts.
1. Click **Operations**, then **Edit flow** for the _Create leads_ operation.
1. Click **Done**.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

Want to see if working? Click **Manage** in the API flow, then follow the instructions on getting started. Once you're in the API portal, use the Try it link. Enter the value for the `token` and `limit`, and click **Call operation**. You will get next token and limit as in response.

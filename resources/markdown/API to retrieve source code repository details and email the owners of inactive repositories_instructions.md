To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/API%20to%20retrieve%20source%20code%20repository%20details%20and%20email%20the%20owners%20of%20inactive%20repositories_instructions.md) (opens in a new window).

Use this template to create an API that takes token and limit. It uses that information to retrieve the repositories from repository API url , parse its response, check for the `updated_on` value in response if it is less than and equals to `2012-06-24T13:32:27.458855+00:00` it will send a mail to admin else do nothing and after that API gives a reply of full list which contains `full_name`, `name` and `uuid` of the person who has inactive repository.

1. Click **Create flow For API** to start using the template.
1. Connect to your Gmail and http accounts.
1. Click **Operations**, then **Edit flow** for the _Retrieve repository with filter_ operation.
1. Click on `Gmail` node and edit `To` to a real mail id.
1. Click **Done**.
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

Want to see if working? Click **Manage** in the API flow, then follow the instructions on getting started. Once you're in the API portal, use the Try it link. Enter the value for the `token` and `limit`, and click **Call operation**. You will get next token and limit as in response.

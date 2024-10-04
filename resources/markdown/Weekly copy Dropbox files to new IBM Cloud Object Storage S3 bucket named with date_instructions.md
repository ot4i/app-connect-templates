To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Weekly%20copy%20Dropbox%20files%20to%20new%20IBM%20Cloud%20Object%20Storage%20S3%20bucket%20named%20with%20date_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Dropbox](https://ibm.biz/acdropbox)
   - [IBM Cloud Object Storage S3](https://ibm.biz/accoss3)
1. Click each of the nodes in the flow.
    * The Scheduler node defines that the flow should run weekly on Friday at 8pm GMT, and when the flow is first started.
	* The Set variable node configures a variable with the ID of the Dropbox folder with path_lower="/shared".
	* The Create bucket node will create a new bucket in IBM COS S3 with the name defined by the Bucket name field.
	* The Download file contents nodes download Dropbox files with the content type defined by the File Type field.
	* The Create object nodes create new file objects in the bucket created earlier.
    Related tutorial: [Copying files from DropBox to IBM Cloud Object Storage on schedule](http://ibm.biz/aastutdrop2cos)
1. To start the flow, in the banner click **Start flow**.

When the flow has run successfully; you should see a new bucket created in your IBM Cloud Object Storage S3 account, and populated with files copied from your Dropbox account.

To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/Integrate%20data%20between%20IBM%20Cloud%20Object%20Storage%20S3%20and%20Amazon%20Redshift_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [IBM Cloud Object Storage S3](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-cloud-object-storage-s3)
   - [Amazon Redshift](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-amazon-redshift)
   - [Gmail](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-gmail)
3. To start the flow, in the banner, click **Start flow**.

Use this template to create a scheduler-based flow that retrieves object files from a specified IBM Cloud Object Storage S3 (COSS3) bucket and downloads the object content. The content is then parsed using CSV Parser to convert the CSV text into a JSON object. Subsequently, the object details are either created or updated in the specified Amazon Redshift record.

In this example, the IBM COSS3 object has details about an event hosted by a company in a year, which needs to be synced to Amazon Redshift. All new events are retrieved and added in a specific Amazon Redshift record. If an event is updated in IBM COSS3 object file, the corresponding record in Amazon Redshift is also updated.



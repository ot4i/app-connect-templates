To refer to these instructions while editing the flow, open the [GitHub page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Create%20a%20case%20file%20in%20IBM%20Cloud%20Object%20Storage%20S3%20for%20any%20non-English%20file%20content%20when%20a%20new%20case%20is%20created%20in%20Salesforce_instructions.md) (opens in a new window).

1. Click **Create flow** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Salesforce](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-salesforce)
   - [Box](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-box)
   - [Google Translate](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-google-translate)
   - [IBM Cloud Object Storage S3](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-cloud-object-storage-s3) 
   - [Slack](https://www.ibm.com/docs/en/app-connect/containers_cd?topic=apps-slack)
3. To start the flow, in the banner, click **Start flow**.

Use this template to create a case file in IBM Cloud Object Storage S3 for non-English file content whenever a new case is created in Salesforce. When a new case is created in Salefroce, the file is created in Box. If the file content is non-English, the case file will be created in IBM Cloud Object Storage S3. Otherwise, a Slack message gets sent to the intended channel, notifying that the file for the case ID already exists in English.




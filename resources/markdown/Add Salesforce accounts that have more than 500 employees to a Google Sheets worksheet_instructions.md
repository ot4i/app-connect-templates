To refer to these instructions while editing the flow.

This flow is a scheduler which retrieves salesforce accounts and if any account has more than 500 employees then a new entry is created in Google sheet.

Following are the steps to be followed to create template for above goal mentioned:
- Click Create flow to start using the template.
- Create Developer account in Salesforce
- Create account in Google Drive and Google Sheets as google sheets would be stored on drive
- In work flow, first we will select Salesforce "retreive accounts" option application and give it an access to our account by providing credentials.
- Then, we will add If condition toolbox as the problem statement only wants entry of those account who has number of employees greater than 500.
- If condition turns out to be true than it should send data to google sheets. So on pass side of condition, google sheets application would connected.
- If condition turns out to be False, it will return with custom message "employees are less than 500".
- click Done.

To start the flow, in the banner open the options menu [⋮] then click Start flow.

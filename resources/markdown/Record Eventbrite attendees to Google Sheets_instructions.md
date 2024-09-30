To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Record%20Eventbrite%20attendees%20to%20Google%20Sheets_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Click the Eventbrite / **New attendee** node.
3. Connect to your [Eventbrite account](https://ibm.biz/aaseventbrite) and then select the Organization that you want to use.
4. Click the Google Sheets / **Create row** node.
5. Connect to your [Google Sheet account](https://ibm.biz/aasgsheets) and then select the Google Sheets spreadsheet and worksheet that you want to use. 
6. Ensure that there are apropriate mappings for the worksheet.  For example, to create a mapping in a field for the person's name, you can click in the field, start typing `name`, and then select the **Attendee / Profile / Name** field.
7. To start the flow, in the banner click **Start flow**.

To test your flow:
1. Go to your Eventbrite account.  If you don't have a suitable event, you can create a single online event with free tickets and publish it.
2. After publishing the Eventbrite event, open the 'event URL' of the event. 
3. Register for the event by providing a name and email address.
4. Open the Google Sheets worksheet provided in step 5 of the flow creation:
     - You’ll see the new addition of a new row in the worksheet with the attendee details.

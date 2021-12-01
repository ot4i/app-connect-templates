To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/cmpe-272-Team21/resources/markdown/Create%20Salesforce%20lead%20per%20event%20attendee%20if%20lead%20does%20not%20already%20exist_instructions.md) (opens in a new window).

1.	Click **Create flow** to start using the template.
2.	Connect to the following accounts by using your credentials:
    - **Eventbrite**
    - **Salesforce** 
3.	To start the flow, in the banner, open the options menu [⋮] and click **Start flow**.

The flow is started when a Salesforce lead is retrieved or created. In this flow, all the existing leads in **Salesforce** are retrieved for every new attendee created in **Eventbrite**. Later, by using the **If-clause** , the names of attendee matched with the **Salesforce** retrieved  leads is filtered out. If the matching lead exists, then that particular lead is retrieved. If it is not matched, then a new lead is created.

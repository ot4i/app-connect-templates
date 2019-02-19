

To refer to these instructions while editing the flow, open the github page (opens in a new window).

    Click Create flow to start using the template.
    Connect to your SAP (via odata) account. Ensure you connect to Secure private network to get connectivity with SAP.
    Connect to your Salesforce account.
    Start the flow with Create Contact of Salesforce node. 
    In the SAP OData 'Retrieve TravelAgencies' node, choose the id to retrieve.
    Use IF Else loop and do a check to ensure Travel Agency Agency num exist.
    If Agency Num exist with SAP OData Service, then use Update Travel Agencies node to update the record with Salesforce mapped values. 
    Else, use Create Travel Agencies and create a new Travel Agency. 
    To start the flow, in the banner open the options menu [⋮] then click Start flow.


To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/tree/master/resources/markdown/Create%20a%20list%20item%20in%20SharePoint%20when%20a%20Wufoo%20form%20is%20submitted_instructions.md) (opens in a new window).

1.	Click **Create flow** to start using the template.
2.	Connect to the following accounts by using your credentials, and make sure that you have the items needed:
    -	**Wufoo**  You need a public form in Wufoo.
    -	**Microsoft SharePoint**  You need a site with a list in Sharepoint.
    - **Microsoft Teams**  You need a team and channel in Microsoft Teams.
3.	Click the **Wufoo / New form entry** node and select the Wufoo form that you want to trigger the flow
4.	Click the **Sharepoint / Create list item** node and select the Site and List that you want App Connect to create a new list item for
5.	Click the **Sharepoint / Retrieve list items** node and select the Site and List that you want App Connect to create a new list item for.  This retrieve action is used to retrieve all the properties of the list item created in the previous action.
6.	Click the **Microsoft Teams / Send message to channel** node and select the Team and Channel that you want App Connect to send a message to
7.	To start the flow, in the banner click **Start flow**.

The flow is started when a completed form is submitted in Wufoo.

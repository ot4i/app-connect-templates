Use this template to automatically create Azure DevOps work items when new tickets are created in Zendesk Service, mapping ticket priority and type to the corresponding Azure DevOps work item fields.

To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Create%20Azure%20DevOps%20work%20items%20from%20new%20Zendesk%20ticket_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [Zendesk Service](https://ibm.biz/aczendeskservice)
   - [Azure DevOps](https://ibm.biz/acazuredevops)
3. In the **Set variable** node, review the priority and work item type mappings and update them to match your Zendesk ticket types.
4. In the **Microsoft Azure DevOps Create work item** action, update the `organization` and `project` fields to match your Azure DevOps environment.
5. To start the flow, in the banner, click **Start flow**.

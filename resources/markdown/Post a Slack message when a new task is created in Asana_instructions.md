To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Post%20a%20Slack%20message%20when%20a%20new%20task%20is%20created%20in%20Asana_instructions.md) (opens in a new window).

This flow will monitor your Asana account for any new added tasks. When a new task is added to your Asana workspace, this will trigger the flow to post a message to your Slack channel that a new Asana task has been added, notifying you of the task name and due date. 

Before you use this flow, you must ensure the following:
- You have a Slack account with a workspace and channel
- You have a Asana account with a workspace/organization, and at least one project set up in Asana. App Connect will monitor the workspace/organization (or optional team) for any new tasks created in the project.


# Using the Template
1. Click **Create flow** to start using the template.
2. [Connect](https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-asana) to your Asana account.
3. Select the Workspace/Organization of your Asana account that you would like to monitor for new tasks.
4. [Connect](https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-slack) to your Slack account.
5. Select the Slack channel you would like the message to be posted to.
6. In the banner, open the options menu [⋮] at the top right, and click **Start flow**.

# Testing the Template
1. Once the flow is running, [create a task](https://asana.com/guide/get-started/begin/adding-assigning-tasks#gl-task-creation) in Asana.
2. Wait a few minutes; the flow event should trigger, and the action will post a message to your Slack account channel notifying of the new created task and its details.
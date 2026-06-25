To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/Rotate%20database%20static%20role%20credentials%20in%20HashiCorp%20Vault%20and%20send%20via%20Gmail_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [HashiCorp Vault](https://ibm.biz/achashicorpvault)
   - [Gmail](https://ibm.biz/acgmail)
3. In the scheduler trigger, configure the schedule interval and timezone as needed for your credential rotation policy.
4. In the **HashiCorp Vault Rotate static credentials** action, update the `name` parameter to match your database static role name.
5. In the **HashiCorp Vault Retrieve static role credentials** action, update the `name` parameter to match your database static role name.
6. In the **Gmail Send email** action, update the `To` field with the recipient email address who should receive the new credentials.
7. To start the flow, in the banner, click **Start flow**.

Use this template to automatically rotate database static role credentials in HashiCorp Vault on a scheduled basis and send the new credentials via Gmail.

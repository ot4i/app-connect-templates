To refer to these instructions while editing the flow, open [the GitHub page](https://github.com/ot4i/app-connect-templates/tree/main/resources/markdown/Issue%20PKI%20certificate%20with%20role%20in%20HashiCorp%20Vault%20and%20send%20via%20Gmail_instructions.md) (opens in a new window).

1. Click **Use this template** to start using the template.
2. Connect to the following accounts by using your credentials:
   - [HashiCorp Vault](https://ibm.biz/achashicorpvault)
   - [Gmail](https://ibm.biz/acgmail)
3. In the scheduler trigger, configure the schedule interval and timezone as needed for your certificate issuance requirements.
4. In the **HashiCorp Vault Issue with role** action, configure the parameters for your PKI role, common name, TTL, and certificate format.
5. In the **Gmail Send email** action, update the `To` field with the recipient email address who should receive the certificate.
6. To start the flow, in the banner, click **Start flow**.

Use this template to automatically issue PKI certificates with a specific role in HashiCorp Vault on a scheduled basis and send the certificate details via Gmail.

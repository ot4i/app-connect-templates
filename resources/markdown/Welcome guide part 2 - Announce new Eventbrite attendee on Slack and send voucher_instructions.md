To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/master/resources/markdown/Welcome%20guide%20part%202%20-%20Announce%20new%20Eventbrite%20attendee%20on%20Slack%20and%20send%20voucher_instructions.md) (opens in a new window).

This template creates the flow from the [Welcome to IBM App Connect \[Part 2 of 4\]: Add logic to an event-driven flow](https://www.youtube.com/watch?v=FpZNNginPAM&list=PLzpeuWUENMK2Q77xr7QkvLxU5YxOJxVSH) video to send a free drink voucher to attendees walking to the Sunflower festival Eventbrite event.

## Prerequisites

To use this flow, you'll need to set up an event in Eventbrite. The event needs to be configured to collect the following information about new attendees:
* First name
* Last name
* Company
* Email address
* How they are going to get to the event

To gather the information about how attendees are going to get to your event, you'll need to [create a custom question for attendees](https://www.eventbrite.com/support/articles/en_US/How_To/how-to-create-custom-questions-for-attendees) in Eventbrite. Create the following question:
* How will you be travelling to the festival?

Set the question type to 'Radio Buttons' with the following options for the answer:
* Walking
* Cycling
* Public Transport
* Driving

Set the question as a required field for your event.

## Using the template

1. Click **Create flow** to start using the template.
1. Click the Eventbrite event and then connect to your [Eventbrite account](https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-eventbrite).
1. Click the Slack "Create message" action and then connect to your [Slack account](https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-slack).
1. In the Slack "Create message" action, choose the channel that you want to post the message to.
1. Click the Gmail "Send email" action and then connect to your [Google account](https://www.ibm.com/docs/en/app-connect/cloud?topic=apps-gmail).
1. To start the flow, in the banner open the options menu [&#8942;] then click **Start flow**.

## Related templates

The previous template in this series is 'Welcome guide part 1 - Announce new Eventbrite attendee on Slack'.


The next template in this series is 'Welcome guide part 3 - Create a CSV file in Box of the products in Salesforce'.

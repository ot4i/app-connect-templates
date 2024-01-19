To refer to these instructions while editing the flow, open [the github page](https://github.com/ot4i/app-connect-templates/blob/main/resources/markdown/Update%20Eventbrite%20event%20based%20on%20IBM%20Weather%20forecast_instructions.md) (opens in a new window).

This API takes as input the ID of an event in Eventbrite.  The API discovers the location of the event, then gets the weather forecast for that location.  The API then checks if the weather criteria are OK for the event and takes different actions depending on the weather forecast.

Before you use this flow, you must have an Eventbrite event ready.  You can get the event ID from the event URL; for example, `https://www.eventbrite.com/e/<myevent-title>-<eventID>`


## Using the template

1. Click **Create flow** to start using the template.
1. Click **Operations**, then **Edit flow** for the _Retrieve event_forecast by ID_ operation.
1. Click the **Eventbrite / Retrieve events** node, and if you're not already connected, connect to your [Eventbrite account](https://ibm.biz/aaseventbrite).
1. Select the Organization to use for this flow.
1. Click the **HTTP / Invoke method** node, and in the Authorization field replace PERSONAL_OAUTH_TOKEN with your personal OAuth token for Eventbrite.  For information about your personal OAuth token, see the [Eventbrite API documentation](https://www.eventbrite.com/platform/api).
1. Click the **IBM Weather Company Data Limited Edition / Get forecast** node, and if you're not already connected, connect to your [IBM Weather Company account](https://ibm.biz/aasweathercdle).
1. Click the **Eventbrite / Update events** nodes, and select your Eventbrite account.
2. Click the **Slack / Send message** nodes, and select your Slack account.  If you're not already connected, connect to your [Slack account](https://ibm.biz/aasslack).
3. Optionally check the other nodes such as the JSON parser, Set variable, and Response nodes.
4. Click **Done**.
5. To start the flow, in the banner click **Start flow**.

Want to see the API working? 
Click **Manage** in the API flow, then follow the instructions on getting started to create an API key and documentation link. Use the documentation link to open your API portal, and there click the **Try it** link. 
1. Click the **GET /event_forecast/{id}** tab. 
2. Under Security, set Client ID to your API key.
3. Under Path, set **id** to your event ID.
4. Click **Send**.
The API portal should update with a Response section that shows the data returned by the API Response node; for example:
```
Code: 200 OK
Headers:
access-control-allow-credentials: true
access-control-allow-methods: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
access-control-allow-origin: *
connection: keep-alive
content-type: application/json; charset=utf-8
date: Mon, 28 Feb 2022 17:05:51 GMT
etag: W/"214-Fx5ldOvCGeYmR0V7QCLgv7IZwm8"
transfer-encoding: chunked
x-backside-transport: OK OK
x-global-transaction-id: dccbb8d4621d00e7c63b4677
x-powered-by: Express
x-ratelimit-limit: 120
x-ratelimit-remaining: 119
x-ratelimit-reset: 1646067945
x-request-id: a6M5QaK1bj6Ye17NefaOzYz81E2fulnt
{"event_id":"272545750677","forecast_effect":" Forecast date: 2022-03-01 - Longshot POC Arrow launch event (272545750677) : Event weather criteria not met for the morning.  Event is rescheduled until the evening. // Weather forecast for the morning - Gust maximum: 9 m/s- Precipitation maximum: 0.4 mm - Temperature minimum: 6.85 Celsius - Wind speed average: 5.17 m/s // Weather forecast for the evening - Gust maximum: 4 m/s - Precipitation maximum: 0.9 mm - Temperature minimum: 7.85 Celsius - Wind speed average: 3.5 m/s ...  "}
```

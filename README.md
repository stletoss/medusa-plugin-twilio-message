# Medusa Twilio WebHook Plugin

The Twilio WebHook Plugin offers a way to interact with a Twilio WebHook from Medusa events.


## Config
Follwowing changes must be made your medusa-config.js:
```js
{
	resolve: `medusa-plugin-twilio-webhook`,
	options: {
		ORDER_DISCOUNT_THRESHOLD: `<double>`, //threshold from 0.0 to 1.0
	}
}
```

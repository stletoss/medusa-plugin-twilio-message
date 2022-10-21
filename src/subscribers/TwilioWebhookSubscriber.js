class TwilioWebhookSubscriber {
	constructor({ twilioWebhookService, eventBusService }) {
		this.twilioWebhookService_ = twilioWebhookService;
	}
}

export default TwilioWebhookSubscriber;

class TwilioWebhookSubscriber {
	constructor({ twilioWebhookService, eventBusService }) {
		this.twilioWebhookService_ = twilioWebhookService;
		eventBusService.subscribe("order.placed", this.handleOrder);
	}
	
	handleOrder = async (data) => {
		return await this.twilioWebhookService_.handleOrder(data.id);
 	};
}

export default TwilioWebhookSubscriber;

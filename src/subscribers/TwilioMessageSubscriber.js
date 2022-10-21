class TwilioMessageSubscriber {
	constructor({ twilioMessageService, eventBusService }) {
		this.twilioMessageService_ = twilioMessageService;
		eventBusService.subscribe("order.placed", this.handleOrder);
	}
	
	handleOrder = async (data) => {
		return await this.twilioMessageService_.handleOrder(data.id);
 	};
}

export default TwilioMessageSubscriber;

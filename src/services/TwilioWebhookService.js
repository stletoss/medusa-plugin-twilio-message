import { BaseService } from "medusa-interfaces";

class TwilioWebhookService extends BaseService {
	constructor({ orderService }) {
		super();
		
		this.orderService_ = orderService;
	}
	
	async handleOrder(orderId) {
		const { order_discount_total, order_total } = await this.orderService_.retrieve(orderId, {
			select: [
				"discount_total",
				"total",
			],
			relations: [
				"discounts",
				"discounts.rule",
			]
		});
	}
}

export default TwilioWebhookService;

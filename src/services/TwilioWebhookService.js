import { BaseService } from "medusa-interfaces";

class TwilioWebhookService extends BaseService {
	/**
	* @param {Object} options - options defined in `medusa-config.js`
	*    {
	*      ORDER_DISCOUNT_THRESHOLD: double with threshold percentage
	*    }
	*/
	constructor({ orderService }, options) {
		super();
		
		this.orderService_ = orderService;
		this.options_ = options;
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
		const discount_percentage = order_discount_total / order_total;
		const over_threshold = discount_percentage > this.options_.ORDER_DISCOUNT_THRESHOLD);
	}
}

export default TwilioWebhookService;

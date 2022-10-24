import twilio from "twilio";
import { BaseService } from "medusa-interfaces";

class TwilioMessageService extends BaseService {
	/**
	* @param {Object} options - options defined in `medusa-config.js`
	*    {
	*       ORDER_DISCOUNT_THRESHOLD: double with threshold percentage
	*       TWILIO_ACCOUNT_SID: twilio account sid
	*       TWILIO_AUTH_TOKEN: twilio auth token
	*	SENDER_N_RECIPIENT: your verified phone number
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
		const over_threshold = discount_percentage > this.options_.ORDER_DISCOUNT_THRESHOLD;
		if (over_threshold) {
			//https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource
			const accountSid = this.options_.TWILIO_ACCOUNT_SID;
			const authToken = this.options_.TWILIO_AUTH_TOKEN;
			const senderNrecipient = this.options_.SENDER_N_RECIPIENT;
			const client = twilio(accountSid, authToken);
			await client.messages.create({from: senderNrecipient, body: `From Medusa: order #${orderId} with discount OVER threshold placed!`, to: senderNrecipient});
		}
	}
}

export default TwilioMessageService;

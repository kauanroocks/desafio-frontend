import { OrderType } from "../@types/order";
//import { instance } from "./api";

export default {
	createOrder: (
		order: OrderType
	) => {
		return order
	},
	updateOrder: (
		id: number,
		order: OrderType
	) => {
		return `${id}:${order}`
	},
	getAllOrders: () => {
		return
	},
}
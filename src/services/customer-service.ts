import { CustomerType } from "../@types/customer";
//import { instance } from "./api";

export default {
	createCustomer: (
		customer: CustomerType
	) => {
		return customer
	},
	updateCustomer: (
		id: number,
		customer: CustomerType
	) => {
		return `${id}:${customer}`
	},
	getAllCustomers: () => {
		return
	},
	getCustomerByEmail: (
		email: string,
	) => {
		return email
	},
	getCustomerByDocument: (
		document: string,
	) => {
		return document
	}
}
import { UserLoginCredentialsType, UserRegisterCredentialsType } from "../@types/user";
//import { instance } from "./api";

export default {
	login: (
		credentials: UserLoginCredentialsType
	) => {
		return credentials;
	},
	register: (
		data: UserRegisterCredentialsType
	) => {
		return data;
	}
}
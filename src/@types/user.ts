export type UserType = {
	id: number,
	name: string,
	email: string,
	username: string,
}

export type UserLoginCredentialsType = {
	username: string,
	password: string,
}

export type UserRegisterCredentialsType = {
	username: string,
	email: string,
	cellphone: string,
	password: string,
}
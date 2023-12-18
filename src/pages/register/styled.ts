import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`

export const LoginForm = styled.div`
	width: 400px;
	height: 500px;
`

export const Title = styled.div`
	h2 {
		font-size: 32px;
		color: #232527;
	}
	margin-bottom: 50px;
`

export const UsernameInput = styled.div`
	input[type='text'] {
		width: 100%;
		height: 40px;
		padding: 10px;
		border: 1px solid #CCC;
		border-radius: 5px;
	}
	margin-bottom: 15px;
`

export const EmailInput = styled.div`
	input[type='text'] {
		width: 100%;
		height: 40px;
		padding: 10px;
		border: 1px solid #CCC;
		border-radius: 5px;
	}
	margin-bottom: 15px;
`

export const PasswordInput = styled.div`
	input[type='password'] {
		width: 100%;
		height: 40px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #CCC;
	}
	margin-bottom: 15px;
`

export const CellphoneInput = styled.div`
	input[type='text'] {
		width: 100%;
		height: 40px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #CCC;
	}
	margin-bottom: 15px;
`

export const LoginDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	a {
		color: #232527;
		font-size: 12px;
		text-decoration: none;
	}
	margin-bottom: 15px;
`

export const SubmitButton = styled.div`
	button {
		width: 100%;
		height: 60px;
		border-radius: 5px;
		border: 0;
		color: #FFF;
		background-color: #007FFF;
		cursor: pointer;
	}
`
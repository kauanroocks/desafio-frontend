import { useState } from 'react'
import * as LP from './styled'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
	document.title = 'Cadastro - Hamburgueria'

	// Credenciais
	const [username, setUsername] = useState< string >('')
	const [email, setEmail] = useState< string >('')
	const [cellphone, setCellphone] = useState< string >('')
	const [password, setPassword] = useState< string >('')

	// Método de Cadastro
	const authenticate = () => {
		if ( username == ''
			|| password == ''
		) return alert('Preencha todos os campos corretamente.')

		// [ ] - Método de Cadastro aqui!
	}

	return (
		<>
			<LP.Container>
				<LP.LoginForm>
					<LP.Title>
						<h2>Criar nova conta</h2>
					</LP.Title>
					<LP.EmailInput>
						<input type={'text'} placeholder={'Email'} value={email} onChange={e => setEmail(e.target.value)} />
					</LP.EmailInput>
					<LP.UsernameInput>
						<input type={'text'} placeholder={'Nome de Usuário'} value={username} onChange={e => setUsername(e.target.value)} />
					</LP.UsernameInput>
					<LP.CellphoneInput>
						<input type={'text'} placeholder={'Celular'} value={cellphone} onChange={e => setCellphone(e.target.value)} />
					</LP.CellphoneInput>
					<LP.PasswordInput>
						<input type={'password'} placeholder={'Senha'} value={password} onChange={e => setPassword(e.target.value)} />
					</LP.PasswordInput>
					<LP.LoginDiv>
						<Link to={'/login'}>Já tem uma conta?</Link>
					</LP.LoginDiv>
					<LP.SubmitButton>
						<button onClick={authenticate} >Criar</button>
					</LP.SubmitButton>
				</LP.LoginForm>
			</LP.Container>
		</>
	)
}
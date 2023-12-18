import { useState } from 'react'
import * as LP from './styled'
import { Link } from 'react-router-dom'

export default function LoginPage() {
	document.title = 'Login - Hamburgueria'

	// Credenciais
	const [username, setUsername] = useState< string >('')
	const [password, setPassword] = useState< string >('')

	// Método de autenticação
	const authenticate = () => {
		if ( username == ''
			|| password == ''
		) return alert('Preencha todos os campos corretamente.')

		// [ ] - Método de Login aqui!
		localStorage.setItem('auth_user', JSON.stringify({
			name: 'teste',
			email: 'teste',
			username: 'teste'
		}))
	}

	return (
		<>
			<LP.Container>
				<LP.LoginForm>
					<LP.Title>
						<h2>Entrar</h2>
					</LP.Title>
					<LP.UsernameInput>
						<input type={'text'} placeholder={'Nome de Usuário'} value={username} onChange={e => setUsername(e.target.value)} />
					</LP.UsernameInput>
					<LP.PasswordInput>
						<input type={'password'} placeholder={'Senha'} value={password} onChange={e => setPassword(e.target.value)} />
					</LP.PasswordInput>
					<LP.RegisterDiv>
						<Link to={'/register'}>Não tem uma conta?</Link>
					</LP.RegisterDiv>
					<LP.SubmitButton>
						<button onClick={authenticate} >Entrar</button>
					</LP.SubmitButton>
				</LP.LoginForm>
			</LP.Container>
		</>
	)
}
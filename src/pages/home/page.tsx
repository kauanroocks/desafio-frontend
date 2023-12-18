import Header from "../../components/header/header";
import * as HP from './styled'

export default function HomePage() {
	document.title = 'Home - Hamburgueria'
	return (
		<>
			<Header/>
			<HP.Container>
				<HP.LeftSide>
					<HP.ContainerLeftSide>
						<h1>A MELHOR HAMBURGUERIA DO SUL DO PAÍS.</h1>
						<button>Conheça-nos</button>
					</HP.ContainerLeftSide>
				</HP.LeftSide>
				<HP.RightSide>.</HP.RightSide>
			</HP.Container>
		</>
	)
}
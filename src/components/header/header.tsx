import { Link } from 'react-router-dom';
import * as H from './styled';

export default function Header() {
	return (
		<>
			<H.Container>
				<H.NavigationList>
					<ul>
						<Link to={"/"}><li>Início</li></Link>
						<Link to={"/products"}><li>Produtos</li></Link>
						<Link to={"/customers"}><li>Clientes</li></Link>
						<Link to={"/orders"}><li>Pedidos</li></Link>
					</ul>
				</H.NavigationList>
			</H.Container>
		</>
	)
}
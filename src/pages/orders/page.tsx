import { useEffect, useState } from "react"
import Header from "../../components/header/header"
import * as OP from './styled'
import { OrderType } from "../../@types/order"

export default function OrdersPage() {

	const [orders, setOrders] = useState< OrderType[] | null >([])

	useEffect(() => {}, [])

	document.title = 'Pedidos - Hamburgueria'
	return (
		<>
			<Header/>
			<OP.Container>
				<OP.OrdersListHeader>
					<h1>Pedidos</h1>
				</OP.OrdersListHeader>
				<OP.OrdersList></OP.OrdersList>
			</OP.Container>
		</>
	)
}
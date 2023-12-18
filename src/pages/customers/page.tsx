import { useEffect, useState } from "react"
import Header from "../../components/header/header"
import * as CP from './styled'
import { CustomerType } from "../../@types/customer"

export default function CustomersPage() {

	const [customers, setCustomers] = useState< CustomerType[] | null >([])

	useEffect(() => {}, [])

	document.title = 'Clientes - Hamburgueria'
	return (
		<>
			<Header/>
			<CP.Container>
				<CP.CustomersListHeader>
					<h1>Clientes</h1>
				</CP.CustomersListHeader>
				<CP.CustomersList></CP.CustomersList>
			</CP.Container>
		</>
	)
}
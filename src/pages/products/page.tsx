import { useEffect, useState } from "react"
import Header from "../../components/header/header"
import * as PP from './styled'
import { ProductType } from "../../@types/product"

export default function ProductsPage() {

	const [products, setProducts] = useState< ProductType[] | null >([])

	useEffect(() => {}, [])

	document.title = 'Produtos - Hamburgueria'
	return (
		<>
			<Header/>
			<PP.Container>
				<PP.ProductsListHeader>
					<h1>Produtos</h1>
				</PP.ProductsListHeader>
				<PP.ProductsList></PP.ProductsList>
			</PP.Container>
		</>
	)
}
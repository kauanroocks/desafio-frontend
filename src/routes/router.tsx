import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home/page'
import LoginPage from '../pages/login/page'
import RegisterPage from '../pages/register/page'
import OrdersPage from '../pages/orders/page'
import CustomersPage from '../pages/customers/page'
import ProductsPage from '../pages/products/page'

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <HomePage/> } />
				<Route path='/login' element={ <LoginPage/> } />
				<Route path='/register' element={ <RegisterPage/> } />
				<Route path='/orders' element={ <OrdersPage/> } />
				<Route path='/customers' element={ <CustomersPage/> } />
				<Route path='/products' element={ <ProductsPage/> } />
			</Routes>
		</BrowserRouter>
	)
}
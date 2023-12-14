import Inicio from './pages/inicio/';
import Cardapio from './pages/cardapio/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/index';
import PaginaPadrao from './components/';
import React from 'react';

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<PaginaPadrao />} >
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}
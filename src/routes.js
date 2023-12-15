import Inicio from 'pages/inicio/';
import Cardapio from 'pages/cardapio/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/index';
import PaginaPadrao from './components/paginaPadrao/index';
import Footer from 'components/footer';
import NotFound from 'pages/notFound';
import Sobre from 'pages/sobre/';
import Prato from 'pages/prato/index';
import React from 'react';

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<PaginaPadrao />} >
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
						<Route path='sobre' element={<Sobre />} />
					</Route>
					<Route path='*' element={<NotFound />} />
					<Route path='prato/:id' element={<Prato />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}
import { ReactComponent as Logo } from 'assets/logo.svg';
import Itens from 'pages/cardapio/itens';
import Ordenador from 'pages/cardapio/ordenador';
import React, { useState } from 'react';
import Buscador from '../cardapio/buscador/index';
import Filtros from '../cardapio/filtros/index';
import styles from './Cardapio.module.scss';

export default function Cardapio() {
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');
	return (
		<main>
			<nav className={styles.menu}>
				<Logo />
			</nav>
			<header className={styles.header}>
				<div className={styles.header__text}>
					A casa do código e da massa
				</div>
			</header>
			<section className={styles.cardapio}>
				<h3 className={styles.cardapio__titulo}>Cardápio</h3>
				<Buscador busca={busca} setBusca={setBusca} />
				<div className={styles.cardapio__filtros}>
					<Filtros filtro={filtro} setFiltro={setFiltro} />
					<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
				</div>
				<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
			</section>
		</main>
	);
}
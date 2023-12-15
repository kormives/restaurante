import Itens from 'pages/cardapio/itens';
import Ordenador from 'pages/cardapio/ordenador';
import React, { useState } from 'react';
import Buscador from '../cardapio/buscador/index';
import Filtros from '../cardapio/filtros/index';
import styles from './Cardapio.module.scss';
import stylesTema from 'styles/_tema.module.scss';

export default function Cardapio() {
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');
	return (
		<section className={styles.cardapio}>
			<h3 className={stylesTema.titulo}>Cardápio</h3>
			<Buscador busca={busca} setBusca={setBusca} />
			<div className={styles.cardapio__filtros}>
				<Filtros filtro={filtro} setFiltro={setFiltro} />
				<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
			</div>
			<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
		</section>
	);
}
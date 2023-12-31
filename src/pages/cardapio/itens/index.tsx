import React, { useEffect, useState } from 'react';
import cardapio from '../../../data/cardapio.json';
import Item from './item';
import styles from './itens.module.scss';

interface Props {
	busca: string,
	filtro: number | null;
	ordenador: string;
}

export default function Itens(props: Props) {
	const [lista, setlista] = useState(cardapio);
	const { busca, filtro, ordenador } = props;

	function testaBusca(title: string) {
		const regex = new RegExp(busca, 'i');
		return regex.test(title);
	}

	function testaFiltro(id: number) {
		if (filtro)
			return filtro === id;
		return true;
	}

	function ordenar(novaLista: typeof cardapio) {
		switch (ordenador) {
		case 'menor_porcao':
			return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);

		case 'maior_porcao':
			return novaLista.sort((a, b) => a.size > b.size ? -1 : 1);

		case 'menor_qtd_pessoas':
			return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);

		case 'maior_qtd_pessoas':
			return novaLista.sort((a, b) => a.serving > b.serving ? -1 : 1);

		case 'menor_preco':
			return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);

		case 'maior_preco':
			return novaLista.sort((a, b) => a.price > b.price ? -1 : 1);

		default:
			return novaLista;
		}
	}

	useEffect(() => {
		const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
		setlista(ordenar(novaLista));
	}, [busca, filtro, ordenador]);

	return (
		<div className={styles.itens}>
			{lista.map(item => (
				<Item
					key={item.id}
					{...item} />
			))}
		</div>
	);
}
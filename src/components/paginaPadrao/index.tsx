import styles from './paginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function PaginaPadrao() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
					A casa do código e da massa
				</div>
			</header>
			<div>
				<Outlet />
			</div>
		</>
	);
}
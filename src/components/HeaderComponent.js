import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export const HeaderComponent = () => (
	<header>
		<h2 className="header__logo">Expensify</h2>
		<div className="header__nav-links">
			<NavLink to="/" className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}>
				Home
			</NavLink>
			<NavLink to="/create" className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}>
				Add
			</NavLink>
			<NavLink to="/help" className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}>
				Help
			</NavLink>
			<NavLink to="/redux" className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}>
				Redux Playground
			</NavLink>
			<NavLink to="/hoc" className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}>
				H.O.C
			</NavLink>
		</div>
	</header>
);

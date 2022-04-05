import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/authActions';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const HeaderComponent = ({ dispatch }) => {
	const isAuthenticated = useSelector(state => !!state.auth.uid);

	return (
		<header>
			<a href="/">
				<h2 className="header__logo">Expensify</h2>
			</a>
			<div className="header__nav-links">
				<NavLink
					to="/expense_dashboard"
					className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}
				>
					Home
				</NavLink>
				{isAuthenticated ? (
					<NavLink to="/create" className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}>
						Add Expense
					</NavLink>
				) : (
					''
				)}
				<NavLink to="/help" className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}>
					Help
				</NavLink>

				{isAuthenticated ? <button onClick={() => dispatch(startLogout())}>Logout</button> : ''}

				{/* <LogoutButton /> */}
				{/* <NavLink to="/redux" className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}>
				Redux Playground
			</NavLink>
			<NavLink to="/hoc" className={({ isActive }) => (isActive ? 'header__nav-links-active' : '')}>
				H.O.C
			</NavLink> */}
			</div>
		</header>
	);
};

export default connect()(HeaderComponent);

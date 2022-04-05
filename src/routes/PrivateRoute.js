import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

export const PrivateRoute = ({ children }) => {
	// first, get our state and check if we have a uid auth and use !! to set true or falce
	const isAuthenticated = useSelector(state => !!state.auth.uid);

	// next, if the user is logged in return the children div that we clicked on originally,
	// and if not logged in just push them back to the login screen
	return isAuthenticated ? <div> {children} </div> : <Navigate to="/" />;
};

export default connect()(PrivateRoute);

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
	<div>
		<h1>404</h1>
		<Link to="/">Go home</Link>
	</div>
);

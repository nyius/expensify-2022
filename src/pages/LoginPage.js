import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../components/LoginForm';
import { ErrorComponent } from '../components/SuccessComponent';
import { SuccessComponent } from '../components/ErorrComponent';

export const LoginPage = () => (
	<div>
		<h3>Log in</h3>
		<LoginForm />
	</div>
);

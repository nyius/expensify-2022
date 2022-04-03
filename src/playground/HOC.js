import React from 'react';

const Info = props => {
	return (
		<div>
			<h1>Info</h1>
			<p>The secret info is: {props.info}</p>
		</div>
	);
};

const requireAuthentication = WrappedComponent => {
	return props => {
		return <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to view</p>}</div>;
	};
};

export const AuthInfo = requireAuthentication(Info);

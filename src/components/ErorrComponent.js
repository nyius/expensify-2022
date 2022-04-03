import React from 'react';

export const ErrorComponent = props => {
	return (
		<div>
			<p className="error_text">{props.error}</p>
		</div>
	);
};

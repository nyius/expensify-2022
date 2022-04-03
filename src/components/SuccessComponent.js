import React from 'react';

export const SuccessComponent = props => {
	return (
		<div>
			<p className="success_text">{props.success}</p>
		</div>
	);
};

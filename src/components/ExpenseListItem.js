import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => {
	// console.log(props);
	return (
		<div className="expense_list_item">
			<div className="expense_list_item-description">
				<p className="expense_list_item-title-text">Item:</p>
				<p className="expense_list_item-description-title">
					{description.slice(0, 1).toUpperCase() + description.slice(1)}
				</p>
			</div>
			<div className="expense_list_item-amount">
				<p className="expense_list_item-title-text">total:</p>
				<p
					className={
						Number(amount) < 0
							? 'expense_list_item-amount-total-negative'
							: 'expense_list_item-amount-total-positive'
					}
				>
					${Number(amount).toFixed(2)}
				</p>
			</div>
			<div className="expense_list_item-createdAt">
				<p className="expense_list_item-title-text">Date:</p>
				<p className="expense_list_item-createdAt-text">{moment(createdAt).format('M/D/Y, h:mm a')}</p>
			</div>
			<div className="expense_list_item-edit">
				<Link to={`/edit/${id}`} className="expense_list_item-edit-Link">
					Edit
				</Link>
			</div>
		</div>
	);
};

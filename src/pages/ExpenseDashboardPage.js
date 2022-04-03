import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFiltes from '../components/ExpenseListFilters';

export const ExpenseDashboardPage = () => {
	return (
		<div>
			<h2>Expenses</h2>
			<ExpenseListFiltes />
			<ExpenseList />
		</div>
	);
};

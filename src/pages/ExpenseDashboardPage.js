import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFiltes from '../components/ExpenseListFilters';
import ExpensesTotal from '../components/ExpensesTotal';

export const ExpenseDashboardPage = () => {
	return (
		<div>
			<h2>Expenses</h2>
			<div className="expenses_top-bar">
				<ExpenseListFiltes /> <ExpensesTotal />
			</div>
			<ExpenseList />
		</div>
	);
};

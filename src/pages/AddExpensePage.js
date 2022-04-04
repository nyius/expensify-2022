import React from 'react';
import ReactDOM from 'react-dom';
import { ExpenseForm } from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expensesActions';

const AddExpensePage = props => {
	return (
		<div>
			<h4>Add New Expense</h4>
			<ExpenseForm
				onSubmit={expense => {
					props.dispatch(startAddExpense(expense));
				}}
			/>
		</div>
	);
};

export default connect()(AddExpensePage);

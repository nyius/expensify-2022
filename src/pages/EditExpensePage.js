import React from 'react';
import { useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { ExpenseForm } from '../components/ExpenseForm';
import { editExpense } from '../actions/expensesActions';

const EditExpensePage = props => {
	// in react-redux v6 we now need to use useParams to get info from the url
	// in this case, we're getting the 'id' param set in our route file
	const { id } = useParams();
	// now we use 'useSelector' to get our state, and what part of the state we want. in this case we want all expenses
	const expenses = useSelector(state => state.expenses);
	// now here we simply filter our expenses to find the one we want
	const expense = expenses.find(expense => {
		return expense.id === id;
	});

	return (
		<div>
			<h4>Edit Expense</h4>
			<ExpenseForm
				// pass our expense (set above) down into our ExpenseForm component
				expense={expense}
				edit={true}
				// When this form is submitted, dispatch our edit
				onSubmit={expense => {
					props.dispatch(editExpense(id, expense));
				}}
			/>
		</div>
	);
};

// Connect allows us to use dispatch() still, even though we're not using mapDispatchToProps
export default connect()(EditExpensePage);

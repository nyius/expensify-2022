import React from 'react';
import { connect, useSelector } from 'react-redux';
import { ExpenseListItem } from './ExpenseListItem';
import selectExpenses from '../selectors/expensesSelectors';

const ExpenseList = props => {
	const expensesState = useSelector(state => state.expenses);
	const filterState = useSelector(state => state.filters);
	const expenses = selectExpenses(expensesState, filterState);
	return (
		<div>
			{expenses.map((expense, i) => {
				return <ExpenseListItem key={i} {...expense} />;
			})}
		</div>
	);
};

export default connect()(ExpenseList);

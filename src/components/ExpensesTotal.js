import React from 'react';
import { connect, useSelector } from 'react-redux';
import selectExpenses from '../selectors/expensesSelectors';
import expensesTotalSelector from '../selectors/expensesTotalSelector';

const ExpensesTotal = () => {
	const expensesState = useSelector(state => state.expenses);
	const filterState = useSelector(state => state.filters);
	const expenses = selectExpenses(expensesState, filterState);
	const total = expensesTotalSelector(expenses).toFixed(2);

	return (
		<div>
			<p className="expenses_top-bar-total">
				Total: <span className={total >= 0 ? 'total-positive' : 'total-negative'}>${total}</span>
			</p>
		</div>
	);
};

export default connect()(ExpensesTotal);

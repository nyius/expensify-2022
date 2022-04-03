import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../playground/redux-expensify';
import { v4 as uuidv4 } from 'uuid';

let expenseOne;
let expenseTwo;

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter(expense => {
			const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
			const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
			const textMatch = text.length === 0 || expense.description.toLowerCase().includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			}
			if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuidv4(),
		description,
		note,
		amount,
		createdAt,
	},
});

const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id,
});

const editExpense = (id, updates = {}) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text,
});

const sortByDate = () => ({
	type: 'SORTBY_DATE',
});

const sortByAmount = () => ({
	type: 'SORTBY_AMOUNT',
});

const setStartDate = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate,
});
const setEndDate = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate,
});

/*
const incrementCount = ({ incrementBy = 1 } = {}) => {
	return {
		type: 'INCREMENT',
		incrementBy,
	};
};

const decrementCount = ({ decrememtBy = 1 } = {}) => {
	return {
		type: 'DECREMENT',
		decrememtBy,
	};
};

const setCount = ({ count = 0 } = {}) => {
	return {
		type: 'SET',
		count,
	};
};
*/

export const Redux101Page = () => {
	// store.dispatch(incrementCount({ incrementBy: 500 }));
	// store.dispatch(decrementCount({ decrememtBy: 100 }));
	// store.dispatch(decrementCount());
	// store.dispatch({
	// 	type: 'RESET',
	// });
	// store.dispatch(setCount({ count: 9000 }));
	/*
	expenseOne = store.dispatch(
		addExpense({
			description: 'rent',
			amount: 1800,
			createdAt: 1000,
		})
	);
	expenseTwo = store.dispatch(
		addExpense({
			description: 'coffee',
			amount: 2000,
			createdAt: -1000,
		})
	);
	store.dispatch(
		addExpense({
			description: 'coffee',
			amount: 300,
			createdAt: 3000,
		})
	);
	store.dispatch(
		addExpense({
			description: 'coffee',
			amount: -100,
			createdAt: 2200,
		})
	);
	
	store.dispatch(
		addExpense({
			description: 'rent',
			amount: 1800,
		})
	);
	store.dispatch(
		addExpense({
			description: 'rent',
			amount: 1800,
		})
	);

	store.dispatch(
		removeExpense({
			id: expenseOne.expense.id,
		})
	);
	store.dispatch(editExpense(expenseTwo.expense.id, { amount: 4000 }));
	store.dispatch(setTextFilter('rent'));
	store.dispatch(sortByDate());

	store.dispatch(setStartDate(125));
	store.dispatch(setStartDate());
	store.dispatch(setEndDate(300));
	store.dispatch(setEndDate());

	store.dispatch(setStartDate(125));
	store.dispatch(setEndDate(1000));
        
	store.dispatch(sortByAmount());

	store.dispatch(setTextFilter(`rent`));
	store.dispatch(setTextFilter(`Coffee`));
	store.dispatch(setTextFilter(''));
*/
	return (
		<div>
			<p>Redux101</p>
		</div>
	);
};

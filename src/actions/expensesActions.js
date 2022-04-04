import { v4 as uuidv4 } from 'uuid';
import { database } from '../firebase/firebase';
import {
	ref,
	set,
	update,
	remove,
	onValue,
	off,
	push,
	onChildRemoved,
	onChildChanged,
	onChildAdded,
	get,
	child,
	exists,
} from 'firebase/database';

// heres our normal action generator for saving things to our local store
export const addExpense = expense => ({
	type: 'ADD_EXPENSE',
	expense,
});

// and heres our action generator to save the same data to our database
export const startAddExpense = (expenseData = {}) => {
	// because we use thunk, we are able to return a function (and not an object)
	// we get access to a dispatch variable, so we can use dispatch inside of our return function
	return dispatch => {
		// here we're just taking our function arguments and destructuring it (for this exampel)
		const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
		// set up a ref to where we want our data to go, in this case inside of our expenses object on the db
		const databaseExpensesRef = ref(database, 'expenses');

		const expense = { description, note, amount, createdAt };

		// because push is async, we can throw it in a try/catch to handle any errors
		try {
			// push our new data to the database
			// we use a then block to execute some code after the push is done. In the then(), we actually
			// get access to the uploaded object (labeled as ref here), which we can then use
			// now we are going to push that data we uploaded also to our local store using our normal
			//dispatch() action and passing in our regular non async function
			push(databaseExpensesRef, expense).then(ref => {
				dispatch(
					addExpense({
						id: ref.key,
						...expense,
					})
				);
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id,
});

export const editExpense = (id, updates = {}) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

export const setExpenses = expenses => ({
	type: 'SET_EXPENSES',
	expenses,
});

// here we get all of our expenses from a database
export const startSetExpenses = () => {
	return dispatch => {
		const databaseExpensesRef = ref(database, `expenses`);

		return get(databaseExpensesRef)
			.then(snapshot => {
				if (snapshot.exists()) {
					const expenses = [];

					snapshot.forEach(childShapshot => {
						expenses.push({
							id: childShapshot.key,
							...childShapshot.val(),
						});
					});
					// now we dispatch our info to our local store
					dispatch(setExpenses(expenses));
				} else {
					console.log(`No data available`);
				}
			})
			.catch(error => {
				console.log(error);
			});
	};
};

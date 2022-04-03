import { createStore, combineReducers } from 'redux';

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(expense => expense.id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates,
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text,
			};
		case 'SORTBY_DATE':
			return {
				...state,
				sortBy: 'date',
			};
		case 'SORTBY_AMOUNT':
			return {
				...state,
				sortBy: 'amount',
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate,
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate,
			};
		default:
			return state;
	}
};

export const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer,
	})
);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//

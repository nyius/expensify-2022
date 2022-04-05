import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filterReducer';
import authReducer from '../reducers/authReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer,
			auth: authReducer,
		}),
		// This line here allows us to first:
		// still be able to use our redux devtools in chrome
		// and second, it will allw us (with applyMiddleware) to use thunk.
		// Think lets us use asyns functions in our action generators so we can write to databases
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};

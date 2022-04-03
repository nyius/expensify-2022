import { createStore } from 'redux';

// export const store = createStore(
// 	(
// 		state = {
// 			count: 0,
// 		},
// 		action
// 	) => {
// 		if (action.type === 'INCREMENT') {
// 			return {
// 				count: state.count + 1,
// 			};
// 		} else {
// 			return state;
// 		}
// 	}
// );

const countReducer = (
	state = {
		count: 0,
	},
	action
) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + action.incrementBy };
		case 'DECREMENT':
			const decrememtBy = typeof action.decrememtBy === 'number' ? action.decrememtBy : 1;
			return { count: state.count - decrememtBy };
		case 'RESET':
			return { count: (state.count = 0) };
		case 'SET':
			const count = typeof action.count === 'number' ? action.count : 0;
			return { count: (state.count = count) };
		default:
			return state;
	}
};

export const store = createStore(countReducer);

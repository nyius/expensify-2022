export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text,
});

export const sortByDate = () => ({
	type: 'SORTBY_DATE',
});

export const sortByAmount = () => ({
	type: 'SORTBY_AMOUNT',
});

export const setStartDate = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate,
});
export const setEndDate = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate,
});

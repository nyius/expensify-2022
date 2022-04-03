import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter(expense => {
			const createdAtMoment = moment(expense.createdAt);
			const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment, 'day') : true;
			const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment, 'day') : true;
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

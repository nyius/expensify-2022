export default expenses => {
	if (expenses.length === 0) return 0;

	const amounts = expenses.map(expense => {
		return expense.amount;
	});

	return amounts.reduce((acc, cur) => acc + cur, 0);
};

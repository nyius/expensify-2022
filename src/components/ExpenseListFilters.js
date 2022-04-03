import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filterActions';

class ExpenseListFiltes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			calendarFocused: null,
		};
	}

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};

	onFocusChange = calendarFocused => {
		this.setState(() => ({ calendarFocused }));
	};

	render() {
		return (
			<div className="filters_container">
				<input
					type="text"
					placeholder="Search..."
					onChange={e => {
						this.props.dispatch(setTextFilter(e.target.value));
					}}
				/>
				<select
					value={this.props.filters.sortBy}
					onChange={e => {
						if (e.target.value === 'date') {
							this.props.dispatch(sortByDate());
						}
						if (e.target.value === 'amount') {
							this.props.dispatch(sortByAmount());
						}
					}}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
					showClearDates={true}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.filters,
	};
};

export default connect(mapStateToProps)(ExpenseListFiltes);

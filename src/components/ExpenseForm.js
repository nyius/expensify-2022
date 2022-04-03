import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { ErrorComponent } from './ErorrComponent';
import { SuccessComponent } from './SuccessComponent';

export class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? Number(props.expense.amount).toFixed(2) : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: '',
			success: '',
			edit: props.edit ? props.edit : false,
		};
	}

	onDescriptionChange = e => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};

	onNoteChange = e => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};

	onAmountChange = e => {
		const amount = e.target.value;
		this.setState(() => ({ amount }));
	};

	onDateChange = createdAt => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	formSubmit = e => {
		e.preventDefault();
		this.setState(() => ({ error: ``, success: '' }));

		if (this.state.description.length === 0 || this.state.amount.length === 0) {
			this.setState(() => ({ error: `Please enter a valid description & value.` }));
			setTimeout(() => {
				this.setState(() => ({ error: `` }));
			}, 10000);
			return;
		}

		if (!this.props.edit) {
			this.setState(() => ({
				success: `Expense for ${this.state.description} submitted!`,
			}));
		}
		if (this.props.edit) {
			this.setState(() => ({
				success: `Expense for ${this.state.description} edited!`,
			}));
		}

		this.props.onSubmit({
			description: this.state.description,
			amount: parseFloat(this.state.amount, 10),
			createdAt: this.state.createdAt.valueOf(),
			note: this.state.note,
		});

		this.clearInputs();

		setTimeout(() => {
			this.setState(() => ({ error: ``, success: '' }));
		}, 5000);
	};

	clearInputs = () => {
		this.setState(() => ({
			description: '',
			note: ``,
			amount: '',
			createdAt: moment(),
			calendarFocused: false,
		}));
	};

	render() {
		return (
			<div className="add_expense">
				{this.state.error && <ErrorComponent error={this.state.error} />}
				{this.state.success && <SuccessComponent success={this.state.success} />}
				<form className="add_expense-form" onSubmit={this.formSubmit}>
					<input
						type="text"
						placeholder="description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					></input>
					<input
						type="text"
						placeholder="amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					></input>
					<textarea
						placeholder="(Optional) Add a note..."
						value={this.state.note}
						onChange={this.onNoteChange}
					></textarea>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

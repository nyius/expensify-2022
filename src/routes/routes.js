import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ExpenseDashboardPage } from '../pages/ExpenseDashboardPage';
import { HeaderComponent } from '../components/HeaderComponent';
import EditExpensePage from '../pages/EditExpensePage';
import AddExpensePage from '../pages/AddExpensePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { HelpPage } from '../pages/HelpPage';
import { Redux101Page } from '../playground/redux-101Page';
import { AuthInfo } from '../playground/HOC';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { addExpense } from '../actions/expensesActions';
import '../firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({ description: 'coffee', amount: -3.5, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', amount: -1800, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'gas bill', amount: -120, createdAt: 500 }));
store.dispatch(addExpense({ description: 'hydro bill', amount: -140, createdAt: 3000 }));
store.dispatch(addExpense({ description: 'Deposit', amount: 140, createdAt: 108000 }));

export const routes = (
	<Provider store={store}>
		<Router>
			<HeaderComponent />
			<Routes>
				<Route exact path="/" element={<ExpenseDashboardPage />}></Route>
				<Route exact path="/create" element={<AddExpensePage />}></Route>
				<Route exact path="/help" element={<HelpPage />}></Route>
				<Route path="/edit/:id" element={<EditExpensePage />}></Route>
				<Route exact path="/redux" element={<Redux101Page />} />
				<Route exact path="/hoc" element={<AuthInfo isAuthenticated={true} info="Im pretty" />} />
				<Route path="*" element={<NotFoundPage />}></Route>
			</Routes>
		</Router>
	</Provider>
);

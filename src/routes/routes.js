import { Router, Route, Routes, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ExpenseDashboardPage } from '../pages/ExpenseDashboardPage';
import HeaderComponent from '../components/HeaderComponent';
import EditExpensePage from '../pages/EditExpensePage';
import AddExpensePage from '../pages/AddExpensePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { HelpPage } from '../pages/HelpPage';
import { LoginPage } from '../pages/LoginPage';
import { Redux101Page } from '../playground/redux-101Page';
import { AuthInfo } from '../playground/HOC';
import '../firebase/firebase';
import { useLayoutEffect, useState } from 'react';
import PrivateRoute from './PrivateRoute';

// here is our
export let history = createBrowserHistory();

// here we create a new router that can take in our own custom history props to use as navigation
const CustomRouter = ({ history, ...props }) => {
	const [state, setState] = useState({
		action: history.action,
		location: history.location,
	});
	useLayoutEffect(() => history.listen(setState), [history]);
	return <Router {...props} location={state.location} navigationType={state.action} navigator={history} />;
};

export const AppRouter = (
	<CustomRouter history={history}>
		<HeaderComponent />
		<Routes>
			<Route exact path="/" element={<LoginPage />}></Route>
			<Route
				exact
				path="/expense_dashboard"
				element={
					<PrivateRoute>
						<ExpenseDashboardPage />
					</PrivateRoute>
				}
			></Route>
			<Route
				exact
				path="/create"
				element={
					<PrivateRoute>
						<AddExpensePage />
					</PrivateRoute>
				}
			></Route>
			<Route
				exact
				path="/help"
				element={
					<PrivateRoute>
						<HelpPage />
					</PrivateRoute>
				}
			></Route>
			<Route
				path="/edit/:id"
				element={
					<PrivateRoute>
						<EditExpensePage />
					</PrivateRoute>
				}
			></Route>
			{/* <Route exact path="/redux" element={<Redux101Page />} />
			<Route exact path="/hoc" element={<AuthInfo isAuthenticated={true} info="Im pretty" />} /> */}
			<Route path="*" element={<NotFoundPage />}></Route>
		</Routes>
	</CustomRouter>
);

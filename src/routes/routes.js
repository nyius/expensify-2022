import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ExpenseDashboardPage } from '../pages/ExpenseDashboardPage';
import { HeaderComponent } from '../components/HeaderComponent';
import EditExpensePage from '../pages/EditExpensePage';
import AddExpensePage from '../pages/AddExpensePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { HelpPage } from '../pages/HelpPage';
import { Redux101Page } from '../playground/redux-101Page';
import { AuthInfo } from '../playground/HOC';
import '../firebase/firebase';

// const store = configureStore();

export const AppRouter = (
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
);

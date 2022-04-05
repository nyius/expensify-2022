import * as ReactDOMClient from 'react-dom/client';
import { AppRouter } from './routes/routes';
import reportWebVitals from './reportWebVitals';
import './scss/style.scss';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expensesActions';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { history } from './routes/routes';
import { login, logout } from './actions/authActions';

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		root.render(jsx);
		hasRendered = true;
	}
};

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

// wrap our page in a provider so that our whole app can have access to the store if need be
const jsx = <Provider store={store}>{AppRouter}</Provider>;

root.render(<p>Loading...</p>);

onAuthStateChanged(auth, user => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			// run our renderApp function
			renderApp();
			// if user is logged in and theyre on /, redirect them to the dashboard
			if (history.location.pathname === '/') {
				history.push('/expense_dashboard');
			}
		});
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});

reportWebVitals();

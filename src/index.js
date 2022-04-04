import * as ReactDOMClient from 'react-dom/client';
import { AppRouter } from './routes/routes';
import reportWebVitals from './reportWebVitals';
import './scss/style.scss';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expensesActions';

const store = configureStore();

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const jsx = <Provider store={store}>{AppRouter}</Provider>;

root.render(<p>Loading...</p>);

store.dispatch(startSetExpenses()).then(() => {
	root.render(jsx);
});

reportWebVitals();

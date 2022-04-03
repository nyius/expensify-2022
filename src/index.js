import * as ReactDOMClient from 'react-dom/client';
import { routes } from './routes/routes';
import reportWebVitals from './reportWebVitals';
import './scss/style.scss';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(routes);

reportWebVitals();

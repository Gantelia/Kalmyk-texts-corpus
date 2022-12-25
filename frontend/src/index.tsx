import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import { store } from './store';
import App from './components/app/App';
import './index.scss';
import { fetchSearchMenu } from './store/api-actions/search-actions';
import { fetchHierarchy } from './store/api-actions/hierarchy-actions';

store.dispatch(fetchSearchMenu());
store.dispatch(fetchHierarchy(''));

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

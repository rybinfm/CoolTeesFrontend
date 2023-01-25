import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './reducks/store/store';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as History from 'history';
import reportWebVitals from './reportWebVitals';

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history = {history}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

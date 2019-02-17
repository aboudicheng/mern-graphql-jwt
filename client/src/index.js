import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { StoreContext } from 'redux-react-hook';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

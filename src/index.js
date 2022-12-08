import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import  thunk  from "redux-thunk";
import { applyMiddleware } from "redux";

import reducers from "./redux/reducers";
import App from "./components/App";

const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
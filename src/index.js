import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App.js'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import reducer from './reducers/'
import ErrorBoundary from "./components/ErrorBoundary";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
    //applyMiddleware(thunk)

)
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </Provider>
    ,
    document.getElementById("root")
)


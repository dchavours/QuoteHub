import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory as createHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from './sagas';
import reducers from './reducers';
import thunk from 'redux-thunk';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

const middlewares = [thunk, sagaMiddleware, routeMiddleware];



const store = createStore(
  combineReducers({ ...reducers, router: connectRouter(history) }),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export default store;

import { createStore, Middleware, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import reducer, { IRootState } from '../reducers';

const defaultMiddlewares = [thunkMiddleware, promiseMiddleware, loadingBarMiddleware()];


const composedMiddlewares = (middlewares: Middleware[]) => compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initialize = (initialState?: IRootState, middlewares = []) => createStore(reducer, initialState, composedMiddlewares(middlewares));
export default initialize
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import drinksReducer from '../reducers/drinksReducer';

const loggerMiddleware = createLogger();

const configureStore = () => createStore(drinksReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ));

export default configureStore;

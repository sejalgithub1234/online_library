import { createStore, combineReducers } from 'redux';
import booksReducer from './reducers';

const rootReducer = combineReducers({
  books: booksReducer,
});

const store = createStore(rootReducer);

export default store;



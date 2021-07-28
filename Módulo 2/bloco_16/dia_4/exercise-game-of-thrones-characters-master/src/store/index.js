import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import myReducer from '../reducers';

//aplique o middleware
const store = createStore(myReducer, applyMiddleware(thunk));

export default store;

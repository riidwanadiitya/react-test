import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducers from './RootReducers';


const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
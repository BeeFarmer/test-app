import { combineReducers } from 'redux';
import counterReducer from './counterReducer.js';
import todoReducer from './todoReducer.js';


const rootReducer = combineReducers({
  counterReducer,
  todoReducer
});

export default rootReducer;
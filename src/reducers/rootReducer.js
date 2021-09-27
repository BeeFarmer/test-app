import { combineReducers } from 'redux';
import counterReducer from './counterReducer.js';
import todoReducer from './todoReducer.js';
import mvlistReducer from './mvlistReducer.js';


const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
  mvlistReducer
});

export default rootReducer;
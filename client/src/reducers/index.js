import { combineReducers } from 'redux';
import sessionReducer from './session';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
});

export default rootReducer;
import { combineReducers } from 'redux';
import { routeReducer } from './route';

export default combineReducers({
  route: routeReducer,
});

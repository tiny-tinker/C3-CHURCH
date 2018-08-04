import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from './../scenes/Home/modules/homeReducer';
export default combineReducers({
  routing: routerReducer,
  homeScene: homeReducer
});

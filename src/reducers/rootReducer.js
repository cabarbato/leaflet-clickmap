import { combineReducers } from 'redux';

import citiesReducer from './citiesReducer';
import progressReducer from './progressReducer';
import demoReducer from './demoReducer';

export default combineReducers({
  citiesReducer,
  progressReducer,
  demoReducer
});

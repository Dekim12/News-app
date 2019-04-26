import { combineReducers } from 'redux';
import apiState from './apiReducer';
import dataState from './dataReducer';
import filterState from './filterReducer';

export default combineReducers({ apiState, dataState, filterState });

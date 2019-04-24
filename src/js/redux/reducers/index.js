import { combineReducers } from 'redux';
import apiState from './apiReducer';
import dataState from './dataReducer';

export default combineReducers({ apiState, dataState });

import {combineReducers} from 'redux';

import cartReducer from "./cart_reducers";

export default combineReducers({
  cart: cartReducer
});
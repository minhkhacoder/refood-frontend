/** @format */

import authSlice from "./auth/slice";
import foodSlice from "./food/slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authSlice,
  food: foodSlice,
});

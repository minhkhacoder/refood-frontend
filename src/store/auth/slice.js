/** @format */

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    authRegister: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    authUpdateUser: (state, { payload }) => ({
      ...state,
      user: payload.customer_info,
      accessToken: payload.access_token,
    }),
    authLogOut: (state, action) => ({}),
    authGetAddressDetail: (state, { payload }) => ({
      ...state,
    }),
    authUpdateAddressInfo: (state, { payload }) => ({
      ...state,
      addressInfo: payload,
    }),
  },
});

export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authLogOut,
  authGetAddressDetail,
  authUpdateAddressInfo,
} = authSlice.actions;

export default authSlice.reducer;

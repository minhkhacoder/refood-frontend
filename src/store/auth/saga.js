/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleAuthLogin,
  handleAuthRegister,
  handleGetAddressDetail,
  logOut,
} from "./handlers";
import {
  authGetAddressDetail,
  authLogin,
  authLogOut,
  authRegister,
} from "./slice";

export default function* authWatcher() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authLogOut.type, logOut);
  yield takeLatest(authGetAddressDetail.type, handleGetAddressDetail);
}

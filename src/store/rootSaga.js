/** @format */

import { all, fork } from "redux-saga/effects";
import foodWatcher from "./food/saga";
import authWatcher from "./auth/saga";

export default function* rootSaga() {
  yield all([fork(authWatcher), fork(foodWatcher)]);
}

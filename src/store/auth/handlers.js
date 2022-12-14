/** @format */

import { getAddressDetailApi, loginApi, registerApi } from "api/user";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import Swal from "sweetalert2";
import { authUpdateAddressInfo, authUpdateUser } from "./slice";

function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(registerApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Đăng ký tài khoản thành công. Đăng nhập ngay!",
        showConfirmButton: "Ok",
        reverseButtons: true,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, {
      position: "top-right",
    });
  }
}

function* handleAuthLogin(action) {
  const { payload } = action;
  try {
    const response = yield call(loginApi, payload);
    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.customer_info));
      yield put(authUpdateUser(response.data));
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, {
      position: "top-right",
    });
  }
}

function* logOut() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  localStorage.clear();
  Swal.fire({
    position: "center",
    icon: "success",
    text: "Đăng xuất thành công!",
    showConfirmButton: false,
    timer: 2000,
  });
}

function* handleGetAddressDetail({ payload }) {
  try {
    const response = yield call(getAddressDetailApi, payload);
    if (response.status === 200) {
      yield put(authUpdateAddressInfo(response.data.address_info));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

export { handleAuthRegister, handleAuthLogin, logOut, handleGetAddressDetail };

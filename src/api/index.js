/** @format */

import { store } from "store/configureStore";

const { default: axios } = require("axios");

const token = window.localStorage.getItem("accessToken");
const user = window.localStorage.getItem("user");
const CustomerId = JSON.parse(user)?.CustomerId;

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? token : undefined,
    CustomerId: CustomerId ? CustomerId : undefined,
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  (req) => {
    const { accessToken, user } = store.getState();
    if (accessToken) {
      req.headers.Authorization = accessToken;
      req.headers.CustomerId = user.CustomerId;
    }
    return req;
  },
  null,
  { synchronous: true }
);

// Add a response interceptor
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
      // store.dispatch(LOGOUT_SUCCESS());
    }
    return Promise.reject(error);
  }
);

export default instance;

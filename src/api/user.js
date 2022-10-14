/** @format */

import instance from "api";

export const registerApi = (user) =>
  instance.request({ method: "POST", data: user, url: "/auth/register" });

export const loginApi = (user) =>
  instance.request({ method: "POST", data: user, url: "/auth/login" });

export const getUserApi = () =>
  instance.request({ method: "GET", url: "/auth/info" });

export const updateUserInfoApi = (user) =>
  instance.request({ method: "PUT", data: user, url: "/auth/update/info" });

export const updateUserPassApi = (user) =>
  instance.request({ method: "PUT", data: user, url: "/auth/update/password" });

export const getDistrictApi = () =>
  instance.request({ method: "GET", url: "/cantho-units/get-districts" });

export const getWardApi = (districtId) =>
  instance.request({
    method: "GET",
    url: `/cantho-units/get-wards/${districtId}`,
  });

export const getAllAddressApi = () =>
  instance.request({ method: "GET", url: "/auth/get-addresses" });

export const getAddressDetailApi = (id) =>
  instance.request({ method: "GET", url: `/auth/get-address-detail/${id}` });

export const addAddressApi = (address) =>
  instance.request({ method: "POST", data: address, url: "/auth/add/address" });

export const updateAddressApi = (address) =>
  instance.request({
    method: "PUT",
    data: address,
    url: "/auth/update/address",
  });

export const deleteAddressApi = (id) =>
  instance.request({ method: "DELETE", url: `/auth/delete/address/${id}` });

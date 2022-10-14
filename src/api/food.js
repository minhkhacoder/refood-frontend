/** @format */

import instance from "api";

export const getAllFoodApi = () =>
  instance.request({ method: "GET", url: "/food/get-foods" });

export const findFoodApi = (param) => {
  const paramSearch = new URLSearchParams([
    ...Object.entries(param),
  ]).toString();
  console.log("findFoodApi ~ paramSearch", paramSearch);
  return instance.request({
    method: "GET",
    url: `/food/find-foods?${paramSearch}`,
  });
};

export const getFoodDetailApi = (param) => {
  return instance.request({
    method: "GET",
    url: `/food/get-food-details/${param}`,
  });
};

export const getFoodCommentApi = (id) => {
  return instance.request({
    method: "GET",
    url: `/food/get-food-comments/${id}`,
  });
};

export const addFoodCommentApi = (comment) => {
  return instance.request({
    method: "POST",
    data: comment,
    url: `/food/add-comment`,
  });
};

export const deleteFoodCommentApi = (comment) => {
  return instance.request({
    method: "DELETE",
    data: comment,
    url: `/food/delete-comment`,
  });
};

export const addCartFoodApi = (cartItem) => {
  return instance.request({
    method: "POST",
    data: cartItem,
    url: `/cart/add-to-cart`,
  });
};

export const getCartDetailFoodApi = () => {
  return instance.request({
    method: "GET",
    url: `/cart/get-cart-detail`,
  });
};

export const deleteCartApi = (mactma) => {
  return instance.request({
    method: "DELETE",
    data: mactma,
    url: `/cart/delete-cart-detail`,
  });
};

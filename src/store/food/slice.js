/** @format */

import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
  },
  reducers: {
    getAllFood: (state, { payload }) => ({
      ...state,
    }),
    updateAllFood: (state, { payload }) => ({
      ...state,
      foods: payload,
    }),
    searchFood: (state, { payload }) => ({
      ...state,
      foods: [],
    }),
    getFoodDetails: (state, { payload }) => ({
      ...state,
    }),
    updateFoodDetails: (state, { payload }) => ({
      ...state,
      foodDetails: payload,
    }),
    getCommentDetails: (state, { payload }) => ({
      ...state,
    }),
    updateCommentDetails: (state, { payload }) => ({
      ...state,
      comments: payload,
    }),
    addCommentDetails: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    deleteComment: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    addCart: (state) => ({
      ...state,
    }),
    getCartDetail: (state) => ({
      ...state,
    }),
    updateCart: (state, { payload }) => ({
      ...state,
      cart: payload,
    }),
    deleteCart: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});

export const {
  getAllFood,
  updateAllFood,
  searchFood,
  getFoodDetails,
  updateFoodDetails,
  getCommentDetails,
  updateCommentDetails,
  addCommentDetails,
  deleteComment,
  addCart,
  updateCart,
  getCartDetail,
  deleteCart,
} = foodSlice.actions;

export default foodSlice.reducer;

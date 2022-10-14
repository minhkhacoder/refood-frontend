/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleGetFoodDetail,
  handleGetAllFoods,
  handleSearchFoodToKey,
  handleSearchNameFood,
  handleGetCommentDetails,
  handleAddCommentDetails,
  handleDeleteComment,
  handleAddCart,
  handleGetCartDetail,
  handleDeleteCart,
} from "./handlers";
import {
  addCart,
  addCommentDetails,
  deleteCart,
  deleteComment,
  getAllFood,
  getCartDetail,
  getCommentDetails,
  getFoodDetails,
  searchFood,
} from "./slice";

export default function* foodWatcher() {
  yield takeLatest(getAllFood.type, handleGetAllFoods);
  yield takeLatest(searchFood.type, handleSearchNameFood);
  yield takeLatest(searchFood.type, handleSearchFoodToKey);
  yield takeLatest(getFoodDetails.type, handleGetFoodDetail);
  yield takeLatest(getCommentDetails.type, handleGetCommentDetails);
  yield takeLatest(addCommentDetails.type, handleAddCommentDetails);
  yield takeLatest(deleteComment.type, handleDeleteComment);
  yield takeLatest(addCart.type, handleAddCart);
  yield takeLatest(getCartDetail.type, handleGetCartDetail);
  yield takeLatest(deleteCart.type, handleDeleteCart);
}

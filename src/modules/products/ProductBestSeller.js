/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllFood } from "store/food/slice";
import ProductHeading from "./ProductHeading";
import ProductList from "./ProductList";

const ProductBestSeller = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchData() {
      dispatch(getAllFood());
    }
    fetchData();
  }, [dispatch]);

  const navigate = useNavigate();
  const handleAllFoodBestSell = () => {
    dispatch(getAllFood());
    navigate("/food");
  };

  const { foods } = useSelector((state) => state.food);
  if (!foods) return null;
  return (
    <div className="mb-10">
      <ProductHeading
        title="Món ăn bán chạy"
        view="Xem tất cả"
        onClick={handleAllFoodBestSell}
      ></ProductHeading>
      <ProductList data={foods}></ProductList>
    </div>
  );
};

export default ProductBestSeller;

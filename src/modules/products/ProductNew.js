/** @format */

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllFood } from "store/food/slice";
import ProductHeading from "./ProductHeading";
import ProductItem from "./ProductItem";

const ProductNew = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchData() {
      dispatch(getAllFood());
    }
    fetchData();
  }, [dispatch]);

  const navigate = useNavigate();
  const handleAllFoodNew = () => {
    dispatch(getAllFood());
    navigate("/food");
  };

  const { foods } = useSelector((state) => state.food);
  if (!foods) return null;
  return (
    <div className="mb-10">
      <ProductHeading
        title="Món ăn mới"
        view="Xem tất cả"
        onClick={handleAllFoodNew}
      ></ProductHeading>
      <div className="flex-layout grid-row">
        {foods.length > 0 &&
          foods.map((food) => (
            <ProductItem key={food.FoodName} data={food}></ProductItem>
          ))}
      </div>
    </div>
  );
};

export default ProductNew;

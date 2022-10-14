/** @format */

import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductAll = () => {
  const { foods } = useSelector((state) => state.food);
  return (
    <>
      <div className="flex-layout grid-row">
        {foods.length > 0 &&
          foods.map((food) => (
            <ProductItem key={food.FoodName} data={food}></ProductItem>
          ))}
      </div>
    </>
  );
};

export default ProductAll;

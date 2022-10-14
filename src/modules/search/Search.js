/** @format */

import ProductItem from "modules/products/ProductItem";
import React from "react";
import { useSelector } from "react-redux";

const Search = () => {
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

export default Search;

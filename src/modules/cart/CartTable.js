/** @format */

import { Quantity } from "components/quantity";
import useGetCount from "hooks/useGetCount";
import ProductImage from "modules/products/ProductImage";
import ProductPrice from "modules/products/ProductPrice";
import ProductTitle from "modules/products/ProductTitle";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCart } from "store/food/slice";
import Swal from "sweetalert2";
import priceVN from "utils/priceVN";

const CartTable = ({ data }) => {
  const [subTotal, setSubTotal] = useState(0);
  console.log("CartTable ~ subTotal", subTotal);
  const { getCount, handleSetGetCount } = useGetCount();
  const dispatch = useDispatch();

  useEffect(() => {
    if (getCount >= 1) {
      setSubTotal(getCount * data.FoodPrice);
    }
  }, [getCount, data.FoodPrice]);

  // Delete cart item
  const handleDeleteCartItem = () => {
    try {
      Swal.fire({
        title: "Xóa món ăn?",
        text: `Bạn muốn xóa món ${data.FoodName}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2bbef9",
        cancelButtonColor: "#ea2b0f",
        confirmButtonText: "Xóa",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteCart({ mactma: data.FoodDetailID }));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (!data) return null;
  return (
    <>
      <tr>
        <td className="cl-thumb">
          <div className="cl-image">
            <ProductImage url={data.FoodThumb}></ProductImage>
          </div>
        </td>
        <td className="cl-name">
          <ProductTitle>{data.FoodName}</ProductTitle>
        </td>
        <td className="cl-price">
          <ProductPrice>{priceVN(data.FoodPrice)}</ProductPrice>
        </td>
        <td className="cl-quantity">
          <Quantity
            currentCount={data.FoodDishCount}
            name="count"
            handleSetGetCount={handleSetGetCount}
          >
            {" "}
          </Quantity>
        </td>
        <td className="cl-subtotal">
          <ProductPrice>{priceVN(subTotal)}</ProductPrice>
        </td>
        <td className="cl-remove" onClick={handleDeleteCartItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </td>
      </tr>
    </>
  );
};

export default CartTable;

/** @format */

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartTable from "./CartTable";

const CartListStyled = styled.div`
  width: 820px;
  table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    background-color: transparent;
    max-width: 100%;
    th {
      border-bottom: 1px solid ${(props) => props.theme.line};
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.theme.textPrimary};
      text-transform: uppercase;
      padding: 12px;
      text-align: left;
    }
    tbody td:first-child {
      left: 0;
    }
    td {
      border-bottom: 1px solid ${(props) => props.theme.lineGray};
      padding: 12px;
      vertical-align: middle;
      display: table-cell;
      text-align: left;
    }
  }
  .cl-thumb {
  }
  .cl-image {
    width: 56px;
    height: 56px;
    border-radius: 6px;
  }
  .cl-name {
  }
  .cl-price {
  }
  .cl-quantity {
  }
  .cl-subtotal {
  }
  .cl-remove {
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
  }
  .cl-remove:hover {
    color: ${(props) => props.theme.red};
  }
`;

const CartList = () => {
  const { cart } = useSelector((state) => state.food);
  return (
    <CartListStyled>
      <table>
        <thead>
          <tr>
            <th className="cl-thumb">&nbsp;</th>
            <th className="cl-name">Món ăn</th>
            <th className="cl-price">Giá</th>
            <th className="cl-quantity">Số lượng</th>
            <th className="cl-subtotal">Tạm tính</th>
            <th className="cl-remove">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cart?.length > 0 &&
            cart.map((item) => (
              <CartTable key={item.FoodDetailID} data={item}></CartTable>
            ))}
        </tbody>
      </table>
    </CartListStyled>
  );
};

export default CartList;

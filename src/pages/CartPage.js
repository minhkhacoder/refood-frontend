/** @format */

import Layout from "components/layout/Layout";
import CartList from "modules/cart/CartList";
import CartTotal from "modules/cart/CartTotal";
import React from "react";
import styled from "styled-components";

const CartPageStyled = styled.div`
  margin-top: 40px;
  .cp-main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;
  }
`;

const CartPage = () => {
  return (
    <Layout>
      <CartPageStyled>
        <div className="container">
          <div className="cp-main">
            <CartList></CartList>
            <CartTotal></CartTotal>
          </div>
        </div>
      </CartPageStyled>
    </Layout>
  );
};

export default CartPage;

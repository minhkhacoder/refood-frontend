/** @format */

import React from "react";
import styled from "styled-components";

const ProductCartStyled = styled.div`
  width: 100%;
  height: 34px;
  border: 1px solid ${(props) => props.theme.blueBold};
  border-radius: 30px;
  background-color: transparent;
  padding: 0 20px;
  color: ${(props) => props.theme.blueBold};
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  flex-shrink: 0;
`;

const ProductCart = ({ className = "" }) => {
  return (
    <ProductCartStyled
      className={`hover:bg-blueBold hover:text-white hover:transition-all ${className}`}
    >
      Thêm giỏ hàng
    </ProductCartStyled>
  );
};

export default ProductCart;

/** @format */

import SectionLeft from "components/layout/SectionLeft";
import SectionRight from "components/layout/SectionRight";
import ProductNew from "modules/products/ProductNew";
import ProductBestSeller from "modules/products/ProductBestSeller";
import React from "react";
import styled from "styled-components";
import ProductTrending from "modules/products/ProductTrending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFood } from "store/food/slice";

const HomeProductStyled = styled.section`
  padding-top: 40px;
  .product-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
  }
`;

const HomeProduct = () => {
  // Get all food from database
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchData() {
      dispatch(getAllFood());
    }
    fetchData();
  }, [dispatch]);
  const { foods } = useSelector((state) => state.food);
  if (!foods) return null;
  return (
    <HomeProductStyled>
      <div className="product-main">
        <SectionLeft className="section-left">
          <img
            src="https://images.unsplash.com/photo-1601585099780-6b176dc702af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="rounded-lg"
          />
          <ProductTrending></ProductTrending>
        </SectionLeft>
        <SectionRight className="section-right">
          <ProductBestSeller></ProductBestSeller>
          <ProductNew></ProductNew>
        </SectionRight>
      </div>
    </HomeProductStyled>
  );
};

export default HomeProduct;

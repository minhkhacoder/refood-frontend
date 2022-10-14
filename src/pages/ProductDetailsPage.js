/** @format */

import styled from "styled-components";
import React from "react";
import Layout from "components/layout/Layout";
import DetailsContent from "modules/details/DetailsContent";
import DetailsReview from "modules/details/DetailsReview";
import DetailsComment from "modules/details/DetailsComment";
import ProductSimilar from "modules/products/ProductSimilar";

const ProductDetailsPageStyled = styled.div`
  background-color: #f7f8fd;
  padding-bottom: 50px;
  .dt-similar {
    margin-top: 60px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 40px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .dt-content {
      flex-wrap: wrap;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .dt-content {
      flex-wrap: wrap;
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .dt-content {
      flex-wrap: wrap;
      padding: 0;
    }
  }
`;
const ProductDetailsPage = () => {
  return (
    <Layout>
      <div className="pb-10 bg-[#f7f8fd]"></div>
      <ProductDetailsPageStyled>
        <div className="container">
          <DetailsContent className="dt-content"></DetailsContent>
          <DetailsReview></DetailsReview>
          <div className="dt-similar">
            <ProductSimilar></ProductSimilar>
          </div>
          <DetailsComment></DetailsComment>
        </div>
      </ProductDetailsPageStyled>
    </Layout>
  );
};

export default ProductDetailsPage;

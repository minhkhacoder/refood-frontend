/** @format */

import React from "react";
import styled from "styled-components";
import ProductCart from "./ProductCart";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductStar from "./ProductStar";
import ProductTitle from "./ProductTitle";
import PropTypes from "prop-types";
import slugify from "slugify";
import { Link } from "react-router-dom";
import priceVN from "utils/priceVN";

const ProductItemStyled = styled.div`
  height: 100%;
  .card-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: auto;
    height: 100%;
    padding: 20px;
    border: 1px solid ${(props) => props.theme.borderLight};
    border-radius: 6px;
    cursor: pointer;
  }
  .card-main:hover {
    transition: all 0.5s ease-out;
    box-shadow: ${(props) => props.theme.textGray} 0px 3px 8px;
  }
  .card-image {
    border-radius: 8px;
    height: 164px;
  }
  .card-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
  }
  .card-top {
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    flex-shrink: 0;
  }
`;

const ProductItem = ({ data }) => {
  const { FoodName, FoodSlug, FoodPrices, FoodImages, FoodReviewAvg } = data;
  const slug = slugify(FoodSlug, { lower: true });
  if (!data) return null;
  return (
    <ProductItemStyled className="cards">
      <div className="card-main">
        <ProductImage
          url={FoodImages[0].FoodImageUrl}
          to={slug}
          className="card-image"
        ></ProductImage>
        <div className="card-content">
          <div className="card-top">
            <ProductTitle to={slug}>{FoodName}</ProductTitle>
            <Link to={`/${slug}`} className="card-info">
              <ProductStar
                className="flex-shrink-0 mb-3"
                starNumber={FoodReviewAvg}
              ></ProductStar>
              {FoodPrices.length <= 1 ? (
                <ProductPrice className="flex-1 mb-3">
                  {priceVN(FoodPrices[0].FoodPrice)}
                </ProductPrice>
              ) : (
                <ProductPrice className="flex-1 mb-3">
                  {priceVN(FoodPrices[0].FoodPrice) +
                    "~" +
                    priceVN(FoodPrices[FoodPrices.length - 1].FoodPrice)}
                </ProductPrice>
              )}
            </Link>
          </div>
          <ProductCart className="card-button"></ProductCart>
        </div>
      </div>
    </ProductItemStyled>
  );
};

ProductItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ProductItem;

/** @format */

import styled from "styled-components";
import React from "react";
import ProductTitle from "modules/products/ProductTitle";
import ProductStar from "modules/products/ProductStar";
import ProductPrice from "modules/products/ProductPrice";
import ProductImage from "modules/products/ProductImage";
import DetailsThumb from "./DetailsThumb";
import { Button } from "components/button";
import { useState } from "react";
import { Quantity } from "components/quantity";
import priceVN from "utils/priceVN";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getFoodDetails } from "store/food/slice";
import ProductRation from "modules/products/ProductRation";
import useGetCount from "hooks/useGetCount";

const DetailsContentStyled = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 40px 40px;
  display: flex;
  gap: 50px;
  .image-big {
    width: 450px;
    height: 450px;
    border-radius: 6px;
    cursor: pointer;
    img {
      transition: all 3s;
    }
  }
  /* .thumb-image img:first-child {
    border: 2px solid lightseagreen;
  } */
  .detail-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .detail-title {
    .title {
      font-size: 30px;
      margin-bottom: 0;
    }
  }
  .detail-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    margin: 20px 0;
  }
  .detail-rated {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    .detail-count {
      border-bottom: 1px solid ${(props) => props.theme.red};
      color: ${(props) => props.theme.red};
    }
  }
  .detail-count {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.textGray};
    line-height: 1;
    padding-top: 4px;
    border-bottom: 1px solid ${(props) => props.theme.textGray};
    align-items: center;
  }
  .detail-review {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
  .detail-evaluate {
    font-size: 14px;
    font-weight: 500;
    padding-top: 4px;
    color: ${(props) => props.theme.text};
  }
  .detail-line {
    display: block;
    width: 1px;
    background-color: ${(props) => props.theme.textGray};
    height: 100%;
  }
  .detail-ration {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    gap: 20px;
    .ration-name {
      font-size: 16px;
      font-weight: 500;
      color: ${(props) => props.theme.text};
    }
  }
  .detail-quantity {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 30px;
    .quantity-name {
      font-size: 16px;
      font-weight: 500;
      color: ${(props) => props.theme.text};
    }
  }
  .detail-btn {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .detail-image {
      margin: 0 auto;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .detail-image {
      margin: 0 auto;
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .detail-image {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
    }
    .image-big {
      width: 300px;
      height: 300px;
    }
    .thumb-image {
      img {
        width: 50px;
        height: 50px;
      }
    }
    .detail-title {
      .title {
        font-size: 26px;
        margin-bottom: 0;
      }
    }
    .detail-btn {
      button {
        font-size: 14px;
      }
    }
    .ration-name {
      width: 40%;
    }
  }
`;

const DetailsContent = ({ className = "" }) => {
  const [ration, setRation] = useState("");
  const params = useParams();
  const { slug } = params;
  const dispatch = useDispatch();

  const { getCount, handleSetGetCount } = useGetCount();

  useEffect(() => {
    async function getFoodDetail() {
      try {
        dispatch(getFoodDetails(slug));
      } catch (error) {
        console.log(error);
      }
    }
    getFoodDetail();
  }, [dispatch, slug]);

  const { foodDetails } = useSelector((state) => state.food);
  const [image, setImage] = useState("");
  const getImage = (url) => {
    setImage(url);
  };

  const handleSelectRation = (foodID) => {
    setRation(foodID);
  };
  // Add cart
  const handleAddCart = () => {
    dispatch(
      addCart({
        mactma: ration,
        count: getCount,
      })
    );
  };

  return (
    <>
      {foodDetails && (
        <DetailsContentStyled className={className}>
          <div className="detail-image">
            <div className="image-big">
              <ProductImage
                className="h-full"
                url={image || foodDetails?.FoodThumb}
              ></ProductImage>
            </div>
            <DetailsThumb
              image={foodDetails?.FoodImages}
              className="thumb-image"
              getImage={getImage}
            ></DetailsThumb>
          </div>
          <div className="detail-content">
            <div className="detail-title">
              <ProductTitle className="title">
                {foodDetails?.FoodName}
              </ProductTitle>
            </div>
            <div className="detail-info">
              <div className="detail-rated">
                <span className="detail-count">
                  {foodDetails?.FoodReviewAvg}
                </span>
                <ProductStar
                  starNumber={foodDetails?.FoodReviewAvg}
                ></ProductStar>
              </div>
              <span className="detail-line"></span>
              <div className="detail-review">
                <div className="detail-count">50</div>
                <div className="detail-evaluate">Đánh giá</div>
              </div>
            </div>
            <div className="detail-price">
              <ProductPrice sizeText="32px" className="mb-5">
                {priceVN(foodDetails?.FoodPrices[0].FoodPrice) +
                  "~" +
                  priceVN(
                    foodDetails?.FoodPrices[foodDetails?.FoodPrices.length - 1]
                      .FoodPrice
                  )}
              </ProductPrice>
            </div>
            <div className="detail-ration">
              <span className="ration-name">Khẩu phần:</span>
              <ProductRation
                data={foodDetails?.FoodPrices}
                className="ration"
                handleSelectRation={handleSelectRation}
              ></ProductRation>
            </div>
            <div className="detail-quantity">
              <span className="quantity-name">Số lượng:</span>
              <Quantity
                name="count"
                handleSetGetCount={handleSetGetCount}
              ></Quantity>
            </div>
            <div className="detail-btn">
              <Button
                className=" hover:border-primary hover:bg-primary hover:text-white hover:transition-all"
                height="48px"
                kind="not-bg"
                onClick={handleAddCart}
              >
                Thêm vào giỏ
              </Button>
              <Button
                className="transition-all bg-transparent hover:opacity-80"
                height="48px"
                kind="primary"
              >
                Mua ngay
              </Button>
            </div>
          </div>
        </DetailsContentStyled>
      )}
    </>
  );
};

export default DetailsContent;

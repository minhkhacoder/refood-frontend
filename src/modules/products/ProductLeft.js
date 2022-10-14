/** @format */

import React from "react";
import SearchItem from "../search/SearchItem";
import styled from "styled-components";
import { priceStatus, reviewStatus } from "utils/constants";

// Data
// const category = [
//   {
//     id: "1",
//     name: "mon-nuong",
//     title: "Món nướng",
//   },
//   {
//     id: "2",
//     name: "mon-lau",
//     title: "Lẩu",
//   },
//   {
//     id: "3",
//     name: "mon-hap",
//     title: "Món hấp",
//   },
//   {
//     id: "4",
//     name: "mon-xào",
//     title: "Món xào",
//   },
// ];

const price = [
  {
    id: "1",
    name: "price-100",
    title: "Dưới 100.000đ",
    values: priceStatus.UNDER100K,
  },
  {
    id: "2",
    name: "price-500",
    title: "Từ 100.000đ đến 500.000đ",
    values: priceStatus.F100KT500K,
  },
  {
    id: "3",
    name: "price-1000",
    title: "Từ 500.000đ đến 1.000.000đ",
    values: priceStatus.F500KT1000K,
  },
  {
    id: "4",
    name: "price-more-1000",
    title: "Trên 1.000.000đ",
    values: priceStatus.ON1000K,
  },
];

// const meal = [
//   {
//     id: "1",
//     name: "meal-1",
//     title: "1 người",
//   },
//   {
//     id: "2",
//     name: "meal-2",
//     title: "2 người",
//   },
//   {
//     id: "3",
//     name: "meal-5",
//     title: "5 người",
//   },
//   {
//     id: "4",
//     name: "meal-more-5",
//     title: "Trên 5 người",
//   },
// ];

// const star = [
//   {
//     id: "1",
//     starNumber: reviewStatus.VIEW1,
//   },
//   {
//     id: "2",
//     starNumber: reviewStatus.VIEW2,
//   },
//   {
//     id: "3",
//     starNumber: reviewStatus.VIEW3,
//   },
//   {
//     id: "4",
//     starNumber: reviewStatus.VIEW4,
//   },
//   {
//     id: "5",
//     starNumber: reviewStatus.VIEW5,
//   },
// ];

const SearchLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const ProductLeft = () => {
  return (
    <SearchLeftStyled>
      {/* <SearchItem title="Theo danh mục" data={category}></SearchItem> */}
      <SearchItem title="Theo mức giá" data={price}></SearchItem>
      {/* <SearchItem title="Theo khẩu phần" data={meal}></SearchItem>
      <SearchItem title="Theo đánh giá" data={star} star={true}></SearchItem> */}
    </SearchLeftStyled>
  );
};

export default ProductLeft;

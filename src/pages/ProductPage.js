/** @format */

import { Dropdown } from "components/dropdown";
import Layout from "components/layout/Layout";
import SectionLeft from "components/layout/SectionLeft";
import SectionRight from "components/layout/SectionRight";
import ProductLeft from "modules/products/ProductLeft";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ProductPageStyled = styled.div`
  .pp-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
    padding-top: 60px;
  }
  .pp-heading {
    padding: 15px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.grayDark};
    margin-bottom: 20px;
  }
  .pp-dropdown {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }
  .pp-select {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.text};
    gap: 10px;
  }
  .pp-list {
    width: 250px;
    top: calc(100% + 15px);
    div {
      font-size: 14px;
    }
  }
  .pp-number {
    width: 80px;
    top: calc(100% + 15px);
    left: auto;
    right: 20px;
    div {
      font-size: 14px;
    }
  }
`;

const ProductPage = () => {
  return (
    <Layout>
      <ProductPageStyled>
        <div className="pp-main">
          <SectionLeft className="section-left">
            <ProductLeft></ProductLeft>
          </SectionLeft>
          <SectionRight className="section-right">
            <div>
              <div className="pp-heading">
                <div className="pp-dropdown">
                  <div className="pp-filter">
                    <Dropdown>
                      <Dropdown.Select
                        placeholder="Tìm món ăn"
                        className="pp-select"
                        sizeIcon="w-4 h-4"
                      ></Dropdown.Select>
                      <Dropdown.List className="pp-list">
                        <Dropdown.Option>Sắp xếp theo phổ biến</Dropdown.Option>
                        <Dropdown.Option>Sắp xếp theo mới nhất</Dropdown.Option>
                        <Dropdown.Option>
                          Sắp xếp giá từ cao đến thấp
                        </Dropdown.Option>
                        <Dropdown.Option>
                          Sắp xếp giá từ thấp đến cao
                        </Dropdown.Option>
                      </Dropdown.List>
                    </Dropdown>
                  </div>
                  <div className="pp-page">
                    <Dropdown>
                      <Dropdown.Select
                        placeholder="Hiển thị 12"
                        className="pp-select"
                        sizeIcon="w-4 h-4"
                      ></Dropdown.Select>
                      <Dropdown.List className="pp-number">
                        <Dropdown.Option>12</Dropdown.Option>
                        <Dropdown.Option>24</Dropdown.Option>
                        <Dropdown.Option>36</Dropdown.Option>
                        <Dropdown.Option>48</Dropdown.Option>
                      </Dropdown.List>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <Outlet></Outlet>
            </div>
          </SectionRight>
        </div>
      </ProductPageStyled>
    </Layout>
  );
};

export default ProductPage;

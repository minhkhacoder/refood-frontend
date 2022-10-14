/** @format */

import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "components/dropdown";

const HeaderBottomStyled = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.lineGray};
  .hb-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dropdown-select {
    border-radius: 40px;
    border: none;
    background-color: ${(props) => props.theme.primary};
    justify-content: center;
    letter-spacing: 1px;
    gap: 20px;
    width: 250px;
    color: #fff;
    height: 50px;
    font-size: 18px;
  }
  .dropdown-lists {
    margin-top: 20px;
    padding: 20px 0;
    border: 1px solid ${(props) => props.theme.lineGray};
    width: 270px;
    color: ${(props) => props.theme.text};
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const HeaderBottom = ({ className = "" }) => {
  return (
    <HeaderBottomStyled className={className}>
      <div className="container">
        <div className="hb-main">
          <div className="hb-dropdown">
            <Dropdown>
              <Dropdown.Select
                placeholder="DANH MỤC"
                className="dropdown-select"
              ></Dropdown.Select>
              <Dropdown.List className="dropdown-lists" open={true}>
                <Dropdown.Option>Món nướng</Dropdown.Option>
                <Dropdown.Option>Món chiên</Dropdown.Option>
                <Dropdown.Option>Cơm</Dropdown.Option>
                <Dropdown.Option>Đồ uống</Dropdown.Option>
                <Dropdown.Option>Item</Dropdown.Option>
                <Dropdown.Option>Item</Dropdown.Option>
                <Dropdown.Option>Item</Dropdown.Option>
                <Dropdown.Option>Item</Dropdown.Option>
                <Dropdown.Option>Item</Dropdown.Option>
                <Dropdown.Option>Item</Dropdown.Option>
                <Dropdown.Option>Item</Dropdown.Option>
                <Dropdown.Option>Item</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </div>
          <div className="menu">
            <div className="menu-item">
              <NavLink to="/#">Trang chủ</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to="/#">Thực đơn</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to="/#">Chương trình khuyến mãi</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to="/#">Giới thiệu</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to="/#">Liên hệ</NavLink>
            </div>
          </div>
        </div>
      </div>
    </HeaderBottomStyled>
  );
};

export default HeaderBottom;

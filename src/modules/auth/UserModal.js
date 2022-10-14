/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { authLogOut } from "store/auth/slice";
import { useEffect } from "react";

const UserModalStyled = styled.div`
  position: absolute;
  right: 0;
  top: 55px;
  z-index: 100;
  padding: 20px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.line};
  border-radius: 6px;
  transform: translateX(300%);
  transition: all 0.3s linear;
  width: 180px;
  .um-home {
    padding: 10px 0;
    border-bottom: 1px solid ${(props) => props.theme.borderLight};
    font-size: 14px;
    color: ${(props) => props.theme.textGray};
    cursor: pointer;
  }
  .um-item {
    padding: 10px 0;
    font-size: 14px;
    color: ${(props) => props.theme.textGray};
    cursor: pointer;
  }
  .um-logout {
    padding: 10px 0;
    border-top: 1px solid ${(props) => props.theme.borderLight};
    font-size: 14px;
    color: ${(props) => props.theme.textGray};
    cursor: pointer;
  }
  li:hover {
    color: ${(props) => props.theme.text};
  }
`;

const UserModal = ({ className = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(authLogOut());
    navigate("/");
  };

  return (
    <UserModalStyled className={className}>
      <ul>
        <li className="um-home">
          <Link to={"/user/account/profile"}>Trang cá nhân</Link>
        </li>
      </ul>
      <ul>
        <li className="um-item">Đơn hàng của tôi</li>
        <li className="um-item">Đánh giá sản phẩm</li>
        <li className="um-item">Mã giảm giá của tôi</li>
      </ul>
      <ul>
        <li className="um-logout" onClick={handleLogOut}>
          Đăng xuất
        </li>
      </ul>
    </UserModalStyled>
  );
};

UserModal.propTypes = {
  className: PropTypes.string,
};

export default UserModal;

/** @format */

import styled from "styled-components";
import React from "react";
import { useState } from "react";
import Login from "modules/auth/Login";
import Register from "modules/auth/Register";

const AccountPageStyled = styled.div`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 60px;
  .account-main {
    width: 500px;
    height: 100%;
    border: 1px solid ${(props) => props.theme.grayBorder};
    border-radius: 8px;
    background-color: #fff;
    padding: 25px 60px;
    position: relative;
  }
  .account-heading {
    width: 230px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .account-toggle {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
  }
  #line {
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${(props) => props.theme.primary};
    width: calc(100% - 118px);
    height: 4px;
    transition: all 0.5s;
  }
  .have-account {
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 500;
    font-style: italic;
    a {
      display: inline-block;
      color: ${(props) => props.theme.textGray};
      padding-left: 2px;
    }
    a:hover {
      color: ${(props) => props.theme.textPrimary};
      transition: all;
    }
  }
  /* Mobile */
  @media (min-width: 320px) and (max-width: 767px) {
    .account-main {
      border: none;
    }
  }
`;
const AccountPage = () => {
  const [show, setShow] = useState(true);
  const handleLogin = () => {
    var line = document.getElementById("line");
    setShow((show) => !show);
    line.style.left = "0";
    line.style.width = "112px";
  };
  const handleRegister = () => {
    var line = document.getElementById("line");
    setShow((show) => !show);
    line.style.left = "145px";
    line.style.width = "83px";
  };

  return (
    <AccountPageStyled>
      <div className="account-main">
        <div className="account-heading">
          <span id="line"></span>
          <h3
            className={
              show === true
                ? "account-toggle pointer-events-none"
                : "account-toggle cursor-pointer opacity-60 transition-all"
            }
            onClick={handleLogin}
          >
            Đăng nhập
          </h3>
          <h3
            className={
              show === false
                ? "account-toggle pointer-events-none"
                : "account-toggle cursor-pointer opacity-60 transition-all"
            }
            onClick={handleRegister}
          >
            Đăng ký
          </h3>
        </div>
        <Login show={show}></Login>
        <Register show={show}></Register>
      </div>
    </AccountPageStyled>
  );
};

export default AccountPage;

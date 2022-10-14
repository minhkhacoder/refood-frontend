/** @format */

import { deleteAddressApi, getAllAddressApi } from "api/user";
import ModalComponent from "components/modal/ModalComponent";
import useModal from "hooks/useModal";
import useNotification from "hooks/useNotification";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authGetAddressDetail } from "store/auth/slice";
import styled from "styled-components";
import Swal from "sweetalert2";
import { addressStatus } from "utils/constants";
import UserAddressList from "./UserAddressList";
import UserCreateAddress from "./UserCreateAddress";
import UserUpdateAddress from "./UserUpdateAddress";

const UserAddressStyled = styled.div`
  .address-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.lineGray};
    margin-bottom: 20px;
  }
  .address-title {
    color: ${(props) => props.theme.textPrimary};
    font-size: 24px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .address-btn {
    height: 40px;
    padding: 10px;
    background-color: ${(props) => props.theme.primary};
    color: #fff;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
  .address-btn:hover {
    opacity: 0.8;
  }
  .address-main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 10px;
    border-bottom: 1px solid ${(props) => props.theme.line};
  }
  .address-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .address-user {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }
  .address-name,
  .address-text,
  .address-update {
    font-size: 14px;
    color: ${(props) => props.theme.textPrimary};
    font-weight: 500;
  }
  .address-text {
    color: ${(props) => props.theme.textGray};
    font-weight: 400;
  }
  .address-update {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    cursor: pointer;
    color: ${(props) => props.theme.blueBold};
  }
  .address-desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .address-direction {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .address-set {
    padding: 5px 10px;
    border: 1px solid ${(props) => props.theme.line};
    font-size: 14px;
    color: ${(props) => props.theme.text};
    border-radius: 3px;
  }
  .address-set:hover {
    border: 1px solid ${(props) => props.theme.textGray};
    color: ${(props) => props.theme.textGray};
    transition: all 0.3s linear;
  }
  .address-default {
    display: flex;
    justify-content: flex-start;
    padding: 3px 10px;
    border: 1px solid ${(props) => props.theme.red};
    color: ${(props) => props.theme.red};
    font-size: 14px;
    pointer-events: none;
  }
`;

const UserAddress = () => {
  const { modalIsOpen, openModal, closeModal } = useModal();
  return (
    <UserAddressStyled>
      <div className="address-heading">
        <h3 className="address-title">Địa chỉ của tôi</h3>
        <div className="address-btn" onClick={openModal}>
          Thêm địa chỉ
        </div>
        <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <UserCreateAddress closeModal={closeModal}></UserCreateAddress>
        </ModalComponent>
      </div>
      <UserAddressList></UserAddressList>
    </UserAddressStyled>
  );
};

export default UserAddress;

/** @format */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchFood } from "store/food/slice";
import useModal from "hooks/useModal";
import ModalComponent from "components/modal/ModalComponent";
import SearchDetailModal from "./SearchDetailModal";

const SearchInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 550px;
  .search-main {
    display: flex;
    align-items: center;
    position: relative;
  }
  .search-input {
    flex: 1;
    font-weight: 400;
    border-radius: 8px;
    color: ${(props) => props.theme.text};
    background-color: #f3f4f7;
    padding: 12px;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.textPrimary};
    cursor: pointer;
  }
  .search-icon:hover {
    color: ${(props) => props.theme.primary};
    transition: all 0.3s linear;
  }
`;

const SearchInput = ({ className = "" }) => {
  const [values, setValues] = useState("");
  const { modalIsOpen, openModal, closeModal } = useModal();
  // Handle Click Search
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickSearch = () => {
    try {
      dispatch(searchFood({ name: values }));
      navigate(`/food/find-foods?name=${values}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SearchInputStyled className={className}>
      <div className="search-main">
        <input
          type="text"
          className="search-input"
          placeholder="Tìm món ăn..."
          onChange={(e) => {
            setValues(e.target.value);
          }}
        />
        <span className="search-icon" onClick={handleClickSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
      </div>
      <div
        className="flex justify-end text-xs transition-all cursor-pointer text-text hover:text-primary"
        onClick={openModal}
      >
        Tìm kiếm nâng cao
      </div>
      <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <SearchDetailModal closeModal={closeModal}></SearchDetailModal>
      </ModalComponent>
    </SearchInputStyled>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
};

export default SearchInput;

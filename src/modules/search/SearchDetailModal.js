/** @format */

import { Button } from "components/button";
import { Dropdown } from "components/dropdown";
import { Input } from "components/input";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchFood, SEARCH_FOOD_REQUEST } from "store/food/slice";
import styled from "styled-components";
import {
  priceStatus,
  rationStatus,
  reviewStatus,
  typeStatus,
} from "utils/constants";

const SearchDetailModalStyled = styled.div`
  width: 500px;
  overflow-y: hidden;
  .sd-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.line};
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  .sd-heading {
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.textPrimary};
  }
  .sd-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .sd-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .sd-drop {
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;
  }

  .sd-select {
    width: 100%;
    height: 44px;
    border: 1px solid ${(props) => props.theme.line};
    color: ${(props) => props.theme.textPrimary};
  }
  .sd-lists {
    height: 100px;
    overflow-y: scroll;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .sd-option {
    font-size: 14px;
  }

  .sd-lists::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  .sd-lists::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${(props) => props.theme.textLight};
    border-radius: 10px;
  }

  /* Handle */
  .sd-lists::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.blueBold};
  }
`;

const listPrice = [
  {
    id: "1",
    name: "Dưới 100.000đ",
    value: priceStatus.UNDER100K,
  },
  {
    id: "2",
    name: "Từ 100.000đ đến 500.000đ",
    value: priceStatus.F100KT500K,
  },
  {
    id: "3",
    name: "Từ 500.000đ đến 1.000.000đ",
    value: priceStatus.F500KT1000K,
  },
  {
    id: "4",
    name: "Trên 1.000.000đ",
    value: priceStatus.ON1000K,
  },
];

const listType = [
  {
    id: "1",
    name: "Khai vị",
    value: typeStatus.KHAIVI,
  },
  {
    id: "1",
    name: "Đặt tiệc",
    value: typeStatus.DATTIEC,
  },
];

const listRation = [
  {
    id: "1",
    name: "1 người",
    value: rationStatus.PERSON1,
  },
  {
    id: "2",
    name: "2 người",
    value: rationStatus.PERSON2,
  },
  {
    id: "3",
    name: "3 người",
    value: rationStatus.PERSON3,
  },
  {
    id: "4",
    name: "4 người",
    value: rationStatus.PERSON4,
  },
  {
    id: "5",
    name: "5 người",
    value: rationStatus.PERSON5,
  },
];

const listReview = [
  {
    id: "1",
    name: "1 sao",
    value: reviewStatus.VIEW1,
  },
  {
    id: "2",
    name: "2 sao",
    value: reviewStatus.VIEW2,
  },
  {
    id: "3",
    name: "3 sao",
    value: reviewStatus.VIEW3,
  },
  {
    id: "4",
    name: "4 sao",
    value: reviewStatus.VIEW4,
  },
  {
    id: "5",
    name: "5 sao",
    value: reviewStatus.VIEW5,
  },
];

const SearchDetailModal = ({ closeModal }) => {
  const [selectPrice, setSelectPrice] = useState("");
  const [selectRation, setSelectRation] = useState("");
  const [selectType, setSelectType] = useState("");
  const [selectReview, setSelectReview] = useState("");

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitSearch = (values) => {
    if (!isValid) return null;
    const paramSearch = new URLSearchParams([
      ...Object.entries(values),
    ]).toString();
    try {
      dispatch(searchFood(values));
      navigate(`/food/find-foods?${paramSearch}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SearchDetailModalStyled>
      <div className="sd-top">
        <h3 className="sd-heading">Tìm kiếm nâng cao</h3>
        <div className="cursor-pointer text-text" onClick={closeModal}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <form className="sd-form" onSubmit={handleSubmit(handleSubmitSearch)}>
        <div className="sd-name">
          <Input
            type="text"
            name="name"
            control={control}
            placeholder="Tìm món ăn"
          ></Input>
        </div>
        <div className="sd-drop">
          <Dropdown className="sd-dropdown">
            <Dropdown.Select
              placeholder={`${selectPrice}` || "Theo mức giá"}
              className="sd-select"
            ></Dropdown.Select>
            <Dropdown.List className="sd-lists">
              {listPrice.length > 0 &&
                listPrice.map((price) => (
                  <Dropdown.Option
                    key={price.name}
                    className="sd-option"
                    onClick={() => {
                      setSelectPrice(price.name);
                      setValue("prices", price.value);
                    }}
                  >
                    {price.name}
                  </Dropdown.Option>
                ))}
            </Dropdown.List>
          </Dropdown>

          <Dropdown className="sd-dropdown">
            <Dropdown.Select
              placeholder={`${selectType}` || "Theo loại"}
              className="sd-select"
            ></Dropdown.Select>
            <Dropdown.List className="sd-lists">
              {listType.length > 0 &&
                listType.map((type) => (
                  <Dropdown.Option
                    key={type.name}
                    className="sd-option"
                    onClick={() => {
                      setSelectType(type.name);
                      setValue("type", type.value);
                    }}
                  >
                    {type.name}
                  </Dropdown.Option>
                ))}
            </Dropdown.List>
          </Dropdown>

          <Dropdown className="sd-dropdown">
            <Dropdown.Select
              placeholder={`${selectRation}` || "Theo khẩu phần"}
              className="sd-select"
            ></Dropdown.Select>
            <Dropdown.List className="sd-lists">
              {listRation.length > 0 &&
                listRation.map((ration) => (
                  <Dropdown.Option
                    key={ration.name}
                    className="sd-option"
                    onClick={() => {
                      setSelectRation(ration.name);
                      setValue("ration", ration.value);
                    }}
                  >
                    {ration.name}
                  </Dropdown.Option>
                ))}
            </Dropdown.List>
          </Dropdown>

          <Dropdown className="sd-dropdown">
            <Dropdown.Select
              placeholder={`${selectReview}` || "Theo đánh giá"}
              className="sd-select"
            ></Dropdown.Select>
            <Dropdown.List className="sd-lists">
              {listReview.length > 0 &&
                listReview.map((view) => (
                  <Dropdown.Option
                    key={view.name}
                    className="sd-option"
                    onClick={() => {
                      setSelectReview(view.name);
                      setValue("review", view.value);
                    }}
                  >
                    {view.name}
                  </Dropdown.Option>
                ))}
            </Dropdown.List>
          </Dropdown>
        </div>
        <div className="flex justify-end mt-8">
          <Button
            type="submit"
            kind="primary"
            height="44px"
            className="w-full max-w-[120px]"
          >
            Tìm kiếm
          </Button>
        </div>
      </form>
    </SearchDetailModalStyled>
  );
};

export default SearchDetailModal;

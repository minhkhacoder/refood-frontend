/** @format */

import { Checkbox } from "components/checkbox";
import { Field } from "components/field";
import FieldCheckboxes from "components/field/FieldCheckboxes";
import ProductStar from "modules/products/ProductStar";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import PropTypes from "prop-types";
import useChecked from "hooks/useChecked";

const SearchItemStyled = styled.div`
  .widget-title {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    margin-bottom: 20px;
    letter-spacing: 1px;
    cursor: default;
  }
`;

const SearchItem = ({ title, data, star = false }) => {
  const { control } = useForm({
    mode: "onChange",
  });
  const { isChecked, handleChecked } = useChecked();
  return (
    <SearchItemStyled>
      <div className="widget-title">{title}</div>
      <div>
        {data.length > 0 &&
          data.map((item) => (
            <Field key={item.id}>
              {star ? (
                <ProductStar
                  starNumber={item.starNumber}
                  className="cursor-pointer"
                ></ProductStar>
              ) : (
                <FieldCheckboxes>
                  <Checkbox
                    control={control}
                    name={item.name}
                    checked={isChecked}
                    value={item.values}
                    onClick={handleChecked}
                  >
                    {item.title}
                  </Checkbox>
                </FieldCheckboxes>
              )}
            </Field>
          ))}
      </div>
    </SearchItemStyled>
  );
};

SearchItem.propTypes = {
  title: PropTypes.string,
  star: PropTypes.bool,
};

export default SearchItem;

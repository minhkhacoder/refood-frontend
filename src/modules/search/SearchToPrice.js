/** @format */
import { Checkbox } from "components/checkbox";
import { Field } from "components/field";
import FieldCheckboxes from "components/field/FieldCheckboxes";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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

const SearchToPrice = ({ title, data }) => {
  console.log("SearchItem ~ data", data);
  const { control } = useForm({
    mode: "onChange",
  });
  return (
    <SearchItemStyled>
      <div className="widget-title">{title}</div>
      <div>
        {data.length > 0 &&
          data.map((item) => (
            <Field key={item.id}>
              <FieldCheckboxes>
                <Checkbox control={control} name={item.name}>
                  {item.title}
                </Checkbox>
              </FieldCheckboxes>
            </Field>
          ))}
      </div>
    </SearchItemStyled>
  );
};

export default SearchToPrice;

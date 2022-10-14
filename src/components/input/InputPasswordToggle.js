/** @format */

import { IconEyeClose, IconEyeOpen } from "components/icon";
import React, { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";

const InputPasswordToggle = ({ control, name = "" }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <>
      <Input
        type={togglePassword ? "text" : "password"}
        name={name ? `${name}` : "password"}
        placeholder="Nhập mật khẩu"
        control={control}
      >
        {togglePassword ? (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        ) : (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        )}
      </Input>
    </>
  );
};

InputPasswordToggle.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
};

export default InputPasswordToggle;

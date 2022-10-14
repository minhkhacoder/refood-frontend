/** @format */

import { updateUserPassApi } from "api/user";
import { Button } from "components/button";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Swal from "sweetalert2";
import UserHeading from "./UserHeading";

const UserPasswordStyled = styled.div`
  padding: 0 15px;
`;

const UserPassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });

  // Hnadle change password
  const handleUpdatePassword = async (values) => {
    if (!isValid) return;
    try {
      const response = await updateUserPassApi(values);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        reset({
          oldpassword: "",
          newpassword: "",
          repassword: "",
        });
      } else {
        toast.error(response.data.message, {
          position: "bottom-right",
          autoClose: 1000,
        });
      }
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message, {
        position: "bottom-right",
        autoClose: 1000,
      });
      reset({
        oldpassword: "",
        newpassword: "",
        repassword: "",
      });
    }
  };

  return (
    <UserPasswordStyled>
      <UserHeading title="Đổi mật khẩu">
        Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
      </UserHeading>
      <form
        onSubmit={handleSubmit(handleUpdatePassword)}
        autoComplete="off"
        className="user-content"
      >
        <div className="user-item">
          <Label className="user-name" htmlFor="oldpassword">
            Mật khẩu
          </Label>
          <Input
            type="password"
            name="oldpassword"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <div className="user-item">
          <Label className="user-name" htmlFor="newpassword">
            Mật khẩu mới
          </Label>
          <Input
            type="password"
            name="newpassword"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <div className="user-item">
          <Label className="user-name" htmlFor="repassword">
            Nhập lại mật khẩu
          </Label>
          <Input
            type="password"
            name="repassword"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <Link className="flex justify-center text-redPrimary" to={"/#"}>
          Quên mật khẩu?
        </Link>
        <div className="user-btn">
          <Button
            type="submit"
            className="w-[200px]"
            height="44px"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Đổi mật khẩu
          </Button>
        </div>
      </form>
    </UserPasswordStyled>
  );
};

export default React.memo(UserPassword);

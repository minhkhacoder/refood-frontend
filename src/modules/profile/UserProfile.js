/** @format */

import { getUserApi, updateUserInfoApi } from "api/user";
import { Button } from "components/button";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import Swal from "sweetalert2";
import UserHeading from "./UserHeading";

const UserProfileStyled = styled.div`
  padding: 0 15px;
`;

const UserProfile = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
    },
  });

  // Get data user from database
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await getUserApi();
        const { CustomerEmail, CustomerName, CustomerPhone } =
          response?.data?.customer_info;
        if (response.status === 200) {
          reset({
            name: CustomerName,
            email: CustomerEmail || "Cập nhật email",
            phonenumber: CustomerPhone,
          });
        } else {
          console.log("Fetch data user error");
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, [reset]);

  // Handle update info user
  const handleUpdateUser = async (values) => {
    if (!isValid) return;
    try {
      const response = await updateUserInfoApi(values);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
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
    }
  };

  return (
    <UserProfileStyled>
      <UserHeading title="Hồ sơ của tôi">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </UserHeading>
      <form
        onSubmit={handleSubmit(handleUpdateUser)}
        autoComplete="off"
        className="user-content"
      >
        <div className="user-item">
          <Label className="user-name" htmlFor="name">
            Họ và tên
          </Label>
          <Input
            type="text"
            name="name"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <div className="user-item">
          <Label className="user-name" htmlFor="phonenumber">
            Số điện thoại
          </Label>
          <Input
            type="text"
            name="phonenumber"
            control={control}
            className="user-input"
          ></Input>
        </div>
        <div className="user-item">
          <Label className="user-name" htmlFor="email">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            control={control}
            className="user-input"
            placeholder="Cập nhật email"
          ></Input>
        </div>
        <div className="user-btn">
          <Button
            type="submit"
            className="w-[200px]"
            height="44px"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Cập nhật
          </Button>
        </div>
      </form>
    </UserProfileStyled>
  );
};

export default React.memo(UserProfile);

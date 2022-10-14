/** @format */

import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "components/error";
import { useDispatch } from "react-redux";
import { authRegister } from "store/auth/slice";

const schema = yup.object({
  name: yup.string().required("Vui lòng nhập họ và tên"),
  phonenumber: yup.string().required("Vui lòng nhập số điện thoại"),
  password: yup
    .string()
    .min(8, "Mật khẩu ít nhất 8 kí tự")
    .required("Vui lòng nhập mật khẩu"),
  repassword: yup.string().required("Vui lòng nhập lại mật khẩu"),
});

const Register = ({ show }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phonenumber: "",
      password: "",
      repassword: "",
    },
  });

  const dispatch = useDispatch();
  // Check error when submit form register

  // Submit Form Register
  const handleSubmitRegister = (values) => {
    if (!isValid) return;
    try {
      dispatch(authRegister(values));
      reset({});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {show === false && (
        <form onSubmit={handleSubmit(handleSubmitRegister)} autoComplete="off">
          <Field>
            <Label htmlFor="name">Họ và tên</Label>
            <Input
              type="text"
              name="name"
              placeholder="Nhập họ và tên"
              control={control}
            ></Input>
            <ErrorMessage message={errors.name?.message}></ErrorMessage>
          </Field>
          <Field>
            <Label htmlFor="phonenumber">Số điện thoại</Label>
            <Input
              type="text"
              name="phonenumber"
              placeholder="Nhập số điện thoại"
              control={control}
            ></Input>
            <ErrorMessage message={errors.phonenumber?.message}></ErrorMessage>
          </Field>
          <Field>
            <Label htmlFor="password">Mật khẩu</Label>
            <InputPasswordToggle
              name="password"
              control={control}
            ></InputPasswordToggle>
            <ErrorMessage message={errors.password?.message}></ErrorMessage>
          </Field>
          <Field>
            <Label htmlFor="repassword">Xác nhận lại mật khẩu</Label>
            <InputPasswordToggle
              name="repassword"
              control={control}
            ></InputPasswordToggle>
            <ErrorMessage message={errors.repassword?.message}></ErrorMessage>
          </Field>
          <Button
            type="submit"
            kind="secondary"
            height="44px"
            className="w-full mt-10 max-w-[180px] mx-auto uppercase"
            disabled={isSubmitting}
          >
            Đăng ký
          </Button>
        </form>
      )}
    </>
  );
};

export default Register;

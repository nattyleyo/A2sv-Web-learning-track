"use client";
import React, { useState } from "react";
import Image from "next/image";
import imgUrl from "../../public/assets/IcongoogleIcon.svg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
type FormType = {
  email: string;
  password: string;
};
const LoginComp = () => {
  const form = useForm<FormType>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const Router = useRouter();
  const x = useSession();
  console.log(x);
  const [errorLogin, setErrorLogin] = useState(String);
  const onSubmit = async (data: FormType) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(res);
    if (res?.error) {
      setErrorLogin(`* ${res?.error}`);
    } else {
      console.log(res, "login sucessfuly");
      Router.push("/");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="signIn-box min-w-80 w-1/4 flex items-center gap-6 flex-col relative top-20"
    >
      <h1 className="font-Poppins text-4xl w-fit font-extrabold mb-4">
        {`Welcome `} <span className="text-purple-700">Back,</span>
      </h1>
      <p
        className="error w-full flex justify-center items-center text-purple-600 text-lg bg-purple-50 border-solid border-x-purple-400 border-y-purple-50 border-2 p-0.5 rounded-lg"
        style={{
          display: errorLogin == "" ? "none" : "flex",
        }}
      >
        {errorLogin}
      </p>

      <div className="w-full email-box flex gap-1 flex-col">
        <label htmlFor="email" className="text-base font-semibold text-text-3">
          Email Address
        </label>
        <input
          type="email"
          className="email flex px-3 py-4 gap-3 border-bd-1 border-solid border-2 rounded-lg placeholder:text-base text-text-3 focus:border-purple-600 outline-none"
          placeholder="Enter email address"
          {...register("email", {
            required: "* Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "* Invalid email Address",
            },
            validate: {
              notyahoo: (fieldvalue) => {
                return (
                  !fieldvalue.endsWith("yahoo.com") ||
                  "* You can not use Yahoo email"
                );
              },
            },
          })}
        />
        <p
          className="error text-purple-600"
          style={{
            display: errors.email?.message == null ? "none" : "flex",
          }}
        >
          {errors.email?.message}
        </p>
      </div>
      <div className="w-full password-box flex gap-1 flex-col">
        <label
          htmlFor="password"
          className="text-base font-semibold text-text-3"
        >
          Password
        </label>
        <input
          type="password"
          className="password flex px-3 py-4 gap-3 border-bd-1 border-solid border-2 rounded-lg placeholder:text-base text-text-3 focus:border-purple-600 outline-none"
          placeholder="Enter password"
          {...register("password", {
            required: "* Password is required",
            minLength: {
              value: 3,
              message: "* Password must be at least 6 characters long",
            },
          })}
        />
        <p
          className="error text-purple-600"
          style={{
            display: errors.password?.message == null ? "none" : "flex",
          }}
        >
          {errors.password?.message}
        </p>
      </div>

      <button className="flex w-full py-3 px-6 items-center justify-center bg-purple-700 rounded-full text-white">
        Login
      </button>
      <Link href={"/signUp"}>
        <div className="text-base text-text-3 flex gap-1 font-medium">
          Don’t have an account?
          <button className="text-purple-700 text-base font-semibold hover:underline">
            Sign Up
          </button>
        </div>
      </Link>
    </form>
  );
};

export default LoginComp;

"use client";
import React, { useState } from "react";
import imgUrl from "../../../public/assets/IcongoogleIcon.svg";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";

type FormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
};
const SignUpComp = () => {
  const { data: session } = useSession();
  console.log(session, 55555555555555555555555);

  const form = useForm<FormType>();
  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;
  const [errorSignUp, setErrorSignUp] = useState("");
  const router = useRouter();

  const confirmData = watch("password");

  const onSubmit = async (data: FormType) => {
    data.role = "";
    console.log(data);
    const res = await signIn("credentials", {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: "",
      redirect: false,
    });
    console.log(res, 11111111111111111);
    if (res?.error) {
      setErrorSignUp(`* ${res?.error}`);
    } else {
      setErrorSignUp(`* Successfully Registered`);
      router.push("signUp/verification");
      alert(`I got you data as ${res?.ok}`);
    }
  };
  return (
    <>
      <div className="signIn-box min-w-96 w-1/4 flex items-center gap-6 flex-col my-8">
        <div className=" min-w-96 w-1/4 flex items-center gap-6 flex-col">
          <h1 className="font-Poppins text-3xl w-fit font-extrabold">
            Sign Up Today!
          </h1>
          <button
            onClick={() => signIn("google")}
            className="w-full flex justify-center items-center gap-2 py-3 px-4 border-purple-100 border-solid border-2 rounded-md"
          >
            <Image
              src={imgUrl}
              alt={imgUrl}
              width={24}
              height={24}
              className=""
            />
            <div className="text-purple-800 font-semibold">
              Sign Up with Google
            </div>
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-w-96 w-1/4 flex items-center gap-6 flex-col"
          noValidate
        >
          <div className="w-full  flex flex-row gap-2 items-center">
            <div className="w-full flex grow h-0.5 bg-purple-100 rounded-sm"></div>
            <div className="text-nowrap">Or</div>
            <div className="w-full flex grow h-0.5 bg-purple-100 rounded-sm"></div>
          </div>
          <p
            className="error w-full flex justify-center items-center text-purple-600 text-lg bg-purple-50 border-solid border-x-purple-400 border-y-purple-50 border-2 p-0.5 rounded-lg"
            style={{
              display: errorSignUp == "" ? "none" : "flex",
            }}
          >
            {errorSignUp}
          </p>
          <div className="w-full name-box flex gap-1 flex-col">
            <label
              htmlFor="name"
              className="text-base font-semibold text-text-3"
            >
              Full Name
            </label>
            <input
              type="text"
              className="name flex px-3 py-4 gap-3 border-bd-1 border-solid border-2 rounded-lg  placeholder:text-base text-text-3 focus:border-purple-600 outline-none"
              placeholder="Enter your full name"
              {...register("name", { required: "* Full name is required" })}
            />
            <p
              className="error text-purple-600"
              style={{
                display: errors.name?.message == null ? "none" : "flex",
              }}
            >
              {errors.name?.message}
            </p>
          </div>
          <div className="w-full email-box flex gap-1 flex-col">
            <label
              htmlFor="email"
              className="text-base font-semibold text-text-3"
            >
              Email
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
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "* Password must contain be at least one letter and one number",
                },
                minLength: {
                  value: 6,
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
          <div className="w-full confirm-box flex gap-1 flex-col">
            <label
              htmlFor="confirm"
              className="text-base font-semibold text-text-3"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="confirm flex px-3 py-4 gap-3 border-bd-1 border-solid border-2 rounded-lg placeholder:text-base text-text-3 focus:border-purple-600 outline-none"
              placeholder="Enter password"
              {...register("confirmPassword", {
                required: "* Password is required",
                validate: {
                  passConfirm: (fieldvalue) => {
                    return (
                      fieldvalue === confirmData || "* Password do not matche"
                    );
                  },
                },
              })}
            />
            <p
              className="error text-purple-600"
              style={{
                display:
                  errors.confirmPassword?.message == null ? "none" : "flex",
              }}
            >
              {errors.confirmPassword?.message}
            </p>
          </div>
          <button className="flex w-full py-3 px-6 items-center justify-center bg-purple-700 rounded-full text-white">
            Continue
          </button>

          <Link href={"/login"}>
            <div className="text-base text-text-3 flex gap-1 font-medium">
              Already have an account?
              <button className="text-purple-700 text-base font-semibold hover:underline">
                Login
              </button>
            </div>
          </Link>
          <div className="text-gray-400 font-normal">
            `
            {`By clicking 'Continue', you acknowledge that you have read and
        accepted our `}
            <button className="text-purple-600 text-base font-semibold hover:underline">
              {`Terms of Service `}
            </button>
            {` and `}
            <button className="text-purple-600 text-base font-semibold hover:underline">
              Privacy Policy
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpComp;

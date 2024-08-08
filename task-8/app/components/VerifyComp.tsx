"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { VerifyEmail } from "../api/fetchData";
import { useRouter } from "next/navigation";

type verifyType = {
  email: string;
  OTP: string;
  otp: string[];
};

const VerificationForm = () => {
  const { handleSubmit, control, watch } = useForm<verifyType>({
    defaultValues: {
      otp: ["", "", "", ""],
    },
  });
  const [errorVerify, setErrorVerify] = useState("");
  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const otpValues = watch("otp");
  const isButtonDisabled = otpValues.some((digit) => digit === "");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    onChange: (...event: any[]) => void
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      onChange(value);

      // Focus the next input field if a digit is entered
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const onSubmit = async (data: verifyType) => {
    try {
      const res = await VerifyEmail(data);
      if (!res.success) {
        setErrorVerify("Invalid OTP");
      } else {
        setErrorVerify("Email Verified Successfully");
        router.push("/");
      }
    } catch (error) {
      setErrorVerify("An unexpected error occurred, please try again later.");
    }
  };
  const resend = () => {
    setTimeLeft(60);
    setErrorVerify("new OTP send to your email");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="signIn-box min-w-80 w-1/4 flex items-center gap-6 flex-col my-8"
    >
      <h1 className="font-Poppins text-3xl w-fit font-extrabold">
        Verify Email
      </h1>
      <p
        className="error w-full flex justify-center items-center text-purple-600 text-lg bg-purple-50 border-solid border-x-purple-400 border-y-purple-50 border-2 p-0.5 rounded-lg"
        style={{
          display: errorVerify === "" ? "none" : "flex",
        }}
      >
        {errorVerify}
      </p>
      <div className="text-gray-400 text-center font-normal">
        {`We've sent a verification code to the email address you provided, please enter the code here.`}
      </div>

      <div className="w-full name-box flex gap-4 justify-center">
        {otpValues.map((_, index) => (
          <Controller
            key={index}
            name={`otp.${index}`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                type="text"
                id={`otp-input-${index}`}
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e, index, onChange)}
                placeholder="0"
                className="name w-full flex grow text-center px-6 py-6 gap-3 border-bd-1 border-solid border-2 rounded-lg  text-3x1  placeholder:text-3x1 text-text-3 focus:border-purple-600 outline-none"
              />
            )}
          />
        ))}
      </div>

      <button
        type="submit"
        disabled={isButtonDisabled}
        className={`flex w-full py-3 px-6 items-center justify-center rounded-full text-white ${
          isButtonDisabled
            ? "bg-purple-400 cursor-not-allowed"
            : "bg-purple-700"
        }`}
      >
        Verify
      </button>

      <div className="text-base text-text-3 text-nowrap flex gap-1 font-medium">
        You can request to
        <Link href="#">
          <button
            onClick={handleSubmit(resend)}
            disabled={timeLeft !== 0}
            className={`text-base font-semibold ${
              timeLeft !== 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-purple-700 hover:underline"
            }`}
          >
            Resend code
          </button>
        </Link>
        in
        <span className="text-purple-700 text-base font-semibold">
          {timeLeft} sec
        </span>
      </div>
    </form>
  );
};

export default VerificationForm;

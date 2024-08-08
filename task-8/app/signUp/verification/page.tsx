import React from "react";
import Link from "next/link";
import VerifyComp from "@/app/components/VerifyComp";

interface OTPType {
  email: string;
  OTP: string;
}
const verification = () => {
  return <VerifyComp />;
};

export default verification;

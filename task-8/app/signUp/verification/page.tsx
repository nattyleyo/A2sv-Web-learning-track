import React from "react";
import VerifyComp from "@/app/components/VerifyComp";

interface OTPType {
  email: string;
  OTP: string;
}
const verification = () => {
  return <VerifyComp />;
};

export default verification;

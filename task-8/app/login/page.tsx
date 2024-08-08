import React from "react";
import Image from "next/image";
import imgUrl from "../../public/assets/IcongoogleIcon.svg";
import Link from "next/link";
import LoginComp from "../components/LoginComp";
import NavBar from "../components/Nav/NavBar";
const Login = () => {
  return (
    <>
      <NavBar />
      <LoginComp />
    </>
  );
};

export default Login;

"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const NavBar = () => {
  const { data: session } = useSession();
  return (
    <header className="bg-white opacity-100 shadow-md w-full h-20 flex fixed backdrop:blur-3xl z-50 top-0 left-0 gap-4 px-8 py-6 font-medium">
      <div className="flex grow justify-start text-2xl font-bold min-w-14 w-1/4 text-purple-600">
        LOGO.
      </div>
      <nav className="w-1/2 flex grow gap-7 justify-center items-center">
        <Link
          href="/"
          className=" hover:font-semibold hover:cursor-pointer hover:text-purple-700"
        >
          Home
        </Link>
        <Link
          href="/"
          className=" hover:font-semibold hover:cursor-pointer hover:text-purple-700"
        >
          Jobs
        </Link>
        <Link
          href="/"
          className=" hover:font-semibold hover:cursor-pointer hover:text-purple-700"
        >
          Voluntering
        </Link>
        <Link
          href="/bookmark"
          className=" hover:font-semibold hover:cursor-pointer hover:text-purple-700"
        >
          <div>Bookmark</div>
        </Link>
      </nav>
      <div className="flex gap-4 w-1/4">
        <button
          className={`${
            session ? "opacity-0 hidden" : "opacity-100"
          } flex items-center justify-center p-4 text-base text-purple-600 border-2 border-solid border-purple-600 bg-white rounded-lg`}
        >
          <Link href="/login">Login</Link>
        </button>
        <button
          className={`${
            session ? "opacity-0 hidden" : "opacity-100"
          } flex  items-center justify-center p-4 text-base text-white border-0 bg-purple-700 rounded-lg `}
        >
          <Link href="/signUp">SignUp</Link>
        </button>
        <div
          className={`${
            !session ? "opacity-0 hidden" : "opacity-100"
          } flex  text-sm items-center justify-center gap-2`}
        >
          <Image
            src={"/assets/user.png"}
            alt=""
            width={32}
            height={32}
            className="flex rounded-full border-2 border-solid border-purple-700"
          />
          {session?.user?.name}
        </div>
        <button
          onClick={() => {
            signOut({ redirect: true, callbackUrl: "/login" });
          }}
          className={`${
            !session ? "opacity-0 hidden" : "opacity-100"
          } flex items-center justify-center p-4 text-base text-purple-600 border-2 border-solid border-purple-600 bg-white rounded-lg`}
        >
          LogOut
        </button>
      </div>
    </header>
  );
};

export default NavBar;

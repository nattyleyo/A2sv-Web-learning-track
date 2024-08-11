"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="bg-white opacity-100 shadow-md w-full h-20 flex fixed backdrop:blur-3xl z-50 top-0 left-0 gap-4 px-8 py-6 font-medium">
      <div className="flex grow justify-start text-2xl font-bold min-w-14 w-1/4 text-purple-600">
        LOGO.
      </div>
      <nav className="w-1/2 flex grow gap-7 justify-center items-center">
        <button
          onClick={() => {
            router.push("/");
          }}
          className=" hover:font-semibold rounded-sm hover:cursor-pointer hover:text-purple-700 hover:border-b-4 hover:border-purple-700"
        >
          Home
        </button>
        <button
          onClick={() => {
            router.push("/");
          }}
          className=" hover:font-semibold rounded-sm  hover:cursor-pointer hover:text-purple-700 hover:border-b-4 hover:border-purple-700"
        >
          Jobs
        </button>
        <button
          onClick={() => {
            router.push("/");
          }}
          className=" hover:font- rounded-sm  hover:cursor-pointer hover:text-purple-700 hover:border-b-4 hover:border-purple-700"
        >
          Voluntering
        </button>
        <button
          onClick={() => {
            router.push("/bookmark");
          }}
          className=" hover:font-semibold rounded-sm  hover:cursor-pointer hover:text-purple-700 hover:border-b-4 hover:border-purple-700 "
        >
          <div>Bookmark</div>
        </button>
      </nav>
      <div className="flex gap-4 w-1/4">
        {!session && (
          <button
            className={`flex items-center justify-center p-4 text-base text-purple-600 border-2 border-solid border-purple-600 bg-white rounded-lg `}
          >
            <Link href="/login">Login</Link>
          </button>
        )}
        {!session && (
          <button
            className={`flex  items-center justify-center p-4 text-base text-white border-0 bg-purple-700 rounded-lg `}
          >
            <Link href="/signUp">SignUp</Link>
          </button>
        )}
        {session && (
          <>
            <div className={`flex text-sm items-center justify-center gap-2`}>
              <Image
                src={"/assets/user.png"}
                alt=""
                width={32}
                height={32}
                className="flex rounded-full border-2 border-solid border-purple-700"
              />
              {session?.user?.name.split(" ")[0]}
            </div>

            <button
              onClick={() => {
                signOut({ redirect: true, callbackUrl: "/login" });
              }}
              className={`flex items-center justify-center p-4 text-base text-purple-600 border-2 border-solid border-purple-600 bg-white rounded-lg`}
            >
              LogOut
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;

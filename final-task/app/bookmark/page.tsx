"use client";
import React, { useEffect, useState } from "react";
import Bookmarks from "../components/Jobs/Bookmarks";
import NavBar from "../components/Nav/NavBar";
const page = () => {
  return (
    <>
      <NavBar />
      <Bookmarks />;
    </>
  );
};

export default page;

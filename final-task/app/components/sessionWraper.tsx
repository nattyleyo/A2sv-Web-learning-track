"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface sessionType {
  children: ReactNode;
}

const SessionWrapper: React.FC<sessionType> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;

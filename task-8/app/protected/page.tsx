"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Adjust import if using a different router version
import React, { useEffect } from "react";

const Protected = () => {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading state while checking session
  }

  return <div>Protected page {data?.user?.name}</div>;
};

export default Protected;

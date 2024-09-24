"use client";

import { useRouter } from "next/navigation";
import React from "react";

const AppBaseRoutes = () => {
  const router = useRouter();
  console.log(router, "router");

  return <div>AppBaseRoutes</div>;
};

export default AppBaseRoutes;

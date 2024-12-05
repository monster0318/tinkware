"use client";
import Home5Partnerships from "@/components/Partnerships/Home5Partnerships";
import MainLayout from "@/components/layout/MainLayout";
import Home5Service from "@/components/service/Home5Service";
import useWow from "@/hooks/useWow";
import React from "react";

const Servicepage4 = () => {
  useWow();
  return (
    <MainLayout>
      <Home5Service />
      <Home5Partnerships />
    </MainLayout>
  );
};

export default Servicepage4;

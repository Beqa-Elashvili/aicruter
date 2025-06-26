"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainWrapper({ children }: { children: any }) {
  return (
    <div className="bg-secondary min-h-screen h-full w-full">
      <Header />
      <div className="py-12  md:py-20">{children}</div>
      <Footer />
    </div>
  );
}

export default MainWrapper;

'use client'

import Lottie from "lottie-react";

import animationData from "@public/lottie/error-404.json";

export default function Custom404() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop={true}
      />
    </div>
  );
}
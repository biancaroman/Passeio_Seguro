'use client'

import animationData from "@public/lottie/error-404.json";
import Lottie from "lottie-react";
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
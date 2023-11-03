'use client'

import Lottie from "lottie-react";

import animationData from "@public/lottie/error-404.json";

export default function Custom404() {
  return (
    <section className= "w-full h-screen flex justify-center items-center">
      <div className="w-full px-2 md:w-1/2 md:h-3/5">
        <Lottie
          animationData={animationData}
          loop={true}
        />
        <p className="text-center font-medium text-2xl md:text-3xl lg:text-6xl">Ops!! </p>
        <p className="text-center font-normal text-sm md:text-lg lg:text-3xl"> Não conseguimos encontrar a página que você está procurando!!</p>
      </div>
    </section>
  );
}
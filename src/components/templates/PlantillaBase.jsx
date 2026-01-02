import { useState, useEffect } from "react";
import { Header } from "../organismos/Header";

import { BtnDesplegable } from "../moleculas/BtnDesplegable";

export const CategoriasTemplate = () => {
  const [state, setState] = useState(false); //estado del selector

  return (
    <div className=" min-h-screen p-3.5 w-full text-text grid grid-rows-[100px_100px_50px_auto]">
      {/* HEADER */}
      <header className=" flex items-center">
        <Header state={state} setState={setState} />
      </header>

      <section className=" bg-bg2 w-full flex justify-center  ">
        <div className="relative flex justify-between flex-wrap">
          <BtnDesplegable />
        </div>
      </section>
      <section className=" bg-bg3 w-full flex justify-center  "></section>
      <section className=" bg-bg4 w-full flex justify-center  "></section>
    </div>
  );
};

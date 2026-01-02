import { useState, useEffect } from "react";
import { Header } from "../organismos/Header";
import { BtnDesplegable } from "../moleculas/BtnDesplegable";
import { useOperaciones } from "../../store/OperacionesStore";
import { ListaMenuDesplegable } from "../moleculas/ListaMenuDesplegable";
import { DataDesplegableTipo } from "../../utils/dataEstatica";

export const CategoriasTemplate = () => {
  const [state, setState] = useState(false); //estado del selector
  const { tituloBtnDes, colorCategoria, bgCategoria, setTipo } =
    useOperaciones(); //estado global

  const cambiarTipo = (tipo) => {
    setTipo(tipo);
  };

  return (
    <div className=" min-h-screen p-3.5 w-full text-text grid grid-rows-[100px_100px_50px_auto]">
      {/* HEADER */}
      <header className=" flex items-center">
        <Header state={state} setState={setState} />
      </header>

      <section className=" bg-bg2 w-full flex items-center px-2.5 ">
        <div className="relative flex justify-between flex-wrap ">
          <BtnDesplegable
            bgcolor={bgCategoria}
            text={tituloBtnDes}
            textcolor={colorCategoria}
          />
          <ListaMenuDesplegable
            data={DataDesplegableTipo}
            top="top-[112%]"
            funcion={(tipo) => cambiarTipo(tipo)}
          />
        </div>
      </section>
      <section className=" bg-bg3 w-full flex justify-center  "></section>
      <section className=" bg-bg4 w-full flex justify-center  "></section>
    </div>
  );
};

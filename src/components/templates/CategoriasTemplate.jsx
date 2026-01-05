import { useState, useEffect } from "react";
import { Header } from "../organismos/Header";
import { BtnDesplegable } from "../moleculas/BtnDesplegable";
import { useOperaciones } from "../../store/OperacionesStore";
import { ListaMenuDesplegable } from "../moleculas/ListaMenuDesplegable";
import { DataDesplegableTipo } from "../../utils/dataEstatica";
import BtnFiltro from "../moleculas/BtnFiltro";
import { Icon } from "../atomos/Icons";

export const CategoriasTemplate = () => {
  const [state, setState] = useState(false); //estado del selector
  const [stateTipo, setStateTipo] = useState(false); //estado del desplegable tipo
  const { tituloBtnDes, colorCategoria, bgCategoria, setTipo } =
    useOperaciones(); //estado global

  //funcion para cambiar el tipo de operacion
  const cambiarTipo = (tipo) => {
    setTipo(tipo);
    setStateTipo(false);
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
            funcion={() => setStateTipo(!stateTipo)}
          />

          {stateTipo && (
            <ListaMenuDesplegable
              data={DataDesplegableTipo}
              top="top-[112%]"
              funcion={(tipo) => cambiarTipo(tipo)}
            />
          )}
        </div>
      </section>
      <section className=" bg-bg3 w-full flex items-center px-2.5 justify-end">
        <div className="flex flex-wrap ">
          <BtnFiltro
            bgcolor={bgCategoria}
            textcolor={colorCategoria}
            icon={<Icon name="iconoAgregar" size={20} />}
          />
        </div>
      </section>
      <section className=" bg-bg4 w-full flex justify-center  "></section>
    </div>
  );
};

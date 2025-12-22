import { useState } from "react";
import { Header } from "../organismos/Header";
import { Selector } from "../organismos/Selector";
import { ListaPaises } from "../organismos/ListaPaises";

export const ConfiguracionTemplate = () => {
  const [select, setSelect] = useState([]); //lista de paises
  const [state, setState] = useState(false); //estado del selector
  const [stateListaPaises, setStateListaPaises] = useState(false); //estado de la lista de paises

  // Datos para el selector de paises
  const moneda = select.symbol;
  const pais = select.countryName;
  const paisSeleccionado = `${pais} (${moneda})`;

  return (
    <div className=" min-h-screen p-3.5 w-full text-text grid grid-rows-[100px_100px_60px_auto]">
      {/* HEADER */}
      <header className="bg-amber-300 flex items-center">
        <Header state={state} setState={setState} />
      </header>

      <section className="bg-bg2">AJUSTES</section>

      <section className="bg-bg3 flex items-center text-start gap-5 relative w-full justify-center">
        <span>Moneda:</span>
        <Selector
          state={stateListaPaises}
          color="bg-selector"
          texto1={paisSeleccionado}
          funcion={() => setStateListaPaises(!stateListaPaises)}
        />
        {stateListaPaises && (
          <ListaPaises
            setState={() => setStateListaPaises(!stateListaPaises)}
            setSelect={setSelect}
          />
        )}
      </section>

      <section className="bg-bg4"></section>
    </div>
  );
};

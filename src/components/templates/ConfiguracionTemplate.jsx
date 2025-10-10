import { useState } from "react";
import { Header } from "../organismos/Header";
import { Selector } from "../organismos/Selector";
import { ListaPaises } from "../organismos/ListaPaises";

export const ConfiguracionTemplate = () => {
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  return (
    <div className=" min-h-screen p-3.5 w-full text-text grid grid-rows-[100px_100px_100px_auto]">
      <header className="bg-amber-300 flex items-center">
        <Header state={state} setState={setState} />
      </header>
      <section className="bg-bg2">AJUSTES</section>
      <section className="bg-bg3 flex items-center text-start gap-5 relative w-full justify-center">
        <span>Moneda:</span>
        <Selector state={stateListaPaises} />
        <ListaPaises />
      </section>
      <section className="bg-bg4"></section>
    </div>
  );
};

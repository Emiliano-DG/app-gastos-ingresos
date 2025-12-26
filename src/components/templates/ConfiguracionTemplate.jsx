import { useState } from "react";
import { Header } from "../organismos/Header";
import { Selector } from "../organismos/Selector";
import { ListaPaises } from "../organismos/ListaPaises";
import { usuarioStore } from "../../store/usuarioStore";
import ListaGenerica from "../moleculas/ListaGenerica";

export const ConfiguracionTemplate = () => {
  const [select, setSelect] = useState([]); //lista de paises
  const [state, setState] = useState(false); //estado del selector
  const [stateListaPaises, setStateListaPaises] = useState(false); //estado de la lista de paises
  const [stateListaTemas, setStateListaTemas] = useState(false);
  const [selectTema, setSelectTema] = useState(""); //tema seleccionado
  const { datausuario } = usuarioStore(); // obtener los datos del usuario

  // Datos para el selector de paises
  const moneda = select.symbol ? select.symbol : datausuario.moneda;
  const pais = select.countryName ? select.countryName : datausuario.pais;
  const paisSeleccionado = `${pais} (${moneda})`;

  //Tema seleccionado
  const iconodb = datausuario.tema === "1" ? "🌑" : "☀️";
  const temadb = datausuario.tema === "1" ? "dark" : "light";
  const temaInicial = selectTema.tema ? selectTema.tema : temadb;
  const iconoInicial = selectTema.icono ? selectTema.icono : iconodb;
  const temaSeleccionado = iconoInicial + " " + temaInicial;

  return (
    <div className=" min-h-screen p-3.5 w-full text-text grid grid-rows-[100px_100px_60px_auto]">
      {/* HEADER */}
      <header className="bg-amber-300 flex items-center">
        <Header state={state} setState={setState} />
      </header>

      <section className="bg-bg2">AJUSTES</section>

      <section className="bg-bg3 relative w-full flex justify-center ">
        <div className="flex flex-col gap-7 item-center">
          <div className="flex flex-row gap-4 items-center">
            <span>Moneda:</span>
            <Selector
              texto1={paisSeleccionado}
              funcion={() => setStateListaPaises(!stateListaPaises)}
            />
          </div>

          <div className="flex flex-row gap-4 items-center">
            <span>Tema</span>
            <Selector
              texto1={temaSeleccionado}
              funcion={() => setStateListaTemas(!stateListaTemas)}
            />
            {/* //TODO: ver por que si saco esta lista me aparece arriba */}
            {/* lista de temas */}
            {stateListaTemas && <ListaGenerica />}
          </div>
        </div>
        {/* Lista de paises */}
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

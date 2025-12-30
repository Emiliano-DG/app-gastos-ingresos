import { useState, useEffect } from "react";
import { Header } from "../organismos/Header";
import { Selector } from "../organismos/Selector";
import { ListaPaises } from "../organismos/ListaPaises";
import { usuarioStore } from "../../store/usuarioStore";
import ListaGenerica from "../moleculas/ListaGenerica";
import { TemasData } from "../../utils/dataEstatica";
import { BtnSave } from "../moleculas/BtnSave";
import { Icon } from "../atomos/Icons";

export const ConfiguracionTemplate = () => {
  const [select, setSelect] = useState([]); //lista de paises
  const [state, setState] = useState(false); //estado del selector
  const [stateListaPaises, setStateListaPaises] = useState(false); //estado de la lista de paises
  const [stateListaTemas, setStateListaTemas] = useState(false);

  const [temaActual, setTemaActual] = useState(null);

  const { datausuario, editartemamonedaUser } = usuarioStore(); // obtener los datos del usuario

  // Datos para el selector de paises
  const moneda = select.symbol ? select.symbol : datausuario.moneda;
  const pais = select.countryName ? select.countryName : datausuario.pais;
  const paisSeleccionado = `${pais} (${moneda})`;

  //Tema seleccionado

  const temaSeleccionado = temaActual
    ? `${temaActual.icono} ${temaActual.descripcion}`
    : "";

  //Funcion editar
  const editar = async () => {
    if (!temaActual) return;

    const themeElegido = temaActual.descripcion === "dark" ? "1" : "0";
    const p = {
      tema: themeElegido,
      moneda: moneda,
      pais: pais,
      id: datausuario.id,
    };
    await editartemamonedaUser(p);
  };

  //Trae el tema de la BD
  useEffect(() => {
    if (datausuario) {
      setTemaActual({
        descripcion: datausuario.tema === "1" ? "dark" : "light",
        icono: datausuario.tema === "1" ? "🌑" : "☀️",
      });
    }
  }, [datausuario]);

  return (
    <div className=" min-h-screen p-3.5 w-full text-text grid grid-rows-[80px_auto]">
      {/* HEADER */}
      <header className=" flex items-center">
        <Header state={state} setState={setState} />
      </header>

      <section className=" relative w-full flex justify-center self-center ">
        <div className="flex flex-col gap-7 item-center">
          <h1 className="justify-center flex items-center font-bold text-4xl">
            AJUSTES
          </h1>
          <div className=" grid grid-cols-[80px_1fr] items-center">
            <span>Moneda:</span>
            <Selector
              texto1={paisSeleccionado}
              funcion={() => setStateListaPaises(!stateListaPaises)}
            />
          </div>

          <div className="grid grid-cols-[80px_1fr] gap-4 items-center relative">
            <span>Tema:</span>
            <Selector
              texto1={temaSeleccionado}
              funcion={() => setStateListaTemas(!stateListaTemas)}
            />
          </div>
          <BtnSave
            titulo="Guardar"
            color="bg-selector"
            icon={<Icon name="iconoGuardar" size={20} />}
            action={editar}
          />
        </div>

        {/* Lista de paises */}
        {/* //TODO:VER COMO ACOMODAR EL CODGIDO DE OTRA FORMA */}
        {stateListaPaises && (
          <ListaPaises
            setState={() => setStateListaPaises(!stateListaPaises)}
            setSelect={setSelect}
          />
        )}
        {/* lista de temas */}
        {stateListaTemas && (
          <div className="absolute mt-10 top-[18%] w-full flex justify-center">
            <ListaGenerica
              data={TemasData}
              setState={() => setStateListaTemas(!stateListaTemas)}
              setSelectTema={setTemaActual}
            />
          </div>
        )}
      </section>
    </div>
  );
};

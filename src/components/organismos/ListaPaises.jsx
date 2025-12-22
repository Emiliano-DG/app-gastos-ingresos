import { Icon } from "../atomos/Icons";
import { InputBuscadorListas } from "../moleculas/InputBuscadorListas";
import iso from "iso-country-currency";
import { ConvertirCapitalize } from "../../utils/Conversiones";
import { useState } from "react";

export const ListaPaises = ({ setSelect, setState }) => {
  const isocodigos = iso.getAllISOCodes();
  const [dataResult, setDataResult] = useState([]);

  const seleccionar = (item) => {
    setSelect(item);
    setState(false);
  };

  const buscar = (e) => {
    let filtrado = isocodigos.filter((item) => {
      return item.countryName == ConvertirCapitalize(e.target.value);
    });
    setDataResult(filtrado);
  };
  return (
    <div className="mt-10 absolute top-[30%] w-full flex flex-col bg-bgtotal rounded-[10px] border-[3px] border-[#3a3a3a] p-2.5 gap-2.5 text-text transition duration-300">
      <header className="flex items-center justify-between bg-inherit">
        <span>Busca tu pais</span>
        <span onClick={setState} className="cursor-pointer ">
          {<Icon size={23} name="iconoCerrar" />}
        </span>
      </header>
      <InputBuscadorListas placeholder="Buscar.." onChange={buscar} />
      {dataResult.length > 0 &&
        dataResult.map((item, index) => {
          return (
            <div
              key={index}
              className="flex  gap-2.5 p-2.5 rounded-2xl hover:bg-bg4 cursor-pointer transition duration-300  "
              onClick={() => seleccionar(item)}
            >
              <span>{item.countryName}</span>
              <span>{item.symbol}</span>
            </div>
          );
        })}
    </div>
  );
};

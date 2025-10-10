import { Icon } from "../atomos/Icons";
import { InputBuscadorListas } from "../moleculas/InputBuscadorListas";
import iso from "iso-country-currency";
import { ConvertirCapitalize } from "../../utils/Conversiones";
import { useState } from "react";

export const ListaPaises = ({ setSelect, setState }) => {
  const isocodigos = iso.getAllISOCodes();
  const [dataResult, setDataResult] = useState([]);

  const buscar = (e) => {
    let filtrado = isocodigos.filter((item) => {
      return item.countryName == ConvertirCapitalize(e.target.value);
    });
    setDataResult(filtrado);
  };
  return (
    <>
      <header className="flex">
        <span>Busca tu pais</span>
        <span onClick={setState}>{<Icon name="iconoCerrar" />}</span>
      </header>
      <InputBuscadorListas placeholder="Buscar.." onChange={buscar} />
    </>
  );
};

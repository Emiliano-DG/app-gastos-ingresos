import { Icon } from "../atomos/Icons";

const ListaGenerica = ({ data, setState, setSelectTema }) => {
  const seleccionar = (item) => {
    setState(false);
    setSelectTema(item);
  };

  return (
    <div className="flex flex-col bg-bgtotal text-text  w-full md:w-[400px] p-2.5 rounded-[10px] border-[3px] border-[#3a3a3a]  relative  ">
      <section>
        <span onClick={setState} className="cursor-pointer ">
          <Icon size={23} name="iconoCerrar" />
        </span>
      </section>
      <section>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-2.5 p-2.5 rounded-2xl hover:bg-bg4 cursor-pointer transition duration-300 "
              onClick={() => seleccionar(item)}
            >
              <span>{item.icono}</span>
              <span>{item.descripcion}</span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ListaGenerica;

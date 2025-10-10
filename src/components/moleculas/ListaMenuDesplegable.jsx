import { ItemsDesplegables } from "./ItemsDesplegables";

export const ListaMenuDesplegable = ({ data, top, funcion }) => {
  return (
    <div
      className={`p-2.5 flex flex-col absolute bg-bg3 rounded-3xl ${top} shadow-gray`}
    >
      {data.map((item, index) => {
        return (
          <ItemsDesplegables
            key={index}
            item={item}
            funcion={() => funcion(item.tipo)}
          />
        );
      })}
    </div>
  );
};

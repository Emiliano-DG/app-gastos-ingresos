import Colorcontent from "../atomos/Colorcontent";

export const ItemsDesplegables = ({ item, funcion }) => {
  return (
    <div
      onClick={funcion}
      className="cursor-pointer p-2 rounded-[20px] flex items-center gap-2.5 hover:bg-bg4 h-"
    >
      <span>{item.icono}</span>
      <Colorcontent alto="h-3" ancho="w-3" bgcolor={item.color} />
      <span className="whitespace-nowrap">{item.text}</span>
    </div>
  );
};

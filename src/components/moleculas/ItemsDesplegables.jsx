export const ItemsDesplegables = ({ item, funcion }) => {
  return (
    <div
      onClick={funcion}
      className="cursor-pointer p-2 rounded-[20px] flex items-center gap-2.5 hover:bg-bg4"
    >
      <span>{item.icono}</span>
      <span>{item.text}</span>
    </div>
  );
};

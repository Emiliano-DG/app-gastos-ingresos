import { Icon } from "../atomos/Icons";

//TODO: ver si esta es la forma dinamica
const hoverColors = {
  selector: "hover:bg-selector",
};

export const Selector = ({
  borderColor = "border-selector",
  funcion,
  texto1,
  texto2,
  color = "selector",
}) => {
  return (
    <div
      onClick={funcion}
      className={`flex justify-between items-center  cursor-pointer border-2 border-solid ${borderColor} rounded-[10px] p-2.5 gap-2.5 transition duration-300 font-semibold ${hoverColors[color]} text-text`}
    >
      <div>
        <span>{texto1}</span>
        <span>{texto2}</span>
      </div>
      <span>{<Icon name="flechaAbajo" />}</span>
    </div>
  );
};

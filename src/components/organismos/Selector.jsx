import { Icon } from "../atomos/Icons";

export const Selector = ({
  borderColor = "border-selector",
  state,
  funcion,
  texto1,
  texto2,
}) => {
  return (
    <div
      onClick={funcion}
      className={`flex justify-between items-center  cursor-pointer border-2 border-solid ${borderColor} rounded-[10px] p-2.5 gap-2.5 transition duration-300 font-semibold hover:bg-selector text-black`}
    >
      <div>
        <span>{texto1}</span>
        <span>{texto2}</span>
      </div>
      <span>{<Icon name="flechaAbajo" />}</span>
    </div>
  );
};

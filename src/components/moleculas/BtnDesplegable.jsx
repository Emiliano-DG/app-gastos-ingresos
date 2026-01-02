import { Icon } from "../atomos/Icons";

export const BtnDesplegable = ({ text, bgcolor, textcolor, funcion }) => {
  return (
    <div
      className={`flex ${bgcolor} ${textcolor}  font-weight-bold px-9 py-4 rounded-[50px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg relative hover:bg-red-400`}
      onClick={funcion}
    >
      <span className="flex items-center justify-center">
        <Icon name="flechaAbajo" />
        <h6>{text}</h6>
      </span>
    </div>
  );
};

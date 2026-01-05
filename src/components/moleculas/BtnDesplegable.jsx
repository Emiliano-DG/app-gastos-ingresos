import { Icon } from "../atomos/Icons";

export const BtnDesplegable = ({ text, bgcolor, textcolor, funcion }) => {
  return (
    <div
      className={`flex ${bgcolor} ${textcolor}  font-weight-bold px-7 py-2 rounded-[50px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg relative`}
      onClick={funcion}
    >
      <span className="flex items-center justify-center">
        <Icon name="flechaAbajo" />
        <h6>{text}</h6>
      </span>
    </div>
  );
};

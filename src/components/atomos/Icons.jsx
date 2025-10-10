import { FcGoogle } from "react-icons/fc";
import { RiArrowRightLine } from "react-icons/ri";
import { RiVipCrownFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";

const icons = {
  inicio: FcGoogle,
  flecha: RiArrowRightLine,
  corona: RiVipCrownFill,
  flechaAbajo: IoIosArrowDown,
  iconoCerrar: RiCloseLine,
};

export const Icon = ({ name, size = 15, className = "" }) => {
  const SelectedIcon = icons[name];
  if (!SelectedIcon) return null; // si no existe, no renderiza nada
  return <SelectedIcon size={size} className={className} />;
};

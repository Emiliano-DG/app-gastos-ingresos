import { FcGoogle } from "react-icons/fc";
import { RiArrowRightLine } from "react-icons/ri";

const icons = {
  inicio: FcGoogle,
  flecha: RiArrowRightLine,
};

export const Icon = ({ name, size = 15, className = "" }) => {
  const SelectedIcon = icons[name];
  if (!SelectedIcon) return null; // si no existe, no renderiza nada
  return <SelectedIcon size={size} className={className} />;
};

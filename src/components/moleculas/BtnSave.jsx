export const BtnSave = ({
  titulo,
  action,
  icon,
  color = "bg-Secundario",
  type = "button",
}) => {
  return (
    //TODO: mejorar estilos del boton en una constante
    <button
      className={`${color}  flex justify-center items-center gap-2.5 p-1.5 font-extrabold text-lg border-2 rounded-md shadow-[0.1em_0.1em_#000]  cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[0.1em_0.1em_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0.1em_0.1em_#000] transition-all duration-150 ease-in-out text-black w-full self-end`}
      onClick={type === "button" ? action : undefined}
      type={type}
    >
      {icon && icon}
      <span>{titulo}</span>
    </button>
  );
};

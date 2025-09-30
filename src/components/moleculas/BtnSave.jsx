export const BtnSave = ({
  titulo,
  action,
  icon: Icon,
  color = "bg-Secundario",
}) => {
  return (
    <button
      className={`${color}  flex justify-center items-center gap-2.5 p-1.5 font-extrabold text-lg border-2 rounded-md shadow-[0.1em_0.1em_#000]  cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[0.1em_0.1em_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0.1em_0.1em_#000] transition-all duration-150 ease-in-out text-black w-full self-end`}
      onClick={action}
    >
      {Icon && <Icon />}
      <span>{titulo}</span>
    </button>
  );
};

export const BtnCircular = ({
  icon,
  width = "w-[25px]",
  height = "h-[25px]",
  bgcolor = "bg-white",
  textcolor = "text-[#181616]",
  fontsize = "text-xs",
  traslatex = "",
  traslatey = "",
}) => {
  return (
    <button
      className={`rounded-[50%] flex items-center justify-center ${width} ${height} ${bgcolor} ${textcolor} ${fontsize} absolute ${traslatex} ${traslatey}`}
    >
      {icon && icon}
    </button>
  );
};

const BtnFiltro = ({ bgcolor, textcolor, icon }) => {
  return (
    <div
      className={`${bgcolor} ${textcolor} h-[50px] w-[50px] rounded-full flex items-center cursor-pointer  justify-center`}
    >
      <span className="transition-all duration-300 hover:scale-130">
        {icon}
      </span>
    </div>
  );
};

export default BtnFiltro;

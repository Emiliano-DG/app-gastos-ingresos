import { BsQuestionCircle } from "react-icons/bs";
import { BtnSave } from "../../moleculas/BtnSave";

export const SidebarCard = ({ isOpen }) => {
  return (
    <div
      className={`w-full p-4 relative text-center transform transition-all duration-500 ease-in-out 
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
      `}
    >
      <span className="absolute -top-0 left-1/2 -translate-x-1/2 z-[100] ">
        <BsQuestionCircle size={32} />
      </span>
      <div className="relative p-2 bg-bg5 rounded-2xl overflow-hidden text-white">
        {/* CIRCULOS DE DECORACION */}
        <div className="absolute bg-whiteBg rounded-[50%] opacity-70 h-full w-full top-[-80px] left-[-80px]"></div>
        <div className="absolute bg-whiteBg rounded-[50%] opacity-70 h-32 w-32 bottom-[-80px] right-[-70px] z-10"></div>
        {/* //TODO: ver como mejorar texto para tema dark */}
        <h3 className="text-xs mt-4 py-4 px-0 font-semibold text-black">
          Centro de ayuda
        </h3>
        <BtnSave titulo="Contactar" />
      </div>
    </div>
  );
};

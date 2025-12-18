import img from "@/assets/logocerdo.png";
import { LinksArray, SecondarylinksArray } from "../../../utils/dataEstatica";
import { NavLink } from "react-router-dom";
import { SidebarCard } from "./SidebarCard";
import { Icon } from "../../atomos/Icons";

export const Sidebar = ({ state, setState }) => {
  return (
    <aside className="fixed top-0 left-0 h-full z-10">
      {/* BOTON TOGGLE SIDEBAR */}
      <button
        onClick={() => setState(!state)}
        className={`absolute top-16 -right-5 z-20 p-2 rounded-full bg-bg5/10 backdrop-blur-sm text-bg5  hover:bg-bg5/20 active:scale-95 transition shadow-md  ${
          state ? "rotate-180" : " rotate-0"
        }`}
      >
        <Icon name="flecha" className="w-6 h-6" />
      </button>

      {/* SIDEBAR */}
      <div
        className={`bg-bg  text-text  pt-5  z-[100] h-full flex flex-col transition-all duration-400 ease-in-out    ${
          state ? "w-[175px] " : "w-12 "
        }`}
      >
        {/* CONTENIDO SCROLLEABLE */}
        <div
          className={`h-full flex flex-col gap-3 sidebar-scroll ${
            state ? "overflow-y-auto" : "overflow-hidden"
          } `}
        >
          {/* LOGO Y NOMBRE */}
          <div className="flex items-center justify-center pb-14">
            {/* CONTENEDOR IMAGEN */}
            <div
              className={` cursor-pointer transition-all duration-300 ${
                state ? "w-[30px]" : "w-[33px]"
              }`}
            >
              <img src={img} alt="img" className="w-full animate-flotar-slow" />
            </div>

            {/* NOMBRE USUARIO */}
            {state && (
              <h2 className="font-semibold ml-2 transition-opacity duration-300">
                ECS
              </h2>
            )}
          </div>

          {/* LINKS PRIMARIOS */}
          {LinksArray.map(({ label, icon, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `relative flex items-center h-14
              gap-2 my-1.5 px-[5%] py-2 rounded-md hover:bg-bg-alpha transition 
              ${state ? "px-[5%] justify-start" : "px-0 justify-center"}
              ${
                isActive
                  ? " text-bg5 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-[10px] before:bg-bg5"
                  : "text-text"
              }`
              }
            >
              <div className="w-6 h-6">{icon}</div>
              {state && (
                <span
                  className={`transition-all duration-400 ease-in-out overflow-hidden ${
                    state ? "opacity-100 w-auto ml-2" : "opacity-0 w-0 ml-0"
                  }`}
                >
                  {label}
                </span>
              )}
            </NavLink>
          ))}
          <hr className="h-px bg-bg4 opacity-20 " />
          {/* LINKS SECUNDARIOS */}
          {SecondarylinksArray.map(({ label, icon, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `relative flex items-center text-text h-14 gap-2 my-1.5 px-[5%] py-2 rounded-md hover:bg-bg-alpha transition 
              ${state ? "px-[5%] justify-start" : "px-0 justify-center"}
              ${
                isActive
                  ? " text-bg5 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-[10px] before:bg-bg5"
                  : ""
              }`
              }
            >
              <div className="w-6 h-6">{icon}</div>
              {state && (
                <span
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    state ? "opacity-100 w-auto ml-2" : "opacity-0 w-0 ml-0"
                  }`}
                >
                  {label}
                </span>
              )}
            </NavLink>
          ))}
          {/* TARJETA INFORMATIVA */}
          <hr className="h-px bg-bg4 opacity-20" />
          {state && <SidebarCard isOpen={state} />}
        </div>
      </div>
    </aside>
  );
};

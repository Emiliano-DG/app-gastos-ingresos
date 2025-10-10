import img from "@/assets/logocerdo.png";
import { LinksArray, SecondarylinksArray } from "../../../utils/dataEstatica";
import { NavLink } from "react-router-dom";

import { SidebarCard } from "./SidebarCard";
import { Icon } from "../../atomos/Icons";

export const Sidebar = ({ state, setState }) => {
  return (
    <aside>
      <div
        className={`bg-bg  text-text fixed pt-5  z-[100] h-full flex flex-col justify-between transition-all duration-300 ease-in-out  ${
          state ? "w-[175px]" : "w-12"
        }`}
      >
        <button
          onClick={() => setState(!state)}
          className={`absolute top-16 -right-5 z-50 p-2 rounded-full bg-bg5/10 backdrop-blur-sm text-bg5  hover:bg-bg5/20 active:scale-95 transition shadow-md ${
            state ? "rotate-180" : " rotate-0"
          }`}
        >
          <Icon name="flecha" className="w-6 h-6" />
        </button>
        {/* LOGO Y NOMBRE */}
        <div className="flex items-center justify-center pb-14">
          {/* CONTENEDOR IMAGEN */}
          <div
            className={` cursor-pointer transition-all duration-300 ${
              state ? "w-[20px]" : "w-[30px]"
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
              `relative flex items-center text-text h-14
            gap-2 my-1.5 px-[5%] py-2 rounded-md hover:bg-bg-alpha transition 
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
                }
  `}
              >
                {label}
              </span>
            )}
          </NavLink>
        ))}
        <hr className="h-[1px] border-0 bg-bg4" />
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
                }
  `}
              >
                {label}
              </span>
            )}
          </NavLink>
        ))}
        <hr className="h-[1px] border-0 bg-bg4 mb-2" />
        {/* SIDEBAR CARD */}
        {state && <SidebarCard isOpen={state} />}
      </div>
    </aside>
  );
};

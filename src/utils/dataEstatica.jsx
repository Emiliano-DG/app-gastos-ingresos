import { BiUserCircle } from "react-icons/bi";
import { RiSettings3Line } from "react-icons/ri";
import { MdExitToApp } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { TbPig } from "react-icons/tb";

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <BiUserCircle />,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <RiSettings3Line />,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <MdExitToApp />,
    tipo: "cerrarsesion",
  },
];

export const DataDesplegableTipo = [
  {
    text: "Categorias gastos",
    color: "#fe6156",
    tipo: "g",
  },
  {
    text: "Categorias ingresos",
    color: "#53B257",
    tipo: "i",
  },
];

//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome size={25} />,
    to: "/",
  },
  {
    label: "Categorias",
    icon: <MdOutlineAnalytics size={25} />,
    to: "/categorias",
  },
  {
    label: "Movimientos",
    icon: <AiOutlineApartment size={25} />,
    to: "/movimientos",
  },
  {
    label: "Informes",
    icon: <MdOutlineAnalytics size={25} />,
    to: "/informes",
  },
  {
    label: "Dashboard",
    icon: <RiDashboard3Line size={25} />,
    to: "/dashboard",
  },
];
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting size={25} />,
    to: "/configurar",
  },
  {
    label: "Acerca de",
    icon: <TbPig size={25} />,
    to: "/acercade",
  },
];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
  },
  {
    icono: "🌚",
    descripcion: "dark",
  },
];

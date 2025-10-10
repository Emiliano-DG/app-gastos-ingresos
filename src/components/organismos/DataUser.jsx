import { useAuthStore } from "../../store/AuthStore";
import { BtnCircular } from "../moleculas/BtnCircular";
import { Icon } from "../atomos/Icons";
import { ListaMenuDesplegable } from "../moleculas/ListaMenuDesplegable";
import { DesplegableUser } from "../../utils/dataEstatica";

export const DataUser = ({ state, setState }) => {
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);

  const funcionXTipo = async (tipo) => {
    if (tipo === "cerrarsesion") {
      await signOut();
    }
  };

  return (
    <div
      onClick={() => setState(!state)}
      className="relative top-0 right-0 w-[200px] flex items-center justify-center p-2 m-8 rounded-[50px] cursor-pointer hover:bg-bg3"
    >
      <div className="flex items-center justify-center min-h-[40px] min-w-[40px]">
        <img
          src={user?.user_metadata?.picture}
          alt="imagen"
          className="w-full h-10 rounded-[50%] mr-3 object-cover"
        />
      </div>
      <div>
        <BtnCircular
          icon={<Icon name="corona" />}
          traslatex="translate-x-[-24px]"
          traslatey="translate-y-[-27px]"
        />
      </div>
      <span className=" font-medium overflow-hidden whitespace-nowrap text-ellipsis break-words">
        {user?.user_metadata?.full_name}
      </span>
      {state && (
        <ListaMenuDesplegable
          data={DesplegableUser}
          top="top-[60px]"
          funcion={(tipo) => funcionXTipo(tipo)}
        />
      )}
    </div>
  );
};

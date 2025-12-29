import { useAuthStore } from "../../store/AuthStore";
import { BtnSave } from "../moleculas/BtnSave";
// import { FcGoogle } from "react-icons/fc";
import { Icon } from "../atomos/Icons";

export const LoginTemplate = ({
  version,
  titulo,
  subtitulo,
  btnTitulo,
  imagen,
}) => {
  const signInWithGoogle = useAuthStore((state) => state.signInWithGoogle);

  return (
    <div className="bg-[#131313] rounded-lg flex flex-col justify-between  text-white px-8 pt-4 pb-4 shadow-[8px_5px_18px_3px_rgba(0,0,0,0.35)] w-[300px] h-[380px] items-stretch">
      <span className="text-[#727272] self-start text-sm">{version}</span>
      <div className="flex justify-center">
        <img
          src={imagen}
          alt="imagen"
          className="max-w-24 h-auto animate-flotar"
        />
      </div>
      <h1 className="text-6xl font-bold text-center">{titulo}</h1>
      <p className="text-[#909090] font-lg text-center">{subtitulo}</p>
      <BtnSave
        titulo={btnTitulo}
        icon={<Icon name="inicio" />}
        action={signInWithGoogle}
      />
    </div>
  );
};

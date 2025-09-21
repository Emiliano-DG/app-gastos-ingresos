import { LoginTemplate } from "@/components/templates/LoginTemplate";
import img from "@/assets/logocerdo.png";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6]">
      <LoginTemplate
        version="version 1.0"
        titulo="ECS"
        subtitulo="control de gastos e ingresos"
        btnTitulo="Iniciar con Google"
        imagen={img}
      />
    </div>
  );
};

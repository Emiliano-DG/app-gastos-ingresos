import { Icon } from "../../atomos/Icons";
import { AccionTabla } from "./AccionesTabla";

export function ContentAccionesTabla({ funcionEditar, funcionEliminar }) {
  return (
    <div className="flex flex-wrap gap-2.5 justify-start md:justify-center">
      <AccionTabla
        funcion={funcionEditar}
        color="#7d7d7d"
        icono={<Icon name="iconeditarTabla" size={18} />}
      />
      <AccionTabla
        funcion={funcionEliminar}
        color="#f76e8e"
        icono={<Icon name="iconeliminarTabla" size={20} />}
      />
    </div>
  );
}

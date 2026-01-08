import Swal from "sweetalert2";
import { useCategoriasStore } from "../../../store/CategoriasStore";
import { ContentAccionesTabla } from "./ContentAccionesTabla";

export function TablaCategorias({
  data,
  SetopenRegistro, // funcion para abrir el modal de registro
  setdataSelect, // funcion para editar la data seleccionada
  setAccion, // funcion para setear la accion (editar o eliminar)
}) {
  const { eliminarCategoria } = useCategoriasStore();
  function eliminar(p) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, ¡no podrá recuperar este registro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await eliminarCategoria({ id: p.id, idusuario: p.idusuario });
      }
    });
  }

  //funcion para editar la categoria
  function editar(data) {
    SetopenRegistro(true);
    setdataSelect(data);
    setAccion("Editar");
  }

  return (
    <div className="overflow-x-auto relative w-full px-4 md:px-6">
      <table className=" responsive-table w-full mb-6 border-spacing-0 text-sm md:text-base">
        <thead>
          <tr>
            <th scope="col" className="th-head">
              Descripcion
            </th>
            <th scope="col" className="th-head">
              Icono
            </th>
            <th scope="col" className="th-head">
              Color
            </th>
            <th scope="col" className="th-head">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row" data-title="Descripcion">
                  {item.descripcion}
                </th>
                <td data-title="Icono">{item.icono}</td>
                <td data-title="Color">
                  {/* <div className="ColorContent">
                        <Colorcontent
                          color={item.color}
                          $alto="25px"
                          $ancho="25px"
                        />
                      </div> */}
                </td>
                <td data-title="Acciones">
                  <ContentAccionesTabla
                    funcionEditar={() => editar(item)}
                    funcionEliminar={() => eliminar(item)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// const Colorcontent = styled.div`
//   justify-content: center;
//   min-height: ${(props) => props.$alto};
//   width: ${(props) => props.$ancho};
//   display: block;
//   background-color: ${(props) => props.color};
//   border-radius: 50%;
//   text-align: center;
// `;

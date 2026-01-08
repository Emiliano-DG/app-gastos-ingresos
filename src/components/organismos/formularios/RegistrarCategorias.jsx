import { useEffect, useState } from "react";

import { useCategoriasStore } from "../../../store/CategoriasStore";
import { usuarioStore } from "../../../store/usuarioStore";
import { InputText } from "../formularios/InpuText";
import { Spinner } from "../../moleculas/Spinner";
import { BtnSave } from "../../moleculas/BtnSave";
import { useOperaciones } from "../../../store/OperacionesStore";
import { Icon } from "../../atomos/Icons";
import { useForm } from "react-hook-form";

export function RegistrarCategorias({ onClose, dataSelect, accion }) {
  const { insertarCategorias, editarCategoria } = useCategoriasStore();
  const { datausuarios } = usuarioStore();

  const [estadoProceso, setEstadoproceso] = useState(false); //estado de proceso a la hora de guardar o editar

  const { tipo } = useOperaciones(); //tipo de operacion (ingresos o gastos)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); //useForm para manejar el formulario

  //funcion para insertar o editar una categoria, la data es el formulario
  async function insertar(data) {
    if (accion === "Editar") {
      const p = {
        descripcion: data.descripcion,
        id: dataSelect.id,
        idusuario: datausuarios.id,
        tipo: tipo,
      };
      try {
        setEstadoproceso(true);
        await editarCategoria(p);
        setEstadoproceso(false);
        onClose();
      } catch (error) {}
    } else {
      const p = {
        descripcion: data.descripcion,
        idusuario: datausuarios.id,
        tipo: tipo,
      };
      try {
        setEstadoproceso(true);
        await insertarCategorias(p);
        setEstadoproceso(false);

        onClose();
      } catch (error) {
        alert("error ingresar Form");
      }
    }
  }

  return (
    <div
      class="fixed top-0 left-0 w-full min-h-screen bg-[rgba(10,9,9,0.5)] flex items-center justify-center z-[1000]
    transition-all duration-500
  "
    >
      {estadoProceso && <Spinner />}

      <div className="w-full max-w-md rounded-lg bg-bgtotal shadow-xl p-8 z-[100]">
        <header className="flex justify-between items-center mb-6">
          <section>
            <h1 className="text-2xl font-bold text-text">
              {accion == "Editar"
                ? "Editar categoria"
                : "Registrar nueva categoria"}
            </h1>
          </section>

          <section>
            <span onClick={onClose} className="cursor-pointer">
              <Icon name="iconoCerrar" size={20} />
            </span>
          </section>
        </header>

        <form className="formulario" onSubmit={handleSubmit(insertar)}>
          <section>
            <div>
              <InputText
                defaultValue={dataSelect.descripcion}
                register={register}
                placeholder="Descripcion"
                errors={errors}
                style={{ textTransform: "capitalize" }}
              />
            </div>
            <div className="btnguardarContent">
              <BtnSave
                type="submit"
                icono={<Icon name="iconoGuardar" />}
                titulo="Guardar"
                bgcolor="#DAC1FF"
              />
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
// const Container = styled.div`
//   transition: 0.5s;
//   top: 0;
//   left: 0;
//   position: fixed;
//   background-color: rgba(10, 9, 9, 0.5);
//   display: flex;
//   width: 100%;
//   min-height: 100vh;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;

//   .sub-contenedor {
//     width: 500px;
//     max-width: 85%;
//     border-radius: 20px;
//     background: ${({ theme }) => theme.bgtotal};
//     box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
//     padding: 13px 36px 20px 36px;
//     z-index: 100;

//     .headers {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 20px;

//       h1 {
//         font-size: 20px;
//         font-weight: 500;
//       }
//       span {
//         font-size: 20px;
//         cursor: pointer;
//       }
//     }
//     .formulario {
//       section {
//         gap: 20px;
//         display: flex;
//         flex-direction: column;
//         .colorContainer {
//           .colorPickerContent {
//             padding-top: 15px;
//             min-height: 50px;
//           }
//         }
//       }
//     }
//   }
// `;

// const ContentTitle = styled.div`
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   gap: 20px;
//   svg {
//     font-size: 25px;
//   }
//   input {
//     border: none;
//     outline: none;
//     background: transparent;
//     padding: 2px;
//     width: 40px;
//     font-size: 28px;
//   }
// `;
// const ContainerEmojiPicker = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
// `;

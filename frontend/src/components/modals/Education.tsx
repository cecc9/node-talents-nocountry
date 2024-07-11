import InputBase from "../InputBase";
import Modal from "../Modal";
import ModalsBtn__container from "./ModalsBtn__container";
import baseStyles from "../../styles/base-modal.module.scss";
import { ModalInput } from "@/types/modalInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import educationSchema from "@/schemas/candidate/educationDataSchema";

const educationInputs: ModalInput[] = [
  {
    id: "tituloCarrera",
    labelTxt: "Título / Carrera",
    type: "text",
    placeholder: "Título o carrera",
  },
  {
    id: "pais",
    labelTxt: "País",
    type: "text",
    placeholder: "País",
  },
  {
    id: "tipoDeEstudio",
    labelTxt: "Tipo de estudio",
    type: "text",
    placeholder: "Tipo de estudio",
  },
  {
    id: "areaDeEstudio",
    labelTxt: "Área de estudio",
    type: "text",
    placeholder: "Área de estudio",
  },
  {
    id: "institucion",
    labelTxt: "Institución",
    type: "text",
    placeholder: "Institución",
  },
  {
    id: "estado",
    labelTxt: "Estado",
    type: "text",
    placeholder: "Estado",
  },
  {
    id: "fechaDeInicio",
    labelTxt: "Fecha de inicio",
    type: "date",
    placeholder: "Fecha de inicio",
  },
  {
    id: "fechaDeFin",
    labelTxt: "Fecha de fin",
    type: "date",
    placeholder: "Fecha de fin",
  },
];

function Education() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(educationSchema) });

  return (
    <Modal>
      <h2 className={baseStyles.title}>Educacion y estudios</h2>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className={baseStyles.modal__form}>
          {educationInputs.map((input) => (
            <InputBase
              key={input.id}
              id={input.id}
              labelTxt={input.labelTxt}
              type={input.type}
              placeholder={input.placeholder}
              variant={"primary"}
              registerFn={register}
              inputError={errors[input.id]}
            />
          ))}
        </div>
        <br />
        <ModalsBtn__container />
      </form>
    </Modal>
  );
}
export default Education;

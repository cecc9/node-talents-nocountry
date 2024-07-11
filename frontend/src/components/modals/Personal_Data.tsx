import Modal from "../Modal";
import baseStyles from "../../styles/base-modal.module.scss";
import { ModalInput } from "@/types/modalInput";
import InputBase from "../InputBase";
import ModalsBtn__container from "./ModalsBtn__container";
import { useForm } from "react-hook-form";
import { personalDataSchema } from "@/schemas/candidate/personalDataSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const personalDataInputs: ModalInput[] = [
  {
    id: "nombre",
    labelTxt: "Nombre",
    type: "text",
    placeholder: "Nombre completo",
  },
  {
    id: "fechaDeNacimiento",
    labelTxt: "Fecha de nacimiento",
    type: "date",
    placeholder: "DD/MM/AAAA",
  },
  {
    id: "genero",
    labelTxt: "Género",
    type: "text",
    placeholder: "Género",
  },
  {
    id: "estadoCivil",
    labelTxt: "Estado civil",
    type: "text",
    placeholder: "Estado civil",
  },
  {
    id: "DNI",
    labelTxt: "DNI",
    type: "text",
    placeholder: "Número de identificación",
  },
];

function Personal_Data() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalDataSchema),
  });

  return (
    <Modal>
      <h2 className={baseStyles.title}>Datos Personales</h2>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className={baseStyles.modal__form}>
          {personalDataInputs.map((input) => (
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
export default Personal_Data;

import Modal from "../Modal";
import baseStyles from "../../styles/base-modal.module.scss";
import { ModalInput } from "@/types/modalInput";
import InputBase from "../InputBase";
import ModalsBtn__container from "./ModalsBtn__container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactDataSchema } from "@/schemas/candidate/contactDataSchema";

const personalDataInputs: ModalInput[] = [
  {
    id: "celular",
    labelTxt: "celular",
    type: "tel",
    placeholder: "+57 312 345 6789",
  },
  {
    id: "correoElectronico",
    labelTxt: "correo electronico",
    type: "email",
    placeholder: "qF8iD@example.com",
  },
  {
    id: "provincia",
    labelTxt: "provincia",
    type: "text",
    placeholder: "varsovia",
  },
  {
    id: "pais",
    labelTxt: "pais",
    type: "text",
    placeholder: "polonia",
  },
  {
    id: "direccion",
    labelTxt: "direccion",
    type: "text",
    placeholder: "calle falsa 123",
  },
  {
    id: "numero",
    labelTxt: "numero",
    type: "number",
    placeholder: "221543",
  },
];

function Contact_Data() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactDataSchema),
  });

  return (
    <Modal>
      <h2 className={baseStyles.title}>Datos de Contacto</h2>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className={baseStyles.modal__form}
      >
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
        <ModalsBtn__container />
      </form>
    </Modal>
  );
}
export default Contact_Data;

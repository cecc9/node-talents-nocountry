import Modal from "../Modal";
import baseStyles from "../../styles/base-modal.module.scss";
import InputBase from "../InputBase";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import experienceSchema from "@/schemas/candidate/experienceSchema";
import { ModalInput } from "@/types/modalInput";
import ModalsBtn__container from "./ModalsBtn__container";

type RegisterData = {};

const experienceInputs: ModalInput[] = [
  {
    id: "empresa",
    labelTxt: "empresa",
    type: "text",
    placeholder: "Microsoft",
  },
  {
    id: "actividad",
    labelTxt: "actividad",
    type: "text",
    placeholder: "Software Development",
  },
  {
    id: "puesto",
    labelTxt: "puesto",
    type: "text",
    placeholder: "Full Stack Developer",
  },
  {
    id: "nivdelDeExperiencia",
    labelTxt: "nivel de experiencia",
    type: "text",
    placeholder: "Senior",
  },
  {
    id: "areaDelCargo",
    labelTxt: "area del cargo",
    type: "text",
    placeholder: "IT",
  },
  {
    id: "subarea",
    labelTxt: "Subarea",
    type: "text",
    placeholder: "IT Development",
  },
  {
    id: "pais",
    labelTxt: "pais",
    type: "text",
    placeholder: "Canada",
  },
  {
    id: "fechaDeInicio",
    labelTxt: "fecha de inicio",
    type: "date",
    placeholder: "2020-01-01",
  },
  {
    id: "fechaDeFin",
    labelTxt: "fecha de fin",
    type: "date",
    placeholder: "2020-01-01",
  },
];

function Experience_Modal() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(experienceSchema),
  });

  return (
    <Modal>
      <h2 className={baseStyles.title}>Experiencia Laboral</h2>
      <form
        className={baseStyles.experience__form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        {experienceInputs.map((input) => (
          <InputBase
            key={input.id}
            id={input.id}
            labelTxt={input.labelTxt}
            type={input.type}
            placeholder={input.placeholder}
            variant={"primary"}
            inputError={errors}
            name={input.id}
            registerFn={register}
          />
        ))}
        <div>
          <label className={baseStyles.dsc__label} htmlFor="descripcion">
            Descripcion
          </label>
          <textarea
            className={baseStyles.description}
            name="descripcion"
            id="descripcion"
            maxLength={1000}
            required
          />
        </div>
      </form>
      <ModalsBtn__container />
    </Modal>
  );
}
export default Experience_Modal;

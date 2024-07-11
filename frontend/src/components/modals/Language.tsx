import Modal from "../Modal";
import ModalsBtn__container from "./ModalsBtn__container";
import baseStyles from "../../styles/base-modal.module.scss";
import { useForm } from "react-hook-form";

const languages = ["Ingles", "Frances", "Italiano"] as const;
const languageLevels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

function Language() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Modal>
      <h2 className={baseStyles.title}>Sumar Idioma</h2>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className={baseStyles.modal__language}>
          <label className={baseStyles.subtitle} htmlFor="idioma">
            Idioma
          </label>
          <select className={baseStyles.inputPrimary} name="idioma" id="idioma">
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>

          <label className={baseStyles.subtitle} htmlFor="nivelEscrito">
            Nivel escrito
          </label>
          <select
            className={baseStyles.inputPrimary}
            name="nivelEscrito"
            id="nivelEscrito"
          >
            {languageLevels.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>

          <label className={baseStyles.subtitle} htmlFor="nivelOral">
            Nivel Oral
          </label>
          <select
            className={baseStyles.inputPrimary}
            name="nivelOral"
            id="nivelOral"
          >
            {languageLevels.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <ModalsBtn__container />
      </form>
    </Modal>
  );
}
export default Language;

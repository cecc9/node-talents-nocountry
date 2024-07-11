import Modal from "../Modal";
import baseStyles from "../../styles/base-modal.module.scss";
import ModalsBtn__container from "./ModalsBtn__container";

function Courses_Certificates() {
  return (
    <Modal>
      <h2 className={baseStyles.title}>Datos Personales</h2>
      <p className={baseStyles.subtitle}>Agrega tus cursos y certificaciones</p>
      <textarea
        className={baseStyles.description}
        name="certificates"
        id="certificates"
        maxLength={1000}
        required
      />
      <ModalsBtn__container />
    </Modal>
  );
}
export default Courses_Certificates;

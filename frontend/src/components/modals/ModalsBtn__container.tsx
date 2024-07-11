import baseStyles from "../../styles/base-modal.module.scss";

function ModalsBtn__container() {
  return (
    <div className={baseStyles.modalsBtn__container}>
      <button type="submit">Guardar</button>
      <button type="button">Cancelar</button>
    </div>
  );
}
export default ModalsBtn__container;

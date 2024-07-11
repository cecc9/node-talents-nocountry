import styles from "../styles/base-modal.module.scss";

function Modal({ children }: any) {
  return (
    <aside className={styles.modal__container}>
      <div className={styles.modal}>{children}</div>
    </aside>
  );
}
export default Modal;

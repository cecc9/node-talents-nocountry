import Image from "next/image"
import Modal from "../Modal"
// import semiCircle from "./greenSemiCircle.svg"
import successMan from "./successMan.svg"
import baseStyles from "../../styles/base-modal.module.scss"
import Link from "next/link"

function Successful_Register() {
  return (
    <Modal>
      <header className={baseStyles.successfulRegister__modal__head}>
        <h2 className={baseStyles.successfulRegister__modal__title}>
          ¡Registro exitoso!
        </h2>
        <p className={baseStyles.successfulRegister__modal__body}>
          Ahora sigamos con tu perfil
        </p>
      </header>

      <article className={baseStyles.svgContainer}>
        {/* <Image
          src={semiCircle}
          alt="green semi circle"
          width={280}
          height={290}
          className={baseStyles.semiCircle}
        /> */}
        <div className={baseStyles.successMan}>
          <Image src={successMan} alt="success man" width={280} height={290} />
          <Link href="/auth/login">Continuar</Link>
        </div>
      </article>
    </Modal>
  )
}
export default Successful_Register

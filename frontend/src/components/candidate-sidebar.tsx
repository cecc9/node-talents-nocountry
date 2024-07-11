import EditIcon from "@mui/icons-material/Edit"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
// import { Icon } from "@iconify/react"

const CandidateSidebar = () => {
  return (
    <div className="candidate-sidebar">
      <h2 className="candidate-sidebar__title">Mi Perfil</h2>

      <section className="candidate-sidebar__section">
        <figure className="candidate-sidebar__figure">
          <div className="candidate-sidebar__icon">
            <PersonAddIcon />
          </div>
          <figcaption className="candidate-sidebar__figcaption">
            <p className="candidate-sidebar__name">Laura Gomez</p>
          </figcaption>
        </figure>

        <div className="candidate-sidebar__personal-data">
          <div className="candidate-sidebar__data-category">
            <p className="candidate-sidebar__category-title">
              Datos Personales
            </p>
            <EditIcon />
          </div>

          <div className="candidate-sidebar__data">
            <p className="candidate-sidebar__data-item">Nombre:</p>
            <p className="candidate-sidebar__data-item">Fecha de Nacimiento:</p>
            <p className="candidate-sidebar__data-item">Género:</p>
            <p className="candidate-sidebar__data-item">Estado Civil:</p>
            <p className="candidate-sidebar__data-item">DNI:</p>
          </div>
        </div>
      </section>

      <section className="candidate-sidebar__section">
        <div className="candidate-sidebar__contact">
          <p className="candidate-sidebar__contact-title">Datos de Contacto</p>
          <EditIcon />
        </div>
        <div className="candidate-sidebar__contact-data">
          <p className="candidate-sidebar__contact-item">Celular:</p>
          <p className="candidate-sidebar__contact-item">Correo Electronico:</p>
          <p className="candidate-sidebar__contact-item">Direccion:</p>
        </div>
      </section>

      <button className="candidate-sidebar__download-cv-btn">
        Descargar mi CV
      </button>
    </div>
  )
}

export default CandidateSidebar

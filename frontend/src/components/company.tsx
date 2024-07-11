import PersonAddIcon from "@mui/icons-material/PersonAdd"
import EditIcon from "@mui/icons-material/Edit"

function Company() {
  return (
    <div className="company">
      <div className="company__profile">
        <p className="company__profile__title">Mi empresa</p>

        <section className="company-sidebar__section">
          <figure className="company-sidebar__figure">
            <div className="company-sidebar__icon">
              <PersonAddIcon />
            </div>
            <figcaption className="company-sidebar__figcaption">
              <p className="company-sidebar__name">Empresa SRL</p>
            </figcaption>
          </figure>

          <div className="company-sidebar__personal-data">
            <div className="company-sidebar__data-category">
              <p className="company-sidebar__category-title">
                Datos Personales
              </p>
              <EditIcon />
            </div>

            <div className="company-sidebar__data">
              <p className="company-sidebar__data-item">Nombre de la Empresa: Empresa SRL</p>
              <p className="company-sidebar__data-item">Razón Social:</p>
              <p className="company-sidebar__data-item">Industria:</p>
              <p className="company-sidebar__data-item">Condición fiscal:</p>
              <p className="company-sidebar__data-item">Cantidad de empleados:</p>
            </div>

            
            <div className="company-sidebar__desc">
              <p className="company-sidebar__desc-p">
                Descripción de la empresa:
              </p>

              <div className="company-sidebar__desc-text">
                <p></p>
              </div>
            </div>
            
          </div>
        </section>

        <section className="company-sidebar__section">
          <div className="company-sidebar__contact">
            <p className="company-sidebar__contact-title">Datos de Contacto</p>
            <EditIcon />
          </div>
          <div className="company-sidebar__contact-data">
            <p className="company-sidebar__contact-item">Celular:</p>
            <p className="company-sidebar__contact-item">Calle:</p>
            <p className="company-sidebar__contact-item">
              Correo electronico: empresa@gmail.com
            </p>
            <p className="company-sidebar__contact-item">Localidad:</p>
            <p className="company-sidebar__contact-item">País:</p>
            <p className="company-sidebar__contact-item">Número:</p>
          </div>
        </section>

      </div>
    </div>
  )
}

export { Company }

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

const CompanyOffersEmpty = () => {
  return (
    <div className="empty-offers__container">
      <header className="empty-offers__header">
        <h2 className="empty-offers__title">Mis Ofertas</h2>
      </header>
      <main className="empty-offers__main">
        <div className="empty-offers__add-offer">
          <div className="empty-offers__action">
            <AddCircleOutlineIcon />
            <p>Agregar Oferta</p>
          </div>
        </div>
        <div className="empty-offers__offer-details">
          {[
            "Puesto",
            "Area de Puesto",
            "Localidad",
            "Pais",
            "Salario",
            "Fecha de Inicio",
            "Nivel de Experiencia"
          ].map((detail, index) => (
            <p key={index} className="empty-offers__detail">
              {detail}:
            </p>
          ))}
          <div className="empty-offers__cta">
            <button className="empty-offers__button">
              Suma tu primer Oferta Laboral
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CompanyOffersEmpty

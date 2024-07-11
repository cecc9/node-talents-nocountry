import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

const Languages = () => {
  return (
    <div className="category">
      <h2 className="category__title">Mis Idiomas</h2>
      <div className="category__content">
        <div className="category__info">
          <p className="category__text">¿Qué idiomas posees?</p>
          <p className="category__actions">
            <AddCircleOutlineIcon />
            <span className="category__button">Sumar idioma</span>
          </p>
        </div>
        <div className="category__list">aquí se listan los idiomas</div>
      </div>
    </div>
  )
}

export default Languages

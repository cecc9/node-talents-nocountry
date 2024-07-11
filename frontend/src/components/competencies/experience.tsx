import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

const Experience = () => {
  return (
    <div className="category">
      <h2 className="category__title">Experiencia Laboral</h2>
      <div className="category__content">
        <div className="category__info">
          <p className="category__text">¿Qué experiencia laboral posees?</p>
          <p className="category__actions">
            <AddCircleOutlineIcon />
            <span className="category__button">Sumar experiencia</span>
          </p>
        </div>
        <div className="category__list">
          aquí se lista la experiencia laboral
        </div>
      </div>
    </div>
  )
}

export default Experience

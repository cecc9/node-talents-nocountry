import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

const Education = () => {
  return (
    <div className="category">
      <h2 className="category__title">Estudios</h2>
      <div className="category__content">
        <div className="category__info">
          <p className="category__text">¿Qué estudios posees?</p>
          <p className="category__actions">
            <AddCircleOutlineIcon />
            <span className="category__button">Sumar estudio</span>
          </p>
        </div>
        <div className="category__list">aquí se listan los estudios</div>
      </div>
    </div>
  )
}

export default Education

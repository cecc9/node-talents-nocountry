import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

const CoursesCertifications = () => {
  return (
    <div className="category">
      <h2 className="category__title">Cursos y certificaciones</h2>
      <div className="category__content">
        <div className="category__info">
          <p className="category__text">
            ¿Qué cursos y/o certificaciones posees?
          </p>
          <p className="category__actions">
            <AddCircleOutlineIcon />
            <span className="category__button">
              Sumar cursos y/o certificaciones
            </span>
          </p>
        </div>
        <div className="category__list">
          aquí se listan los cursos y/o certificaciones
        </div>
      </div>
    </div>
  )
}

export default CoursesCertifications

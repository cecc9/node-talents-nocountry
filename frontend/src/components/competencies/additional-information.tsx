import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

const AdditionalInformation = () => {
  return (
    <div className="category">
      <h2 className="category__title">Información adicional</h2>
      <div className="category__content">
        <div className="category__info">
          <p className="category__text">
            ¿Qué otra información quieres brindar?
          </p>
          <p className="category__actions">
            <AddCircleOutlineIcon />
            <span className="category__button">Sumar información</span>
          </p>
        </div>
        <div className="category__list">
          aquí se lista la informacion adicional
        </div>
      </div>
    </div>
  )
}

export default AdditionalInformation

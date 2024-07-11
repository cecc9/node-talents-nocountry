import React from "react"
import LockedIcon from "./icons/locked-icon"
import EditIcon from "./icons/edit-icon"

interface Props {
  offer: any
}

const CompanyOfferDetails = ({ offer }: Props) => {
  const benefits = ["Beneficio 1", "Beneficio 2", "Beneficio 3"]

  return (
    <div className="offer-detail">
      <div className="offer-detail__info">
        {[
          "Puesto",
          "Area de Puesto",
          "Localidad",
          "Pais",
          "Salario",
          "Fecha de Inicio",
          "Nivel de Experiencia"
        ].map((detail, index) => (
          <p key={index} className="offer-detail__info-item">
            {detail}:
          </p>
        ))}
        <div className="offer-detail__actions">
          <button className="offer-detail__button">Buscar candidatos</button>
          <button className="offer-detail__button button-icon">
            <LockedIcon />
          </button>
          <button className="offer-detail__button button-icon">
            <EditIcon />
          </button>
        </div>
      </div>

      <div className="offer-detail__description">
        <p className="offer-detail__description-item">
          <span>Descripcion:</span> {offer.description}
        </p>
        <p className="offer-detail__description-item">
          <span>Requisitos:</span> {offer.requirements}
        </p>
        <div className="offer-detail__benefits">
          <p className="offer-detail__benefits-title">Beneficios</p>
          <ul className="offer-detail__benefits-list">
            {offer.benefits.map((benefit: any) => (
              <li key={benefit} className="offer-detail__benefits-item">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <p className="offer-detail__experience-time">
          <span>Nivel de Experiencia:</span> {offer.experience}
        </p>
        <p className="offer-detail__experience-time">
          <span>Modalidad de contrato:</span> {offer.modality}
        </p>
      </div>
    </div>
  )
}

export default CompanyOfferDetails

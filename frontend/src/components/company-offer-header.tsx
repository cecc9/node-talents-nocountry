import { MessageIcon, RejectedIcon, ViewIcon } from "./icons"

interface Props {
  offerNumber: string
}

const CompanyOfferHeader = ({ offerNumber }: Props) => {
  return (
    <header className="loaded-offers__offer-header">
      <div className="loaded-offers__offer-info">
        <p>{offerNumber}</p>
      </div>
      <div className="loaded-offers__offer-stats">
        <p className="loaded-offers__offer-stat">
          3 Vistos <ViewIcon />
        </p>
        <p className="loaded-offers__offer-stat">
          1 Mensaje <MessageIcon />
        </p>
        <p className="loaded-offers__offer-stat">
          0 Rechazados <RejectedIcon />
        </p>
        <p className="loaded-offers__offer-view-more">Ver más</p>
      </div>
    </header>
  )
}

export default CompanyOfferHeader

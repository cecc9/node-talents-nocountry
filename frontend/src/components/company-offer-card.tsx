interface Props {
  offer: any
  changeOffer: (offer: any) => void
  isActived: boolean
}

const CompanyOfferCard = ({ offer, changeOffer, isActived }: Props) => {
  const actived = isActived ? "actived" : ""

  return (
    <div onClick={() => changeOffer(offer)} className={`offer-card`}>
      <div className="offer-card__header">
        <p>{offer.offer_number}</p>
      </div>
      <div className={`offer-card__content ${actived}`}>
        <div className="offer-card__details">
          <p>{offer.job}</p>
          <p>{offer.experience}</p>
          <p>{offer.location}</p>
        </div>

        <p className="offer-card__date">FP: {offer.publication_date}</p>
      </div>
    </div>
  )
}

export default CompanyOfferCard

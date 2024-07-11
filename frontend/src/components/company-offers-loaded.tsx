"use client"

import { useState } from "react"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

import CompanyOfferDetails from "./company-offer-details"
import CompanyOffersList from "./company-offers-list"
import CompanyOfferHeader from "./company-offer-header"
import { fakeOffers } from "@/utils/fakeOffers"
import CompanyOfferCard from "./company-offer-card"

const CompanyOffersLoaded = () => {
  // traer las ofertas de la store de redux-toolkit

  const [offers] = useState(fakeOffers)
  const [selectedOffer, setSelectedOffer] = useState(fakeOffers[0])

  const changeOffer = (offer: any) => {
    setSelectedOffer(offer)
  }

  return (
    <div className="loaded-offers">
      <h2 className="loaded-offers__title">Mis Ofertas</h2>
      <main className="loaded-offers__main">
        <div className="loaded-offers__add-offer">
          <div className="loaded-offers__action">
            <AddCircleOutlineIcon />
            <p>Agregar Oferta</p>
          </div>
        </div>
        <div className="loaded-offers__container">
          <div className="loaded-offers__offer">
            <CompanyOfferHeader offerNumber={selectedOffer.offer_number} />
            <CompanyOfferDetails offer={selectedOffer} />
          </div>
          <CompanyOffersList>
            {offers.map((offer: any) => (
              <CompanyOfferCard
                key={offer.id}
                offer={offer}
                isActived={selectedOffer.id === offer.id}
                changeOffer={changeOffer}
              />
            ))}
          </CompanyOffersList>
        </div>
      </main>
    </div>
  )
}

export default CompanyOffersLoaded

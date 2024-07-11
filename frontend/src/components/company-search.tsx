"use client"

import { useState } from "react"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

import CompanyOffersList from "./company-offers-list"
import { fakeOffers } from "@/utils/fakeOffers"
import { fakeCandidate } from "@/utils/fakeCandidate"
import CompanyOfferCard from "./company-offer-card"
import CompanySearchItem from "./company-search-item"
import Modal from "./Modal"
import Image from "next/image";
import semiCircle from "./modals/greenSemicircle.svg";
import successMan from "./modals/successMan.svg";
import baseStyles from "../styles/base-modal.module.scss";
import Link from "next/link";

const CompanySearchLoaded = () => {
  // traer las ofertas de la store de redux-toolkit

  const [offers] = useState(fakeOffers)
  const [selectedOffer, setSelectedOffer] = useState(fakeOffers[0])

  const candidate = [...fakeCandidate]
  const [listCandidate, setListCandate] = useState ([...fakeCandidate])

  const [sendOffer, setSendOffer] = useState(false)


  const changeOffer = (offer: any) => {
    setSelectedOffer(offer)

    let list = [...candidate]

    list = list.filter((obj) => obj.experience.toLowerCase() == offer.experience.toLowerCase())
    list = list.filter((obj) => obj.location.toLowerCase() == offer.location.toLowerCase())


    setListCandate([...list])
  }

  const submitHandler = () => {
    setSendOffer(true)
  }

  return (
    <div className="loaded-search">
      <h2 className="loaded-search__title">Búsqueda de candidatos</h2>
      <main className="loaded-search__main">
        <div className="loaded-search__add-offer">
          <div className="loaded-search__action">
            <AddCircleOutlineIcon />
            <p>Agregar Oferta</p>
          </div>
        </div>
        <div className="loaded-search__container">
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
          <div className="loaded-search__search-cont">

            <div className="loaded-search__search-cont--header">
              <div>
                <p>Fecha v</p>
              </div>
              <div>
                <p>Nivel de experiencia v</p>
              </div>
              <div>
                <p>Modalidad de trabajo v</p>
              </div>
              <button onClick={()=>submitHandler()}>Enviar Oferta</button>
            </div>

            <div className="search-list__cont">

              <p className="search-list--header">{selectedOffer.offer_number}</p>

              <div className="search-list">

                {listCandidate.map((candidate: any, index) => (
                <CompanySearchItem
                  key={candidate.id}
                  info={candidate}
                  number={index}
                  sendOffer={sendOffer}
                />
                ))}

              </div>

            </div>

          </div>
        </div>
      </main>
    { sendOffer && 
    <Modal>
      <header className={baseStyles.successfulRegister__modal__head}>
        <h2 className={baseStyles.successfulRegister__modal__title}>
          ¡Envio de ofertas exitoso!
        </h2>
        <p className={baseStyles.successfulRegister__modal__body}>
          Ahora solo queda esperar
        </p>
      </header>

      <article className={baseStyles.svgContainer}>
        <Image
          src={semiCircle}
          alt="green semi circle"
          width={280}
          height={290}
          className={baseStyles.semiCircle}
        />
        <div className={baseStyles.successMan}>
          <Image src={successMan} alt="success man" width={280} height={290} />
          <Link href="" onClick={()=>setSendOffer(false)}>Continuar</Link>
        </div>
      </article>
    </Modal>}
    </div>
  )
}

export default CompanySearchLoaded

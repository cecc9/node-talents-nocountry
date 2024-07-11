"use client"

import { useState } from "react"
import { Offer } from "./offer";

function Proposals() {

  const [listaOfertas, setListaOferstas] = useState(true); 

  return (
    <div className="proposals">
      
      <div className="proposals__header">

        <p className="proposals__header--tittle">Mis ofertas recibidas</p>

        <div className="proposals__header__sort">
          <button>Todos (0)</button>
        </div>

      </div>

      <div className="proposals__date">
        <button>Fecha de publicación</button>
        <button>Fecha de postulación</button>
      </div>

      {
        listaOfertas?
        <div className="proposals__main">

          <div className="offers-received">

            <div className="offers-received--tittle">
              <p>Ofertas recibidas</p>
            </div>

            <div className="offers-received__list">

              <Offer />
              <Offer />

            </div>

          </div>

          <div className="offer-details">

            <div className="offer-details__header">
              <p className="offer-details__header--job">Puesto de trabajo</p>
              <p className="offer-details__header--company">Empresa SRL</p>
              <p className="offer-details__header--area">Área del puesto</p>
              <p className="offer-details__header--location">Capital federal</p>
              <button>Postularme</button>
            </div>

            <div className="offer-details__desc">
              <p>Fare Pinsa y Vermú es un espacio animado y divertido que garantiza una gran experiencia para todo el que aprecia disfrutar de una buena Pinsa y Pizza al Taglio. Es un punto de encuentro que genera felicidad y buenos momentos para todos. En esta oportunidad, nos encontramos en la búsqueda de “Jefe de Cocina” para sumar a próxima apertura en Palermo. Apuntamos a perfiles con ganas de crecer y desarrollarse en el rubro y sobre todo que les apasione la gastronomía. El jefe de cocina es responsable de mostrar liderazgo a diario, trabajando en conjunto con su equipo de trabajo. Mantener la presentación y calidad de nuestros productos. Entrenar y desarrollar al equipo de cocina. Revisar procedimientos de limpieza. </p>
              <p>REQUISITOS: Tecnicatura y cuatro años de experiencia en el puesto. Debe contar con el curso de manipulación de alimentos. Conocimiento de informática. Flexibilidad horaria ¡Si tenes ganas de sumarte a nuestro equipo, postúlate! Tenemos muy buenas condiciones de contratación. Te esperamos!</p>
            </div>

          </div>
          
        </div> :
        <div className="no-offer">
          <div></div>
          <p>Por el momento no has recibido ofertas</p>
        </div>
      }


    </div>
  )
}

export { Proposals }

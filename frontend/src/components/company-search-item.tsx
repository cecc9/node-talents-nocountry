import { useState, useEffect } from "react"
import Modal from "./Modal"

interface Props {
  info: any,
  number: number,
  sendOffer: boolean
}

const CompanySearchItem = ({info, number, sendOffer }: Props) => {

  const [check, setCheck] = useState(false);
  const [modalDetails, setModalDetails] = useState(false);


  useEffect(() => {
    if (sendOffer) {setCheck(false)}
  },[sendOffer])


  return (
    <div className="search-list__item">

      <div className="search-list__item--candidateN">
        <p>Candidato N°{number+1}</p>
        <input type="checkbox" onClick={()=>{setCheck(!check)}} checked={check} name="" id="" />
      </div>

      <div className="search-list__item--candidate-desc">
        <p>{info.name}</p>
        <p>{info.location}</p>
        <p>{info.experience}</p>
      </div>

      <div className="search-list__item--candidate-exp">
        <p>Experiencia Laboral: </p>
        <p>Administrativa <br />
        Empresa SA <br />
        Carga de facturas Manejo de pago a proveedores Seguimiento de control de inventario
        </p>
        <button onClick={()=>setModalDetails(true)}>Ver más</button>
      </div>

      {modalDetails && 
  <Modal>
    <div className="search-list__item">

      <div className="search-list__item--candidateN">
        <p>Candidato N°{number+1}</p>
      </div>

      <div className="search-list__item--candidate-desc">
        <p>{info.name}</p>
        <p>{info.location}</p>
        <p>{info.experience}</p>
        <p>Educación: Lic. en Administración de empresas - UBA - Facultad de Ciencias Exactas</p>
        <p>Fecha de inicio: 02/2010</p>
        <p>Fecha de inicio: 05/2015</p>

      </div>

      <div className="search-list__item--candidate-exp">
        <p>Experiencia Laboral: </p>
        <p>Puesto <br />
        Empresa SA - Area <br />
        02/2010 al Fecha de inicio: 05/2015
        </p>
        <p>Nivel de experiencia: {info.experience}</p>
        <p>Descripción de responsabilidades: {info.description}</p>
        <p>Carga de facturas Manejo de pago a proveedores Seguimiento de control de inventario.</p>
        <button onClick={()=>setModalDetails(false)}>Cerrar</button>
      </div>

    </div>
  </Modal>}

    </div>
  )
}


export default CompanySearchItem

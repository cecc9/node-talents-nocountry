import { ReactNode } from "react"
import CompanyOfferCard from "./company-offer-card"

interface Props {
  children: ReactNode
}

const CompanyOffersList = ({ children }: Props) => {
  return <div className="offers-list">{children}</div>
}

export default CompanyOffersList

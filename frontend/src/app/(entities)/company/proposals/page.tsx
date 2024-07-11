import CompanyOffersEmpty from "@/components/company-offers-empty"
import CompanyOffersLoaded from "@/components/company-offers-loaded"

const CompanyProposalPage = () => {
  // comprobar si hay ofertas creadas en la store de redux

  return (
    <div className="company-proposals">
      {/* <CompanyOffersEmpty /> */}
      <CompanyOffersLoaded />
    </div>
  )
}

export default CompanyProposalPage

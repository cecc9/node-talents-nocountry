import CandidateSidebar from "@/components/candidate-sidebar"
import { ReactNode } from "react"

interface ProfileTemplateProps {
  children: ReactNode
}

export default function ProfileTemplate({ children }: ProfileTemplateProps) {
  // aqui controlar las opciones y los cambios de tabs

  return (
    <div className="profile-template">
      <CandidateSidebar />
      {/* <CandidateTabs /> */}
      {/* <div className="profile-template__competencies">
        <div className="profile-templates__tabs">tabs list</div> */}
      {children}
      {/* </div> */}
      {/* {children} */}
      {/* contenido de cambios competencias */}
    </div>
  )
}

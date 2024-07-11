"use client"

import {
  AdditionalInformation,
  CoursesCertifications,
  Education,
  Experience,
  Languages
} from "@/components/competencies"

import TabsList from "@/components/tabs-list"
import { useTab } from "@/hooks/useTab"

const CandidateProfilePage = () => {
  const { changeTab, tab, tabsItems } = useTab()

  const componentsTabs = {
    experiencia: <Experience />,
    cursos: <CoursesCertifications />,
    educacion: <Education />,
    idiomas: <Languages />,
    adicional: <AdditionalInformation />
  }

  return (
    <div className="candidate-competencies">
      <TabsList tabSelected={tab} tabsItems={tabsItems} changeTab={changeTab} />

      {componentsTabs[tab]}
    </div>
  )
}

export default CandidateProfilePage

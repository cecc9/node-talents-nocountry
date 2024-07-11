import { useState } from "react"
import { Tab, TabsItem } from "@/types/tab"

export const useTab = () => {
  const [tab, setTab] = useState<Tab>("experiencia")

  const [tabsItems] = useState<TabsItem[]>([
    { label: "Experiencia Laboral", value: "experiencia" },
    { label: "Cursos/Certificaciones", value: "cursos" },
    { label: "Educación", value: "educacion" },
    { label: "Idiomas", value: "idiomas" },
    { label: "Informacion Adicional", value: "adicional" }
  ])

  const changeTab = (tabItem: Tab) => {
    setTab(tabItem)
  }

  return { tab, changeTab, tabsItems }
}

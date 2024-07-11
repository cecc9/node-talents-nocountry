import Navbar from "@/components/navbar"
import { ReactNode } from "react"

interface MainTemplateProps {
  children: ReactNode
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className="template">
      {/* <Navbar /> */}
      {children}
    </div>
  )
}

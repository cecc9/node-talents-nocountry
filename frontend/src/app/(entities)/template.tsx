"use client"

import { Sidebar } from "@/components/sidebar"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface EntityTemplateProps {
  children: ReactNode
}

export default function EntityTemplate({ children }: EntityTemplateProps) {
  const pathname = usePathname()

  switch (pathname) {
    case "/candidate/register":
    case "/company/register": {
      return <div className="template-register-entities">{children}</div>
    }

    default: {
      return (
        <div className="entities-template">
          {/* <div className="sidebar">sidebar</div> */}
          <Sidebar />
          {children}
        </div>
      )
    }
  }
}

"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

import SettingsIcon from "@mui/icons-material/Settings"
import DescriptionIcon from "@mui/icons-material/Description"
import LogoutIcon from "@mui/icons-material/Logout"
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck"
import SearchIcon from "@mui/icons-material/Search"

const SidebarRoutes = () => {
  const sidebarLinks = {
    "/candidate": [
      {
        icon: <DescriptionIcon />,
        text: "Mi Perfil",
        route: "/candidate/profile"
      },
      {
        icon: <LibraryAddCheckIcon />,
        text: "Mis ofertas recibidas",
        route: "/candidate/proposals"
      }
    ],
    "/company": [
      {
        icon: <DescriptionIcon />,
        text: "Mi Perfil Empresa",
        route: "/company/profile"
      },
      {
        icon: <LibraryAddCheckIcon />,
        text: "Mis Ofertas",
        route: "/company/proposals"
      },
      {
        icon: <SearchIcon />,
        text: "Busqueda de Candidatos",
        route: "/company/search"
      }
    ]
  }
  const pathname = usePathname()

  const [routes] = useState(() =>
    pathname.includes("/candidate")
      ? sidebarLinks["/candidate"]
      : sidebarLinks["/company"]
  )

  return (
    <div>
      {routes.map((route) => (
        <Link key={route.text} href={route.route} className="sidebar__link">
          {route.icon}
          <p>{route.text}</p>
        </Link>
      ))}

      <span className="sidebar__link">
        <LogoutIcon />
        <p>Cerrar sesión</p>
      </span>
    </div>
  )
}

export default SidebarRoutes

// docker-compose up -d --build

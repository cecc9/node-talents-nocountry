import Image from "next/image"
import React from "react"

const Navbar = () => {
  type Menu = {
    id: number
    name: string
    url: string
  }

  const menu: Menu[] = [
    { id: 1, name: "Inicio", url: "/" },
    { id: 2, name: "Nosotros", url: "/about" },
    { id: 3, name: "Contactenos", url: "/contact" }
  ]

  return (
    <div className="navbar">
      <figure className="navbar__logo">
        <Image
          src="/assets/Logo.png"
          alt="logo node talentos"
          width={180}
          height={59}
        />
      </figure>

      <ul className="navbar__menu">
        {menu.map((item) => (
          <li key={item.id} className="navbar__menu-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar

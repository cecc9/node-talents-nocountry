import Image from "next/image"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import SidebarRoutes from "./sidebar-routes"
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Sidebar() {

  const isAuthenticated = useSelector((state: RootState) => state.authi.isAuthenticated)
  const router = useRouter()

  // para hacer la redirecciion si no esta logeado
  // if (!isAuthenticated) {
  //   router.push('/auth/login')
  // } 

  return (
    <div className="sidebar">
      <figure className="sidebar__image">
        <Image
          className="sidebar-img"
          src="/assets/Logo.webp"
          width={180}
          height={59}
          alt="Logo de pagina, Node"
        />
      </figure>

      <div className="sidebar__header">
        <div className="sidebar__header-icon">
          <PersonAddIcon />
        </div>

        <div className="sidebar__header-desc">
          <p className="sidebar__header-name">Laura Gomez</p>
          <p className="sidebar__header-mail">laurag@gmail.com</p>
        </div>
      </div>

      <SidebarRoutes />
    </div>
  )
}

export { Sidebar }

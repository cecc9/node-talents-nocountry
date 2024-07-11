"use client"

import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/assets/Logo.webp"
import LandingImg from "../../public/assets/LandingImg.webp"

import company1 from "../../public/assets/company1.webp"
import company2 from "../../public/assets/company2.webp"
import company3 from "../../public/assets/company3.webp"
import company4 from "../../public/assets/company4.webp"
import company5 from "../../public/assets/company5.webp"
import company6 from "../../public/assets/company6.webp"

function Landing() {
  return (
    <div className="landing">
      <section className="landing__section1">
        <Image
          className="landing__section1-img"
          src={LandingImg}
          alt="imagen de fondo de la pagina"
        />

        <div className="landing__section1__header">
          <Image
            className="landing__section1__header-img"
            src={Logo}
            alt="Logo de pagina, Node"
          />
          <button className="landing__section1__header-button">
            <Link href="/auth/login">INICIA SESIÓN</Link>
          </button>
        </div>

        <div className="landing__section1__cont">
          <div className="landing__section1__cont__desc">
            <p className="landing__section1__cont__desc-tittle">
              CONECTANDO CON EMPRESAS EN LATINOAMÉRICA
            </p>
            <p className="landing__section1__cont__desc-p">
              ¡Bienvenidos a nuestra plataforma de empleabilidad! Descubre
              oportunidades laborales emocionantes.
              {/* Para <span>candidatos</span>{" "}
              brindamos acceso a una amplia gama de empleos, con nosotros podrás
              estar mas cerca de tu nuevo futuro. */}
            </p>
            <p className="landing__section1__cont__desc-p">
              Como <span>empresa</span> te ofrecemos una plataforma intuitiva y
              ágil para poder seleccionar al candidato ideal.
            </p>
          </div>

          <div className="landing__section1__cont__reg">
            <p className="landing__section1__cont__reg-p">REGISTRATE COMO:</p>

            <div className="landing__section1__cont__reg-cont">
              <button className="landing__section1__cont__reg-cont-button">
                <Link href="/candidate/register">CANDIDATO</Link>
              </button>
              <button className="landing__section1__cont__reg-cont-button">
                <Link href="/company/register">EMPRESA</Link>
              </button>
            </div>
          </div>

          <div
            className="landing__section1__cont__reg"
            style={{ marginTop: "10px" }}
          >
            <p className="landing__section1__cont__reg-p">
              INGRESA AL DASHBOARD COMO:
            </p>

            <div className="landing__section1__cont__reg-cont">
              <button className="landing__section1__cont__reg-cont-button">
                <Link href="/candidate/profile">CANDIDATO</Link>
              </button>
              <button className="landing__section1__cont__reg-cont-button">
                <Link href="/company/profile">EMPRESA</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="landing__section2">
        <div className="landing__section2__management">
          <p className="landing__section2__management-p">
            Todas las soluciones que necesitas para gestionar tus ofertas y que
            encuentres tu próximo empleo.
          </p>

          <div className="landing__section2__management-contImg">
            <figure>
              <Image
                src="/assets/frame-1.webp"
                width={132}
                height={115}
                alt="icono de persona con tilde"
              />
            </figure>

            <figure>
              <Image
                src="/assets/frame-2.webp"
                width={132}
                height={115}
                alt="icono de lista con simbolo de mas"
              />
            </figure>

            <figure>
              <Image
                src="/assets/frame-3.webp"
                width={132}
                height={115}
                alt="icono de dos globos de conversacion"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="landing__section3">
        <p className="landing__section3-p">
          Estas empresas ya trabajan con nosotros:
        </p>

        <div className="landing__section3__listCompany">
          <Image src={company1} alt="" />
          <Image src={company2} alt="" />
          <Image src={company3} alt="" />
          <Image src={company4} alt="" />
          <Image src={company5} alt="" />
          <Image src={company6} alt="" />
        </div>
      </section>
    </div>
  )
}

export { Landing }

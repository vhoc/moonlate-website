import { type StaticImport } from "next/dist/shared/lib/get-img-props"
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { playfair } from "@/app/fonts";
import Image from "next/image"
import Link from "next/link";

interface FooterProps {
  imgLogo?: StaticImport | string
}

const Footer = ({ imgLogo }: FooterProps) => {

  return (
    <footer
      className="
        w-full bg-ml-secondary mt-12
        px-10 py-14
      "
    >

      {/* TOP PART */}
      <div className="
        pb-16 max-w-7xl mx-auto
        flex flex-col items-center gap-y-9
        sm:flex-row justify-between
        border-b border-solid border-white
      ">
        {
          imgLogo ?
            <Image
              src={imgLogo}
              width={96}
              height={96}
              alt="Moonlatte Logo"
            />
            :
            null
        }

        <div className="
          flex flex-col items-center gap-y-6
          sm:flex-row justify-center sm:gap-x-6
        "
        >
          <h5 className={`${playfair.className} font-bold text-2xl text-white`}>
            Síguenos
          </h5>

          <div className="flex gap-x-6">
            <FaFacebook className="text-white text-5xl" />
            <AiFillInstagram className="text-white text-5xl" />
          </div>

        </div>

      </div>

      {/* BOTTOM PART */}
      <div
        className="
        max-w-7xl mx-auto
        flex flex-col items-center gap-y-11 mt-9
        md:flex-row md:items-start md:justify-between md:gap-x-5
        "
      >

        {/* CONTACTO */}
        <div className="flex flex-col items-center gap-y-2 order-1 flex-1">
          <h5 className={`${playfair.className} font-bold text-2xl text-white text-center`}>
            Contacto
          </h5>

          <div className="text-white text-center">
            <p>
              Av. Eugenio Echeverría Castellot 82
            </p>

            <p>
              Miami 241 15,
            </p>

            <p>
              Ciudad del Carmen, Campeche,
            </p>

            <p>MX</p>

            <p className="font-semibold mt-4"><Link href={"mailto:talento.moonlatte@gmail.com"}>operadoraameka@gmail.com</Link></p>
          </div>
        </div>

        {/* TRABAJA CON NOSOTROS */}
        <div className="flex flex-col items-center gap-y-2 order-2 md:order-3 flex-1">
          <h5 className={`${playfair.className} font-bold text-2xl text-white text-center`}>
            Trabaja con nosotros
          </h5>
          
          <div className="text-white text-center">
            <p>Manta tu CV a</p>

            <p className="font-semibold"><Link href={"mailto:talento.moonlatte@gmail.com"}>talento.moonlatte@gmail.com</Link></p>

            <p className="font-semibold mt-4">
              <Link href={"tel:9381192095"}>938 119 2095</Link>
            </p>

            <p className="mt-4">Nos contacteremos contigo lo antes posible</p>
          </div>
        </div>

        {/* HORARIOS DE ATENCIÓN */}
        <div className="flex flex-col items-center gap-y-2 order-3 md:order-2 flex-1">
          <h5 className={`${playfair.className} font-bold text-2xl text-white text-center`}>
            Horarios de atención
          </h5>
          
          <div className="text-white text-center">
            <p>Lunes a Sábado 9:00 AM - 4:00 PM</p>            
          </div>
        </div>
          

      </div>

    </footer>
  )

}

export default Footer
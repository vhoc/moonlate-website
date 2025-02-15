import { playfair } from "@/app/fonts"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import Image from "next/image"
import imgSmartphone from "@/../public/img/moonlatte-smartphone-xl.png"

const OrderNowSection = () => {

  return (
    <section
      className="
      flex flex-col justify-center items-center
      max-w-7xl mx-auto
      px-10 mb-24 gap-y-11
      xl:px-0
      "
    >

      <h3
        className={`
        ${playfair.className} w-full font-bold text-2xl md:text-4xl text-center text-[#384B6B] max-w-[401px]
        `}
      >
        ¡Recibe, saborea y disfruta!
      </h3>

      <div className="flex flex-col relative items-center gap-y-9 md:flex-row justify-center gap-x-16 xl:gap-x-32">

        <div className="flex flex-col text-center justify-center items-center max-w-60">
          <p className="md:text-xl">Ordena tu café favorito por Rappi y obtén beneficios exclusivos.</p>
          <Link className={`${buttonVariants()} mt-8 px-16 text-white xl:text-xl xl:font-medium !bg-ml-primary xl:px-28 xl:py-6 uppercase max-w-[200px]`} href={"https://www.rappi.com.mx/restaurantes/1923797763-moonlatte-wellness-y-coffee"} target="_blank">
            ¡Ordena ya!
          </Link>
        </div>

        <Image
          src={imgSmartphone}
          width={203}
          height={377}
          alt="Ordena ahora"
          className="xl:w-[274px] xl:h-[508px]"
        />

      </div>

    </section>
  )

}

export default OrderNowSection
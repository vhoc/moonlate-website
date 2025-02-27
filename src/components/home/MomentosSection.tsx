"use client"
import { playfair } from "@/app/fonts"
import TestimonialItem from "./TestimonialItem"
import { buttonVariants } from "../ui/button"
import Link from "next/link"
import clsx from "clsx"
import { useInView } from "react-intersection-observer"

const MomentosSection = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className={`
        flex flex-col justify-center items-center
        max-w-7xl mx-auto
        px-10 py-20
        xl:py-24
        xl:px-0 
      `}
    >

      <h3
        className={`
          ${playfair.className} w-full font-bold text-4xl text-center text-[#384B6B] 
          mb-24
        `}
      >
        Momentos MoonLatte
      </h3>

      {/* ITEMs */}
      <div
        ref={ref}
        className={clsx(
          "flex flex-col gap-y-20 md:gap-x-8 md:flex-row",
          "slide-in-down",
          inView ? "is-visible" : ""
        )}
      >

        <TestimonialItem
          className="flex flex-col items-center md:flex-1"
          name="Shelly Shakman"
          stars={5}
          text='"I had cold brew coffee with plant based milk and it was amazing. One of the best coffee I had in Mexico so far. Biggest plus was the fact they had two desert options that are gluten free which is very rare. They had a brownie and another cake which was keto. The service was great, and overall great value for money. Thank you ❤️"'
        />

        <TestimonialItem
          className="flex flex-col items-center md:flex-1"
          name="Laura Salgado"
          stars={5}
          text='“Mi cafetería favorita de la isla, no solo por sus instalaciones sino también por su servicio, opciones saludables, sabor y ambiente. Muy recomendable”. “Me encanta que tengan opciones como brownies de harina de almendras endulzados con fruta del monje, asistí con mi amiga para conocer el lugar y probar el café, la comida y los postres y Les puedo decir que lo recomiendo mucho, buen ambiente, servicio y comida”.'
        />

        <TestimonialItem
          className="flex flex-col items-center md:flex-1"
          name="Norma Almazar"
          stars={5}
          text='“Asistí con mi amiga para conocer el lugar y probar el café, la comida y los postres y les puedo decir que lo recomiendo mucho, buen ambiente, servicio y comida…”'
        />

      </div>

      <Link className={`${buttonVariants()} mt-8 text-white xl:text-xl xl:font-medium !bg-ml-primary xl:px-8 xl:py-6 uppercase`} href="https://www.google.com/search?sa=X&sca_esv=16afa8dc77c0fa71&biw=2560&bih=1321&sxsrf=AHTn8zpPtZ-MlvEUDPaSxJFPTbYB58zHCA:1739479665660&kgmid=/g/11frp14tsx&q=Moonlatte&shndl=30&shem=lcuac,uaasie&source=sh/x/loc/uni/m1/1&kgs=dd85102abfec56a0#lrd=0x85f1a936a4608257:0x1449a98810f8bfcd,1,,,," target="_blank">
        Más reseñas
      </Link>

    </section>
  )

}

export default MomentosSection
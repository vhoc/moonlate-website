"use client";
import { playfair } from "@/app/fonts"
import Image from "next/image"
import imgTiltedPhone from "@/../public/img/tilted-smartphone.png"
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const AppSection = () => {

  const { ref: refLeft, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: refRight, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className="
      flex flex-col justify-center items-center
      max-w-7xl mx-auto
      px-10 mt-24 mb-32 gap-y-11
      xl:px-0
      "
    >

      <h3
        className={`
        ${playfair.className} w-full font-bold text-2xl md:text-4xl text-center text-[#384B6B] max-w-[401px]
        `}
      >
        Próximamente
      </h3>

      <div className="flex flex-col-reverse relative items-center gap-y-9 md:flex-row justify-center gap-x-16 xl:gap-x-32 md:mt-10 xl:mt-[79px]">

        <Image
          ref={refLeft}
          src={imgTiltedPhone}
          width={232}
          height={188}
          alt="Ordena ahora"
          className={clsx(
            "md:w-[310px] md:h-[251px] xl:w-[427px] xl:h-[347px]",
            "slide-in-left",
            leftInView ? "is-visible" : ""
          )}
        />

        <div
          ref={refRight}
          className={clsx(
            "flex flex-col text-center justify-center items-center max-w-60",
            "slide-in-right",
            rightInView ? "is-visible" : ""
          )}
        >
          <p className={`${playfair.className} font-bold text-4xl xl:text-5xl text-ml-secondary`}>MOONLATTE</p>
          <p className={`${playfair.className} font-bold text-2xl xl:text-[40px] text-ml-primary`}>App</p>
          
        </div>

      </div>

    </section>
  )
 
}

export default AppSection
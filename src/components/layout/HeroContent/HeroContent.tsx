"use client";
import Image from "next/image";
import { playfair } from "@/app/fonts";
import { buttonVariants } from "../../ui/button";
import Link from "next/link";
import imgLogo from "@/../public/img/logo.png";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const HeroContent = () => {

  const { ref: refLogo, inView: logoInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: refMoonlatte, inView: moonLatteInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <Image
        ref={refLogo}
        width={288}
        height={288}
        src={imgLogo}
        alt="Moonlatte Logo"
        className={clsx(
          "w-[69px] h-[69px] md:w-48 md:h-48 xl:w-72 xl:h-72 z-10",
          "slide-in-left",
          logoInView ? "is-visible" : ""
        )}
      />

      <div
        ref={refMoonlatte}
        className={clsx(
          "flex flex-col justify-center z-10",
          "slide-in-right",
          moonLatteInView ? "is-visible" : ""
        )}
      >
        <div className="flex flex-col justify-center items-center gap-y-2">
          <h1 className={`${playfair.className} text-4xl md:text-5xl xl:text-7xl font-bold text-white`}>
            MOONLATTE
          </h1>
          <h2 className={`${playfair.className} text-base md:text-2xl xl:text-4xl text-white`}>
            WELLNESS & COFFEE
          </h2>
        </div>

        <div
          className={clsx(
            "flex gap-4 justify-center items-center mt-4",
          )}
        >
          <Link className={`${buttonVariants()}  text-white xl:text-xl xl:font-medium !bg-ml-primary xl:px-8 xl:py-6 uppercase`} href="https://wa.me/message/KVWH2AMAV43AL1" target="_blank">
            Ordenar ahora
          </Link>

          <Link className={`text-white xl:text-xl xl:font-medium xl:px-8 xl:py-6 uppercase`} href="/conocenos">
            Conócenos
          </Link>
        </div>
      </div>
    </>
  )

}

export default HeroContent;
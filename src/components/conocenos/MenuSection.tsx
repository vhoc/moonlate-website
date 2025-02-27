"use client";
import { playfair } from "@/app/fonts";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import imgCoffeeBread from "@/../public/img/coffee-bread-illustration.png";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const MenuSection = () => {

  const { ref: refMessage, inView: messageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: refCoffee, inView: coffeeInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
        className="
        flex flex-col justify-center items-center
        max-w-7xl mx-auto
        px-10 my-24 gap-y-11
        xl:px-0
        "
      >
        <h3
          className={`
          ${playfair.className} w-full font-bold text-2xl md:text-4xl text-center text-[#384B6B] 
          `}
        >
          Nuestro Menú
        </h3>

        <div
          className={
            "flex flex-col md:flex-row text-center justify-center w-full max-w-7xl xl:px-28"          
          }
        >

          <div
            ref={refMessage}
            className={clsx(
              "flex flex-col md:flex-1 justify-center items-center xl:gap-y-6",
              "slide-in-left",
              messageInView ? "is-visible" : ""
            )}
          >
            <p className="md:text-xl xl:text-3xl">¡Descúbrelo!</p>
            <p className="md:text-xl xl:text-3xl">Encontrarás sabores que te sorprenderán.</p>
            <Link className={`${buttonVariants()} mt-8 px-16 text-white xl:text-xl xl:font-medium !bg-ml-primary xl:px-28 xl:py-6 uppercase `} href="https://drive.google.com/file/d/1YdaGToTQ6joC12YXB9x8jCgGCh7xqxcQ/view?usp=share_link" target="_blank">
              Menú
            </Link>
          </div>

          <div
            ref={refCoffee}
            className={clsx(
              "hidden md:flex md:justify-center md:items-center md:flex-1",
              "slide-in-right",
              coffeeInView ? "is-visible" : ""
            )}
          >
            <Image
              src={imgCoffeeBread}
              width={269}
              height={269}
              alt="Coffee & Bread"
              className="xl:w-80 xl:h-80"
            />
          </div>
          
        </div>
      </section>
  )
}

export default MenuSection
"use client";
import { playfair } from "@/app/fonts"
import { Input } from "../ui/input"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const InvoiceRequestFormSection = () => {

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
        bg-ml-primary px-10 py-24 t-28
          flex flex-col justify-center items-center
          gap-y-16
          sm:px-24 
          "
    >
      <h3
        className={`
          ${playfair.className} w-full font-bold text-2xl md:text-4xl text-center text-white
        `}
      >
        Solicitud de factura
      </h3>

      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl gap-2">

        {/* XL: LEFT SECTION OF THE FORM */}
        <div
          ref={refLeft}
          className={clsx(
            "flex flex-col w-full gap-2",
            "slide-in-right",
            leftInView ? "is-visible" : ""
          )}
        >
          <Input placeholder="Razón social" className="bg-white text-base" />
          <Input placeholder="Dirección fiscal" className="bg-white text-base" />
          <Input placeholder="RFC" className="bg-white text-base" />
          <Input placeholder="Régimen fiscal" className="bg-white text-base" />
        </div>

        {/* XL: RIGHT SECTION OF THE FORM */}
        <div
          ref={refRight}
          className={clsx(
            "flex flex-col w-full gap-2",
            "slide-in-left",
            rightInView ? "is-visible" : ""
          )}
        >
          <Input placeholder="Uso del CFDI" className="bg-white text-base" />
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Forma de pago" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Efectivo</SelectItem>
              <SelectItem value="dark">Tarjeta de crédito</SelectItem>
              <SelectItem value="system">Tarjeta de débito</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Folio del ticket" className="bg-white text-base" />
          <Input type="email" placeholder="Correo electrónico" className="bg-white text-base" />
        </div>        

      </div>

      <Link className={`${buttonVariants()} text-white xl:text-xl xl:font-medium !bg-ml-secondary xl:px-8 xl:py-6 uppercase`} href="#" target="_blank">
        SOLICITAR FACTURA
      </Link>

    </section>
  )

}

export default InvoiceRequestFormSection
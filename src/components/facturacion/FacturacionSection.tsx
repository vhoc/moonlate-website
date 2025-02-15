
import { playfair } from "@/app/fonts";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import imgFacturacion from "@/../public/img/facturacion-illustration.png";

const FacturacionSection = () => {
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
          Facturación
        </h3>

        <div className="flex flex-col md:flex-row-reverse text-center justify-center w-full max-w-7xl xl:px-28">

          <div className="flex flex-col md:flex-1 justify-center items-center xl:gap-y-6">
            <p className="md:text-xl xl:text-xl max-w-[496px]">
            Para generar tu factura por favor llega el formulario de abajo y te la haremos llegar lo antes posible.
            </p>
            
          </div>

          <div className="hidden md:flex md:justify-center md:items-center md:flex-1">
            <Image
              src={imgFacturacion}
              width={200}
              height={200}
              alt="Coffee & Bread"
              className="xl:w-[282px] xl:h-[282px"
            />
          </div>
          
        </div>
      </section>
  )
}

export default FacturacionSection
import Image from "next/image";
import imgCoffeeBreak from "@/../public/img/coffee-break.png";
import imgDelicious from "@/../public/img/delicious.png";

const CoffeeBreakSection = () => {
  return (
    <section
      className="
      bg-ml-primary px-10 py-16 mt-28
      flex flex-col justify-center items-center
      gap-y-8
      sm:px-24 
      "
    >
      <div className="flex w-full max-w-7xl">
        <div className="hidden xl:flex flex-1 justify-center">
          <Image
            src={imgDelicious}
            width={150}
            height={117}
            alt="Delicious & Fresh"
            className=""
          />
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={imgCoffeeBreak}
            width={150}
            height={117}
            alt="Coffee Break"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 justify-center items-center xl:flex-row xl:gap-x-8 max-w-7xl">
        <p
          className="
          text-center
          text-white
          "
        >
          Nuestra esencia se define por la excelencia de nuestro café, 
          junto a una amplia variedad de postres y panes elaborados artesanalmente. 
          Complementamos esta oferta con un menú diseñado para desayunos y almuerzos, 
          donde cada plato se prepara con ingredientes frescos y selectos 
          que resaltan en cada bocado.
        </p>

        <p
          className="
          text-center
          text-white
          "
        >
          Priorizamos la atención cercana y personalizada. Nuestro equipo se esmera 
          por guiar a los clientes hacia elecciones que se adapten a sus gustos, en 
          un espacio donde cada detalle —desde la iluminación hasta la disposición de 
          las mesas— busca crear una experiencia acogedora que invite a 
          disfrutar sin prisas.
        </p>
      </div>
    </section>
  )
}

export default CoffeeBreakSection
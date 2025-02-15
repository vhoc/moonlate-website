import { playfair } from "@/app/fonts"

const AvisoSeguridadSection = () => {

  return (
    <section
      className="
      flex flex-col justify-center items-center
      max-w-7xl mx-auto
      px-10 my-48 gap-y-11
      xl:px-0
      "
    >
       
      <h3
        className={`
        ${playfair.className} w-full font-bold text-2xl md:text-4xl text-center text-[#384B6B] 
        `}
      >
        Aviso de seguridad simplificado
      </h3>

      <p className="text-center text-ml-secondary xl:text-xl">
        El Responsable del tratamiento y protección de sus datos personales es Operadora AMEKA, 
        con domicilio en Av. Eugenio Echeverria Castellot 82, CP. 24115, Ciudad del Carmen, Campeche, 
        México. Los datos personales que recabamos son utilizados únicamente para la siguiente finalidad:
      </p>

      <p className="text-center text-ml-secondary font-bold xl:text-xl">
        Realizar la facturación electrónica correspondiente a su consumo.
      </p>

    </section>
  )

}

export default AvisoSeguridadSection
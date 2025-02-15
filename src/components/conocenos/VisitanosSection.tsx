import { playfair } from "@/app/fonts"
import Link from "next/link"

const VisitanosSection = () => {

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
        Visítanos
      </h3>

      <iframe
        className="w-full max-w-[239px] h-[345px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[1280px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1471494703674!2d-91.83631982309055!3d18.65739166497736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f1a936a4608257%3A0x1449a98810f8bfcd!2sMoonlatte!5e0!3m2!1ses!2smx!4v1739575646716!5m2!1ses!2smx" width="239" height="345" loading="lazy" >
      </iframe>

      <div className="flex flex-col md:flex-row gap-x-4 md:justify-evenly gap-y-4 w-full max-w-7xl">

        <div className="flex flex-col text-white text-center">
          <p className="font-bold xl:text-xl">Lunes a Viernes</p>
          <p className="xl:text-xl">8:00 AM a 10:00 PM</p>
        </div>

        <div className="flex flex-col text-white text-center">
          <p className="font-bold xl:text-xl">Sábado</p>
          <p className="xl:text-xl">9:00 AM a 2:00 PM</p>
        </div>

        <div className="flex flex-col text-white text-center">
          <p className="font-bold xl:text-xl">Domingo</p>
          <p className="xl:text-xl">5:00 PM a 10:00 PM</p>
        </div>

      </div>

      <div className="flex flex-col text-white text-center">
        <p className="font-bold xl:text-xl">Ordena al</p>
        <Link className="text-xl xl:text-4xl" href={"tel:9381783159"}>
          938 178 3159
        </Link>
      </div>

    </section>
  )

}

export default VisitanosSection
import HomeSection from "@/components/home/HomeSection";
import CoffeeBreakSection from "@/components/home/CoffeeBreakSection";
import CarouselSection from "@/components/home/CarouselSection";
import MomentosSection from "@/components/home/MomentosSection";
import imgOrigenes from "@/../public/img/origenes.png";
import imgSuperacion from "@/../public/img/superacion.png";
import imgCompromiso from "@/../public/img/compromiso.png";


export default function HomePage() {
  return (
    <main >

      <HomeSection
        imageSrc={imgOrigenes}
        imagePriority
        imageFetchPriority="high"
        title="Orígenes y Pasión"
      >
        <p
          className="
          w-full 
          text-center
          md:text-left
          "
        >
          Moonlatte nació en 2019 como un proyecto arraigado en algo más profundo que el café:
          la conexión humana. Inspirados por los momentos que se crean alrededor de una taza humeante,
          buscamos transformar un ritual cotidiano en una experiencia memorable.
        </p>
        <p
          className="
          text-center
          md:text-left
          "
        >
          Nuestro objetivo fue cultivar un espacio donde la comunidad encontrara un refugio de calidez y autenticidad.
          Cada grano seleccionado, cada método de preparación y cada detalle en nuestro local surgieron de esa convicción:
          redefinir lo que significaba disfrutar del café en nuestra región.
        </p>
      </HomeSection>

      <HomeSection
        imageSrc={imgSuperacion}
        title="Superación creativa"
        reverse
      >
        <p
          className="
          text-center
          md:text-right
          "
        >
          Al inicio hubo muchos retos. Sin embargo, cada dificultad se transformó en una oportunidad 
          de pensar creativamente y de innovar en las experiencias de sabor y de servicio que ofrecemos.
        </p>
        <p
          className="
          text-center
          md:text-right
          "
        >
          Hoy, esa capacidad de reinventarnos guía cada decisión, desde la selección de proveedores 
          hasta la forma en que imaginamos los próximos diez años.
        </p>
      </HomeSection>

      <HomeSection
        imageSrc={imgCompromiso}
        title="Compromiso"
      >
        <p
          className="
          text-center
          md:text-left
          "
        >
          Para nosotros, el impacto que dejamos lo es todo. Cada cliente es invitado a un ciclo de bienestar: 
          ofrecemos calidad en cada sorbo, y un ambiente donde desconectar del estrés diario. 
        </p>
        <p
          className="
          text-center
          md:text-left
          "
        >
          Priorizamos el crecimiento de nuestro equipo con programas de formación y espacios de diálogo abierto. 
          Creemos que un café, cuando se construye con propósito, puede ser motor de transformación colectiva.
        </p>
      </HomeSection>

      <CoffeeBreakSection />

      <CarouselSection />

      <MomentosSection />

    </main>
  );
}

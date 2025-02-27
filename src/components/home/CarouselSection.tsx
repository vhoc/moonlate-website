import { Card, CardContent } from "@/components/ui/card"
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ClientCarousel from "./ClientCarousel"
import Image from "next/image"
import fs from "fs"
import path from "path"

interface CarouselImage {
  filepath: string
  filename: string
  file_ext: string
  alt: string
}

const getCarouselImages = (): CarouselImage[] => {
  const carouselDir = path.join(process.cwd(), 'public/img/carousel')
  const files = fs.readdirSync(carouselDir)

  return files.map(file => {
    const filename = path.parse(file).name
    const extension = path.parse(file).ext
    return {
      filepath: `/img/carousel/${file}`,
      filename,
      file_ext: extension,
      alt: `Carousel image ${filename}`
    }
  })
}

const CarouselSection = () => {

  const images = getCarouselImages()

  if (images && images.length > 0) {
    
    return (
      <section
        className={
          `flex justify-center
          max-w-7xl mx-auto 
          py-28`
        }
      >
        <ClientCarousel
          className="w-full max-w-[240px] sm:max-w-sm md:max-w-xl lg:max-w-[800px] xl:max-w-[1000px]"          
        >
          <CarouselContent>

            {
              images.map((image, index) => (
                <CarouselItem key={`carousel-image-${index}`} className="md:basis-1/2 lg:basis-1/3" >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={image.filepath}
                          width={200}
                          height={200}
                          alt={image.alt}
                          // fill
                          style={{ objectFit: "cover" }}
                          className="w-full h-full object-cover"
                          // className="
                          //   aspect-square
                          //   w-[240px] h-[240px] 
                          //   sm:w-[384px] sm:h-[384px]
                          //   md:w-[260px] md:h-[260px] 
                          //   lg:w-[320px] lg:h-[320px] 
                          // "
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            }



          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />

        </ClientCarousel>
      </section>
    )

  }

  return null
}



export default CarouselSection
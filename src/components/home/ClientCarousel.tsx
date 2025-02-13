"use client"
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "../ui/carousel";

interface ClientCarouselProps {
  className?: string
  children?: React.ReactNode | React.ReactNode[];
}
const ClientCarousel = ({ className, children }: ClientCarouselProps) => {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      className={className}
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      {children}
    </Carousel>
  )

}

export default ClientCarousel;
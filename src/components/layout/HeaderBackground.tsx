"use client"
import { usePathname } from "next/navigation"
import Image from "next/image";

interface HeaderBackgroundProps {
  children?: React.ReactNode | React.ReactNode[]
}

const HeaderBackground = ({ children }: HeaderBackgroundProps) => {

  const pathname = usePathname()

  const getImageSrc = () => {
    switch (pathname) {
      case '/conocenos':
        return '/img/conocenos-header-bg.webp';
      case '/facturacion':
        return '/img/facturacion-header-bg.webp';
      default:
        return '/img/home-header-bg.webp';
    }
  };

  const getImageAlt = () => {
    switch (pathname) {
      case '/conocenos':
        return 'Conócenos Header Background';
      case '/facturacion':
        return 'Facturación Header Background';
      default:
        return 'Home Header Background';
    }
  }


  const getMdImageSrc = () => {
    if (pathname === '/') {
      return '/img/home-header-bg-md.webp';
    }
    return getImageSrc(); // Use the default for other routes if no specific md image exists
  };

  const getXlImageSrc = () => {
    if (pathname === '/') {
      return '/img/home-header-bg-xl.webp';
    }
    return getImageSrc(); // Use the default for other routes if no specific xl image exists
  };


  const imageSrc = getImageSrc();
  const mdImageSrc = getMdImageSrc();
  const xlImageSrc = getXlImageSrc();
  const imageAlt = getImageAlt();


  return (
    <div className="relative w-full h-96 md:h-[512px] xl:h-[855px] flex flex-col md:gap-x-24 justify-center items-center md:flex-row overflow-hidden">

      {/* Mobile Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="block md:hidden"
        priority // Potentially important for LCP on mobile
      />

      {/* Tablet Image */}
      <Image
        src={mdImageSrc}
        alt={imageAlt}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="hidden md:block xl:hidden"
        priority // Potentially important for LCP on tablet if relevant
      />

      {/* XL Image */}
      <Image
        src={xlImageSrc}
        alt={imageAlt}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="hidden xl:block"
        priority // Potentially important for LCP on large screens if relevant
      />

      {children}
    </div>
  )

}

export default HeaderBackground
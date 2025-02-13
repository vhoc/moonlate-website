"use client"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface HeaderBackgroundProps {
  children?: React.ReactNode | React.ReactNode[]
}

const HeaderBackground = ({ children }: HeaderBackgroundProps) => {

  const pathname = usePathname()

  const getHeaderBackground = () => {
    switch (pathname) {
      case '/conocenos':
        return 'bg-[url(/img/conocenos-header-bg.webp)]';
      case '/facturacion':
        return 'bg-[url(/img/facturacion-header-bg.webp)]';
      default:
        return 'bg-[url(/img/home-header-bg.webp)] md:bg-[url(/img/home-header-bg-md.webp)] xl:bg-[url(/img/home-header-bg-xl.webp)]';
    }
  };

  return (
    <div className={
      cn(`${getHeaderBackground()} bg-cover bg-center w-full h-96 md:h-[512px] xl:h-[855px] flex flex-col md:gap-x-24 justify-center items-center md:flex-row`)
    }>
      {children}
    </div>
  )

}

export default HeaderBackground
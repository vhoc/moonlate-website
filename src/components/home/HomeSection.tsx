
import Image from "next/image";
import { playfair } from "@/app/fonts";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { type ReactNode } from "react";

interface HomeSectionProps {
  imageSrc: string | StaticImport;
  imagePriority?: boolean;
  imageFetchPriority?: 'high' | 'low';
  title: string
  children?: ReactNode | ReactNode[]
  reverse?: boolean
}

const HomeSection = ( { imageSrc, imagePriority, imageFetchPriority, title, children, reverse }: HomeSectionProps ) => {

  return (
    <section
      className={`
      relative
      flex flex-col justify-center items-center
      max-w-7xl mx-auto
      ${ reverse ? 'md:flex-row-reverse' : 'md:flex-row' } md:gap-x-10 
      px-10 my-24 gap-y-11
      ${ reverse ? 'md:pr-0' : 'md:pl-0' }
      xl:px-0
      `}
    >

      <Image
        src={imageSrc}
        width={240}
        height={240}
        alt="Orígenes y Pasión"
        style={{ objectFit: "cover" }}
        priority={imagePriority}
        fetchPriority={imageFetchPriority}
        // objectFit="cover"
        className="
        w-[240px] h-[240px] rounded-full
        md:w-[380px] md:h-[380px] md:rounded-none 
        lg:w-[509px] lg:h-[480px]
        "
      />

      <div className="flex flex-col gap-4 w-full max-w-[428px] xl:max-w-[469px]">
        <h3
          className={`
          ${playfair.className} w-full font-bold text-2xl text-center text-[#384B6B] 
          ${ reverse ? 'md:text-right' : 'md:text-left' }
          `}
        >
          {title}
        </h3>
        {children}
      </div>

    </section>
  )

}

export default HomeSection
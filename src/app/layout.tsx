import "@/styles/globals.css";
import { lato, playfair } from "./fonts";
import { type Metadata } from "next";
import Image from "next/image";
import imgLogo from "@/../public/img/logo.png";
import Link from "next/link";
import HeaderBackground from "@/components/layout/HeaderBackground";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
import { buttonVariants } from "@/components/ui/button";
import ClientNavigationMenu from "@/components/layout/ClientNavigationMenu";
import MenuButtonWrapper from "@/components/layout/MenuButtonWrapper";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Moonlatte",
  description: "Wellness & Coffee",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" className={`${lato.className}`}>
      <body>

        <header
          className="relative mb-28"
        >
          <HeaderBackground>

            {/* NAV MENU (MOBILE) */}
            <Sheet>

              <SheetTrigger className="md:hidden ">
                <MenuButtonWrapper>
                  <GiHamburgerMenu className="text-3xl text-white" />
                </MenuButtonWrapper>
              </SheetTrigger>

              <SheetContent className="md:hidden">
                <SheetHeader className="sm:text-center">
                  <SheetTitle >Menú</SheetTitle>
                </SheetHeader>
                <NavigationMenu className={`md:hidden z-10 w-full max-w-full`}>
                  <NavigationMenuList className="flex flex-col gap-4 mt-8 w-full">

                    <NavigationMenuItem className="w-full">
                      <Link href="/" legacyBehavior passHref >
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${playfair.className} !text-2xl !font-bold !text-ml-primary !w-full`}>
                          MoonLatte
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="/conocenos" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${playfair.className} !text-2xl !font-bold !text-ml-primary !w-full`}>
                          Conócenos
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="/facturacion" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${playfair.className} !text-2xl !font-bold !text-ml-primary !w-full`}>
                          Facturación
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                  </NavigationMenuList>
                </NavigationMenu>
              </SheetContent>
            </Sheet>


            {/* NAV MENU (TABLET & DESKLTOP) */}
            <ClientNavigationMenu className="hidden md:block !max-w-full !w-full fixed top-0 py-5 z-10 transition-all duration-300">
              <NavigationMenuList className="gap-10">

                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${playfair.className} font-bold !text-2xl bg-transparent text-white`} >
                      MoonLatte
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/conocenos" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${playfair.className} font-bold !text-2xl bg-transparent text-white`} >
                      Conócenos
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/facturacion" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${playfair.className} font-bold !text-2xl bg-transparent text-white`} >
                      Facturación
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </ClientNavigationMenu>

            <Image
              width={288}
              height={288}
              src={imgLogo}
              alt="Moonlatte Logo"
              className="w-[69px] h-[69px] md:w-48 md:h-48 xl:w-72 xl:h-72"
            />

            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center items-center gap-y-2">
                <h1 className={`${playfair.className} text-4xl md:text-5xl xl:text-7xl font-bold text-white`}>
                  MOONLATTE
                </h1>
                <h2 className={`${playfair.className} text-base md:text-2xl xl:text-4xl text-white`}>
                  WELLNESS & COFFEE
                </h2>
              </div>
              
              <div className="flex gap-4 justify-center items-center mt-4">
                <Link className={`${buttonVariants()}  text-white xl:text-xl xl:font-medium !bg-ml-primary xl:px-8 xl:py-6 uppercase`} href="https://wa.me/message/KVWH2AMAV43AL1" target="_blank">
                  Ordenar ahora
                </Link>

                <Link className={`text-white xl:text-xl xl:font-medium xl:px-8 xl:py-6 uppercase`} href="/conocenos">
                  Conócenos
                </Link>
              </div>
            </div>

          </HeaderBackground>
        </header>

        {children}

        <Footer imgLogo={imgLogo} />

      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { lato, playfair } from "./fonts";
import { type Metadata } from "next";
import Image from "next/image";
import imgLogo from "@/../public/img/logo.png";
import Link from "next/link";
import TransitionLink from "@/components/utils/TransitionLink";
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
import ClientNavigationMenu from "@/components/layout/ClientNavigationMenu";
import MenuButtonWrapper from "@/components/layout/MenuButtonWrapper";
import Footer from "@/components/layout/Footer";
import HeroContent from "@/components/layout/HeroContent/HeroContent";

export const metadata: Metadata = {
  title: "Moonlatte",
  description: "Wellness & Coffee",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    images: '/img/og-moonlatte.png',
  }
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
                <NavigationMenu className={`md:hidden z-20 w-full max-w-full`}>
                  <NavigationMenuList className="flex flex-col gap-4 mt-8 w-full">

                    <NavigationMenuItem className="w-full">
                      <Link href="/"  passHref >
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${playfair.className} !text-2xl !font-bold !text-ml-primary !w-full`}>
                          MoonLatte
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="/conocenos"  passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${playfair.className} !text-2xl !font-bold !text-ml-primary !w-full`}>
                          Conócenos
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="/facturacion"  passHref>
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
            <ClientNavigationMenu className="hidden md:block !max-w-full !w-full fixed top-0 py-5 z-20 transition-all duration-300">
              <NavigationMenuList className="gap-10">

                <NavigationMenuItem>
                  <TransitionLink href="/"  passHref>
                    <span className={`${navigationMenuTriggerStyle()} ${playfair.className} font-bold !text-2xl bg-transparent text-white`} >
                      MoonLatte
                    </span>
                  </TransitionLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <TransitionLink href="/conocenos"  passHref>
                    <span
                    className={`${navigationMenuTriggerStyle()} ${playfair.className} font-bold !text-2xl bg-transparent text-white`} >
                      Conócenos
                    </span>
                  </TransitionLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <TransitionLink href="/facturacion"  passHref>
                    <span className={`${navigationMenuTriggerStyle()} ${playfair.className} font-bold !text-2xl bg-transparent text-white`} >
                      Facturación
                    </span>
                  </TransitionLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </ClientNavigationMenu>

            <HeroContent />

          </HeaderBackground>
        </header>

        {children}

        <Footer imgLogo={imgLogo} />

      </body>
    </html>
  );
}

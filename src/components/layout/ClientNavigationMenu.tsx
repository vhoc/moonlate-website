"use client"

import { NavigationMenu } from "../ui/navigation-menu"
import { useState, useEffect } from "react"

interface ClientNavigationMenuProps {
  className?: string
  children?: React.ReactNode | React.ReactNode[]
}

const ClientNavigationMenu = ({ className, children }: ClientNavigationMenuProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <NavigationMenu 
      className={`${className} 
        ${isScrolled ? "bg-gradient-to-b from-black/100 to-black/20 backdrop-blur-sm shadow-sm" : ""}`}
    >
      {children}
    </NavigationMenu>
  )
}

export default ClientNavigationMenu
"use client"
import { useState, useEffect } from "react"

const MenuButtonWrapper = ({ children }: { children: React.ReactNode }) => {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`fixed z-10 top-0 left-0 p-4 flex justify-end items-center  w-full ${isScrolled ? "bg-gradient-to-b from-black/100 to-black/20 backdrop-blur-sm shadow-sm" : ""}`}>
      {children}
    </div>
  )

}

export default  MenuButtonWrapper
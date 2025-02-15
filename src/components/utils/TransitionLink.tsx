"use client"
import React from "react"
import Link from "next/link"
import { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"

const sleep = async (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode
  href: string
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps ) => {

  const router = useRouter()

  const handleTransition = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()

    // TODOS:
    // Run exit animation
    // Run enter animation
    const body = document.querySelector("body")
    body?.classList.add("page-transition")
    await sleep(140)
    router.push(href)
    await sleep(140)
    body?.classList.remove("page-transition")
  }

  return (
    <Link
      onClick={handleTransition}
      href={href} { ...props }
    >
      {children}
    </Link>
  )

}

export default TransitionLink
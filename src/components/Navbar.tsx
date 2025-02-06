"use client";

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import type React from "react"
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image src="/images/logo.png" alt="Ludiclab" width="100" height="100" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#servicios">Servicios</NavLink>
              <NavLink href="#ludiclab">LudicLab</NavLink>
              <NavLink href="#contacto">Contacto</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#servicios" mobile>
              Servicios
            </NavLink>
            <NavLink href="#ludiclab" mobile>
              LudicLab
            </NavLink>
            <NavLink href="#contacto" mobile>
              Contacto
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => {
  const baseClasses = "text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
  const mobileClasses = mobile ? "block" : "inline-block"

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const section = document.querySelector(href) as HTMLElement
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Ajuste para el navbar fijo
        behavior: "smooth",
      })
    }
  }

  return (
    <a href={href} onClick={handleClick} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  )
}


export default Navbar

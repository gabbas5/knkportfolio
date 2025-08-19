"use client"
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Props } from "../typedefinitions";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; 
  
  const links:Props[]=[
    { name:"Home",href:"/Tameer"},
    { name:"About",href:"/Tameer/about" },
    { name:"Projects",href:"/Tameer/projects"},
    {name:"Gallary", href:"/Tameer/gallary"},
    { name:"Contact",href:"/Tameer/contact"},
    {name:"Employee Login", href:"/knk/employeeLogin"},
    
  ]
  

const NavLinks = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-300 shadow-md px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-2 overflow-hidden">
        {/* Logo */}
        <div className="text-[#5f0f4e] text-base md:text-lg font-bold whitespace-nowrap truncate max-w-[60%] sm:max-w-[50%] md:max-w-[40%]">
          <Link href="/">Tameer (SMC-PVT Ltd)</Link>
        </div>

        {/* Hamburger - mobile only */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-[#5f0f4e]" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-[#5f0f4e]" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
       <ul className="hidden sm:flex items-center gap-3 md:gap-4 lg:gap-8 text-[#5f0f4e] text-sm md:text-sm lg:text-base whitespace-nowrap">
  {links.slice(0, -1).map((link, indx) => (
    
    <li key={indx}>
      <Link
        href={link.href}
        className={clsx("hover:underline", {
          "text-blue-600": pathname === link.href,
        })}
      >
        {link.name}
      </Link>
    </li>
  ))}
  <li>
     <Link href="https://www.knkassociates.com" target="_blank">
              <button className="rounded-md bg-[#5f0f4e] px-2 py-1 text-white transition-colors duration-200 hover:bg-[#5f0f4e]/80
              lg:px-5 lg:py-3 lg:rounded-lg">
                Employee Login
              </button>
            </Link>
    
  </li>
</ul>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="sm:hidden mt-4 space-y-3 text-[#5f0f4e]">
          {links.map((link, indx) => (
            <li key={indx}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={clsx("block px-2 py-1 hover:bg-gray-200 rounded", {
                  "text-blue-600": pathname === link.href,
                })}
              >
                {link.name}
              </Link>
            </li>
          ))}
          
        </ul>
      )}
    </nav>
  );
};

export default NavLinks;

"use client"
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {Props} from "@/components/typedefinitions"
  
  const links:Props[]=[
    { name:"Home",href:"/KNK"},
    { name:"About",href:"/KNK/about" },
    { name:"Projects",href:"/KNK/projects"},
    {name:"Gallary", href:"/KNK/gallary"},
    { name:"Contact",href:"/KNK/contact"},
    {name:"Employee Login", href:"/knk/employeeLogin"},
    
  ]
  

const NavLinks = () => {
  const pathname=usePathname();
  console.log(pathname);
  return (
    <>
    <div className="flex flex-row justify-between bg-gray-100">

    <div className="mt-3">K&K SMC-limited</div>
    <div>
     <ul className="flex justify-between">
      {links.map((link,indx)=>{
        return(
            <Link  key={indx} href={link.href}>
          <li className= {clsx("m-2 bg-gray-200",{"bg-sky-100 text-blue-600":pathname ===link.href,})}>
            {link.name}
            </li>
            </Link>
        )
      })}
        
        </ul>
    </div>
     
    </div>
    </>
  )
}

export default NavLinks;
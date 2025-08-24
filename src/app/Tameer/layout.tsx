import NavLinks from "@/components/ui/navtameer";
import { Metadata } from "next";
export const metadata:Metadata={
  title:"Tameer "
}
export default function Layout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <>
        <NavLinks/>
        <div>
            {children}
        </div>
        </>
    )
}
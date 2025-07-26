import NavLinks from "@/components/ui/navtahmeer"
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
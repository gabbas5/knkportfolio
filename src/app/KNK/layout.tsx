import NavLinks from "@/components/ui/navknk"
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
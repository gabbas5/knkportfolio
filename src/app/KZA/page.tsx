import Image from "next/image";
import Footer from "@/components/ui/footer";
const Home = () => {
  return (
    <>
    <div className="relative">
    {/**KZA hom epage */}
      <Image src= "https://framerusercontent.com/images/IUEoy5DmZnBD6y5dWRgJGhiQM.jpg"
    height={1000}
    width={960}
    alt="Machine Image"/>
     
    
     
   <div>
 Experts in MEP Consultancy and Design. Since 2020, K&Z Associates
  has been a trusted name in MEP design and consultancy...",
   </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home;
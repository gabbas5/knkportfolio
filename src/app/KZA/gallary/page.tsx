import GallaryCard from '@/components/gallaryCard';
import { knkgallary } from '@/components/data/gallary';
import Footer from '@/components/ui/footer';
import { Metadata } from "next";
export const metadata:Metadata={
  title:"kza Gallary"
}
const Gallary = () => {
  return (
    <div> 
    <GallaryCard info={knkgallary}/>
    <Footer/>
    </div>
  )
}

export default Gallary;
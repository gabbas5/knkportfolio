import Image from "next/image";
import Footer from "@/components/ui/footer";

import Link from "next/link";
import Slider from "@/components/ui/slider";

export default function Page() {
 

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-20 justify-between rounded-lg bg-blue-200 lg:font-extrabold lg:line p-4 justify-items-center">
       <div className="p-3">
        K&K Associates
        </div>
        <div>

         <ul className="flex justify-between items-center ">
          <li className="mr-12 hover:bg-red-500">
           <Link href="/KNK">
            <Image src="/logo/knkLogo.png"
             width={60}
            height={60}
            alt="company Image"/>
            </Link>
          </li>
          <li className="mr-12 hover:border-2">
            <Link href="/AZK">
            <Image src="/logo/kzLogo.png"
            width={60}
            height={60}
            alt="company Image"/>
            </Link>
            </li>
          <li className="mr-5 hover:bg-red-500">
            <Link href="/Tahmeer">
            <Image src="/logo/TaLogo.png"
            width={60}
            height={60}
            alt="company Image"/>
            </Link>
            </li>
         </ul>
        </div>
      </div>
        <div className="grid grid-cols-1 mt-1 m gap-1 md:grid-cols-2 md:gap-1 md:mt-1 md:text-sx ">
          {/* text  dive */}
          <div className="bg-gray-200 p-3 rounded-xl">
            <div className="">
                  <p className="justify-center shrink p-3 text-sm md:text-[11px] lg:text-[18px]">
                   <strong className="text-blue-500">

                   Welcome to K&K Associate  </strong>
                      Our passion is to provide high standard Mechanical, Electrical and Plumbing Services.
                    To discover the powerhouse behind innovative engineering, construction and cunsultancy
                    solutions.The K&K Group brings together three dynamics companies each excelling in its specialiezed domain.
                    Explore our companies below to find the right fit for yours needs.
              </p>
            </div>
            <div className="flex justify-around md:content-end">

              {/* three dives for links in the body */}
               <div className="flex justify-center items-center bg-blue-500 h-14 w-14 rounded-4xl text-center">
                 <Link href="/KNK" className="">
            <Image src="/logo/knkLogo.png" className="m-auto block"
             width={30}
             height={30}
             alt="company Image"/>
             </Link>
               </div>
               <div className="flex justify-center items-center bg-blue-500  h-14 w-14 rounded-4xl">
              <Link href="/AZK">
            <Image src="/logo/kzLogo.png"
            width={30}
            height={30}
            alt="company Image"/>
            </Link>
               </div>
               <div className="flex justify-center items-center bg-blue-500  h-14 w-14 rounded-4xl">
              <Link href="/Tahmeer">
            <Image src="/logo/TaLogo.png"
            width={30}
            height={30}
            alt="company Image"/>
            </Link>
               </div>
            </div>
           </div>  
              {/* Image dive */}
          <div className="md:h-full bg-gradient-to-r">
            <Slider/>
            </div>

        </div>
        <Footer/>

    </main>
    
  );
}

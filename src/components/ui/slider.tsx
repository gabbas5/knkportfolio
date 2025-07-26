"use client"
import { images } from "./sliderImages"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import { useState,useEffect } from "react";

{/** class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" */}
{/** "block w-full transition-all duration-500 ease-in-out" */}

const Slider = () =>{
    const [activeImage, setActiveImage]=useState(0);
    function clickNext(){
       activeImage===images.length-1 ? setActiveImage(0) : setActiveImage(activeImage+1);
      
     }
     function clickPrev(){
    
   
       activeImage=== 0 ? setActiveImage(images.length-1) : setActiveImage(activeImage-1);
      

     }
     useEffect(()=>{
        const timer=setTimeout(()=>{
            clickNext();
        },6000);
        return()=>{
            clearTimeout(timer);
        }

     },[activeImage])

  return(
        <>
      <div className="w-full">
    {images.map((pic,indx)=>(
     
        <div key={indx} className= {`${indx===activeImage ? "block w-full transition-all duration-500 ease-in-out" :"hidden"}`} >
            <Image
            src={pic.src}
            width={1000}
            height={960}
            alt="sliding pictures"
            
            />
        </div>
    ))}

     <div className="relative bottom-1 w-full flex justify-between items-center bg-blue-700">


         <div onClick={clickPrev} className="absolute w-4 left-1 bottom-3 right-10 bg-white">
        <ChevronLeftIcon/>
        </div>
         <div onClick={clickNext} className="absolute w-4 right-1 bottom-3 bg-white">
        <ChevronRightIcon/>
    </div> 
        </div>
    
   </div>
            </>
    )

}

export default Slider;
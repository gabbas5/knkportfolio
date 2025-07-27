"use client"
import { images } from "./sliderImages";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from "react";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full relative">
      {images.map((pic, indx) => (
        <div
          key={indx}
          className={`relative ${indx === activeImage ? "block" : "hidden"}`}
        >
          <Image
            src={pic.src}
            width={1000}
            height={960}
            alt="sliding pictures"
            priority={indx === 0}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white rounded-full cursor-pointer shadow-md hover:bg-gray-100" onClick={clickPrev} role="button" aria-label="Previous Slide">
        <ChevronLeftIcon className="w-6 h-6 text-black" />
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white rounded-full cursor-pointer shadow-md hover:bg-gray-100" onClick={clickNext} role="button" aria-label="Next Slide">
        <ChevronRightIcon className="w-6 h-6 text-black" />
      </div>
      {/* Dots for image indicators */}
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      {images.map((_, indx) => (
        <button
          key={indx}
          onClick={() => setActiveImage(indx)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            indx === activeImage ? "bg-blue-600 scale-110" : "bg-gray-300"
          }`}
          aria-label={`Go to slide ${indx + 1}`}
        />
      ))}
    </div>
    </div>
  );
};

export default Slider;






{/* 
    "use client"
import { images } from "./sliderImages"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import { useState,useEffect } from "react";


const Slider = () =>{
    const [activeImage, setActiveImage]=useState(0);

    useEffect(()=>{
        const timer=setTimeout(()=>{
            clickNext();
        },5000);
        return(()=>clearTimeout(timer));
        
     },[activeImage])

    function clickNext(){
       activeImage===images.length-1 ? setActiveImage(0) : setActiveImage(activeImage+1);
      
     }
     function clickPrev(){
    
   
       activeImage=== 0 ? setActiveImage(images.length-1) : setActiveImage(activeImage-1);
      

     }
     

  return(
        <>
      <div className="w-full relative">
    {images.map((pic,indx)=>(
     
        <div key={indx}
         className= {` relative ${indx===activeImage ? "block w-full transition-all duration-500 ease-in-out" :"hidden"}`} >
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
*/}
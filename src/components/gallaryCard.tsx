import Image from "next/image"
import type { Gallary } from "./data/gallary"
type GallaryCardProps={
    info:Gallary[]
}
const GallaryCard = ({info}:GallaryCardProps) => {
  return (
      <div className="grid grid-cols-1 gap-4 items-center px-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-col-0 ">

        {info.map((project)=>(
             
            <div key={project.id} className=" hover:scale-105 hover:border-black-800 w-full overflow-hidden relative">
               
                <Image
                src={project.src}
                alt="project Image"
                width={900}
                height={600}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-3 left-2 bg-black-200 bg-opacity-10 text-white p-3 rounded-md">
                   <h3 className="text-lg font-semibold">{project.title}</h3>
                    
                </div>
                
          </div>
                  
            
               ))}
    
      </div>
    
    )
  
}

export default GallaryCard;
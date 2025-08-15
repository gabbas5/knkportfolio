import Image from "next/image"
import type { Project } from "./data/projects"
type CardProps={
    info:Project[]
}

const Card = ({info}:CardProps) =>{
    
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {info.map((project)=>(
        
        <div key={project.title} className=" w-full overflow-hidden relative">
            <Image
            src={project.src}
            alt={project.title}
            width={600}
            height={600}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
         {/*Bottom-left overlay */} 
  <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-3 rounded-md">
    <h3 className="text-lg font-semibold">{project.title}</h3>
    <p className="text-sm">{project.location}</p>
    <p className="text-xs text-gray-300">{project.projectType}</p>
  </div>
</div>
              
        
    )
)}


   
</div>

)
}

export default Card;
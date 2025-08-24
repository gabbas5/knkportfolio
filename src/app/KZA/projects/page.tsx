import React from 'react'
import{kzaprojects} from "@/components/data/projects"
import Card from "@/components/card"
import { Metadata } from "next";
export const metadata:Metadata={
  title:"kza Projects"
}
const Projects = () => {

  return (
    
      <Card info={kzaprojects}/> 
    
  )
}

export default Projects;
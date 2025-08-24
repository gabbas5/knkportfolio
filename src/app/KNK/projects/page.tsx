import React from 'react'
import{knkprojects} from "@/components/data/projects"
import Card from "@/components/card"
import { Metadata } from "next";
export const metadata:Metadata={
  title:"KNK Projects"
} 
const Projects = () => {

  return (
    
      <Card info={knkprojects}/> 
    
  )
}

export default Projects;
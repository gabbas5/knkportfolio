import Image from "next/image";
import Footer from "@/components/ui/footer";
import { Metadata } from "next";
export const metadata:Metadata={
  title:"kza About"
}
const kza= {
    title: "About KZA (SMC-Pvt) Ltd",
    image:
      "https://framerusercontent.com/images/z1n8PeIlVA2Z7zW4lIbrWJFz9Xk.jpg",
    content: `KZ Associates is a leading engineering consultancy firm specializing in MEP (Mechanical, Electrical, and Plumbing) solutions for the commercial, residential, and industrial sectors. Since its establishment in 2020, we have been committed to delivering sustainable, innovative, and cost-effective engineering designs and project management services. From high-rise buildings to healthcare facilities, our extensive expertise ensures precision, efficiency, and excellence in every project.`,

    subheadings: {
      "Our Mission":
        "To provide the best consultancy and project management services in the MEP sector by delivering quality, timely, and value-added engineering solutions tailored to our clients' technical and financial needs.",
      "Our Vision":
        "To be recognized as a benchmark for engineering consultancy, offering unparalleled expertise and sustainable solutions in MEP design, project management, and supervision.",
          },
  
  
  
    heading: "Our Services",
    description:"KZ Associates is your trusted partner for transformative engineering solutions, setting industry standards and driving success through excellence.",
  }

  const  services=[
        {
          title: "Project Management Services",
          description:
          "Overseeing projects with precision, ensuring timely execution, and budget control.",
          icon: "1",
        },
        {
          title: "MEP Design Services",
          description:
          "Comprehensive HVAC, fire protection, plumbing, and electrical system designs.",
          icon: "2",
        },
        {
          title: "Supervision & Quality Assurance",
          description:
          "Maintaining the highest standards of safety, functionality, and sustainability.",
          icon: "3",
        },
        {
          title: "Innovation & Sustainability",
          description:
          "Crafting solutions that meet the newest industry trends and environmental standards.",
          icon: "4",
        },
      ]
      
const About = () => {
  
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <div className="p-4">
        <h1 className="mt-6 text-xl font-medium text-black md:text-3xl">
          {kza.title}
        </h1>
         <div className="max-w-3xl text-lg text-gray-600">
              {kza.content}
         </div>
          <div className="mt-8 flex flex-col gap-4 text-gray-600">
              {Object.entries(kza.subheadings).map(([heading, content]) => (
                <div key={heading}>
                  <h2 className="text-xl font-semibold text-[#5f0f4e]">
                    {heading}
                  </h2>
                  <p >{content}</p>
                </div>
              ))}
            </div>
        </div>
      <div>
        <Image src={kza.image}
        width={960}
        height={600}
        alt="Kktech Image"
        className="hover:scale-103"
        />
        </div>
           </div>
        <div className="grid p-4 grid-cols-1">
          <div className="mt-8 flex flex-col gap-4 text-gray-600">
          <h2 className="text-xl font-semibold text-[#5f0f4e]">Our Services</h2>
          <p>Today, we are one of the largest Engineering firms in the country, with a workforce of over 1000 dedicated employees led by a team of seasoned professionals. KNK has built and maintained a robust portfolio of satisfied customers across Pakistan, offering comprehensive services in HVAC, M.E.P, power generation, civil construction, and operation & maintenance.</p>
           </div>
            {services.map((service)=>{
              // console.log(service)
               return <div key={service.title}>
                <div className="mb-4 flex h-5 w-5 rounded-full justify-center items-center bg-[#5f0f4e] p-4 text-xl text-white">{service.icon}</div>
              <h6 className="text-xl font-semibold text-[#5f0f4e]">{service.title}</h6>
              <p className="bg-fuchsia-100">{service.description}</p> 
               
             </div>
                   })}
          
         
        </div>
       <Footer/>
        </>
  )
}

export default About;
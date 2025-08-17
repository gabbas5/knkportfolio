import Footer from "@/components/ui/footer";
import Image from "next/image"

const kktek= {
    title: "About K&K Tek (SMC-Pvt) Ltd",
    image:
      "https://framerusercontent.com/images/eohpXiurvFgLhIc8mefklb27mxo.jpg",
    content: `At K&K Tek, we specialize in delivering innovative building solutions that redefine the standards of Civil and MEP (Mechanical, Electrical, and Plumbing) engineering. As a trusted contractor and service provider, we combine cutting-edge technologies with unparalleled craftsmanship to bring your projects to life. From high-rise buildings and five-star hotels to industrial facilities, we ensure excellence in every detail.`,
    subheadings: {
      "Our Mission":
        "To provide sustainable, high-quality Civil and MEP solutions that exceed client expectations, ensuring safety, efficiency, and environmental responsibility.",
      "Our Vision":
        "To be the global leader in building solutions, renowned for our reliability, technical expertise, and commitment to excellence in engineering and construction.",
    }
  }
    
    //   heading: "Our Services",
    //   description:
     //  "Today, we are one of the largest Engineering firms in the country, with a workforce of over 1000 dedicated employees led by a team of seasoned professionals. KNK has built and maintained a robust portfolio of satisfied customers across Pakistan, offering comprehensive services in HVAC, M.E.P, power generation, civil construction, and operation & maintenance.",
     
   const services=[ 
               
         {
           title: "HVAC",
           description:
           "Comprehensive heating, ventilation, and air conditioning solutions for superior indoor environments.",
           icon: "1",
          },
          {
            title: "Firefighting Works",
            description:
            "State-of-the-art fire protection services to safeguard life and property.",
            icon: "2",
          },
          {
            title: "Plumbing Work",
            description:
            "Advanced systems ensuring optimal water distribution, sanitation, and waste management.",
            icon: "3",
          },
          {
            title: "Electrical Work",
            description:
            "Efficient power distribution and control systems designed to international standards.",
            icon: "4",
          },
          {
            title: "Civil Work",
            description:
            "Structurally sound and aesthetically remarkable infrastructure solutions.",
            icon: "5",
          }
        ]
       
    
    
const About = () => {
  
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <div className="p-4">
        <h1 className="mt-6 text-xl font-medium text-black md:text-3xl">
          {kktek.title}
        </h1>
         <div className="max-w-3xl text-lg text-gray-600">
              {kktek.content}
         </div>
          <div className="mt-8 flex flex-col gap-4 text-gray-600">
              {Object.entries(kktek.subheadings).map(([heading, content]) => (
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
        <Image src={kktek.image}
        width={960}
        height={600}
        alt="Kktech Image"
        className="hover:scale-105"
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
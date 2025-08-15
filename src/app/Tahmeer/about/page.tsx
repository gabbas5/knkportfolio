import Image from "next/image";
import styles from "@/app/css/flower.module.css"
import RosePetals from "@/components/rosePetals";

const kktameer={
    title: "About K&K Tameer (SMC-Pvt) Ltd",
    image: "https://framerusercontent.com/images/94iei98eKWCkMINJ8Llgrr1A.jpg",
    content: "Coming Soon",
    services: {
      heading: "Our Services",
      description:"K&K Tameer is your trusted partner for transformative engineering solutions, setting industry standards and driving success through excellence.",
      
        },
      
    }
    const generatePetals = (count = 25) => {
  const colors = ["#e11d48", "#f43f5e", "#be123c", "#9f1239", "#881337"];
  return Array.from({ length: count }, (_, i) => {
    const size = Math.floor(Math.random() * 30) + 20; // 20–50 px
    const left = Math.random() * 100; // percent
    const duration = (Math.random() * 5 + 4).toFixed(1) + "s"; // 4–9s
    const delay = (Math.random() * 5).toFixed(1) + "s"; // 0–5s
    const color = colors[Math.floor(Math.random() * colors.length)];

    return { id: i, size, left, duration, delay, color };
  });
};


const About = () => {
  const petals=generatePetals(25);
  //console.log(petals);

  return (
    <>
        <div className="flex flex-col-reverse justify-center items-center">
          <div className="flex flex-col justify-center items-center border-2 h-screen ">
            <h1 className="text-xl text-black md:text-3xl">{kktameer.title}</h1>
            
           {/* <div className="">
              {Object.entries(kktameer.services).map(([heading, description]) => (
                <div key={heading}>
                <h2 className="text-xl font-semibold text-[#5f0f4e]">
                   {heading}
                </h2>
                <p>{description}</p>
                </div>
                ))} 
            </div>
               */ }
          </div>

          <div className="flex justify-center items-center border-2 h-screen">
            <div className="relative aspect-[16/9] w-full max-w-[860px] overflow-hidden rounded-xl md:aspect-[1/1]">
              <Image
                src={kktameer.image}
                alt={kktameer.title}
                width={1200}
                height={800}
                className="transition-transform duration-500 ease-in-out hover:scale-105"
                />
            </div>
            {/* Rose Petal Shower */}
        {/* 🌹 Petal Shower */}
        {petals.map(petal => (
          <div
            key={petal.id}
            className={`${styles.fall} absolute top-0`}
            style={{
              left: `${petal.left}%`,
              animationDuration: petal.duration,
              animationDelay: petal.delay,
            }}
          >
            <RosePetals size={petal.size} color={petal.color} />
          </div>
        ))}

          </div>
        </div>
     
          </>
      
  
  )
}

export default About;
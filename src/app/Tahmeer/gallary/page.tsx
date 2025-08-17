import Image from "next/image";

const Gallary = () => {
  return (
    
          <div className="flex justify-center items-center min-h-screen bg-white px-4">
            <div className="relative w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src="https://framerusercontent.com/images/94iei98eKWCkMINJ8Llgrr1A.jpg"
                alt="About K&K Tameer (SMC-Pvt) Ltd"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        
  )
}

export default Gallary;
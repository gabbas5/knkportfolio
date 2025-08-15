import Footer from '@/components/ui/footer'
import Image from 'next/image'
import styles from '@/app/css/flower.module.css'
const FlowerSVG = ({ size = 32, color = '#f43f5e' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 12C34 6 44 6 44 16C54 12 58 22 48 28C58 32 54 44 44 40C44 50 34 50 32 44C30 50 20 50 20 40C10 44 6 32 16 28C6 22 10 12 20 16C20 6 30 6 32 12Z" />
  </svg>
)

const page = () => {
  return (
    <>
      <div className='relative min-h-screen overflow-hidden'>
        <Image
          src="https://framerusercontent.com/images/kowsLNxnpQclOQJjDCjUkZkX0yw.jpg"
          height={960}
          width={600}
          alt="background Image"
          className='w-full h-full object-cover'
        />

        {/* Flower Shower Elements */}
        <div className={`${styles.fall} absolute top-0 left-1/4`} style={{ animationDuration: "8s", animationDelay: "1s" }}>
          <FlowerSVG size={40} />
        </div>
        <div className={`${styles.fall} absolute top-0 left-1/2`} style={{ animationDuration: "6s", animationDelay: "2s" }}>
          <FlowerSVG size={48} color="#facc15" />
        </div>
        <div className={`${styles.fall} absolute top-0 left-3/4`} style={{ animationDuration: "4s", animationDelay: "3s" }}>
          <FlowerSVG size={32} color="#10b981" />
        </div>
        <div className={`${styles.fall} absolute top-0 left-[20%]`} style={{ animationDuration: "6s" }}>
          <FlowerSVG size={36} color="#f472b6" />
        </div>
        <div className={`${styles.fall} absolute top-0 left-[60%]`} style={{ animationDuration: "8s", animationDelay: "2s" }}>
          <FlowerSVG size={28} color="#a78bfa" />
        </div>
        <div className={`${styles.fall} absolute top-0 left-[80%]`} style={{ animationDuration: "4s", animationDelay: "1s" }}>
          <FlowerSVG size={40} color="#fb923c" />
        </div>


        {/* Text content */}
        <div className='absolute bottom-0 left-0 p-8 text-white bg-black/50 max-w-xl'>
          <h1 className="text-2xl font-bold mb-2">Shaping the Future of Construction</h1>
          <p>K&K Tameer is set to revolutionize the construction industry with innovation, quality, and vision.</p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page

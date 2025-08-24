import Footer from '@/components/ui/footer'
import Image from 'next/image'
import styles from '@/app/css/flower.module.css';
import { Metadata } from "next";
export const metadata:Metadata={
  title:"Tameer Home"
}

const FlowerSVG = ({ size = 32, color = '#ffffff' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill={color}>
      <path d="M32 2c2 6 2 14-4 18-4-6-10-10-16-10 2 6 4 14 0 20-6-4-12-4-18-2 6 4 12 10 10 16-6-2-12 0-18 4 6 2 14 2 18 8-4 6-2 14 0 20 6-4 12-10 16-16 6 4 14 2 20 0-4-6-10-12-16-16 6-4 14-2 20 0-4-6-2-14 0-20-6 2-14 0-20-4z" />
      <circle cx="32" cy="32" r="3" fill="#f8fafc" />
    </g>
  </svg>
)

const page = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* Background image container */}
        <div className="relative w-full h-screen">
          <Image
            src="https://framerusercontent.com/images/kowsLNxnpQclOQJjDCjUkZkX0yw.jpg"
            alt="Background Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Jasmine Flower Shower */}
        {[
          { left: '25%', size: 40, delay: '1s' },
          { left: '50%', size: 48, delay: '2s' },
          { left: '75%', size: 32, delay: '3s' },
          { left: '20%', size: 36, delay: '0s' },
          { left: '60%', size: 28, delay: '2s' },
          { left: '80%', size: 40, delay: '1s' },
        ].map((flower, index) => (
          <div
            key={index}
            className={`${styles.fall} absolute top-0`}
            style={{
              left: flower.left,
              animationDuration: '6s',
              animationDelay: flower.delay,
            }}
          >
            <FlowerSVG size={flower.size} />
          </div>
        ))}

        {/* Text content */}
        <div className="absolute bottom-0 left-0 w-full px-8 py-6 text-white bg-black/60">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Shaping the Future of Construction</h1>
            <p className="text-lg">K&K Tameer is set to revolutionize the construction industry with innovation, quality, and vision.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page

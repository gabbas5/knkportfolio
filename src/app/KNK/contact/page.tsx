import Footer from '@/components/ui/footer'
import ContactSection from '@/components/contactSection'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-8">
      {/* Heading */}
      <h1 className="mb-8 text-3xl font-semibold text-[#5f0f4e]">Contact Us</h1>

      {/* Main Content Area */}
      <div className="flex flex-col-reverse gap-12 md:flex-row md:items-start">
        {/* Contact Info and Form */}
        <div className="flex-1 space-y-6">
          <ul className="space-y-2 text-base text-gray-700">
            <li>
              Bahria Springs, North, The Cottage, Block C, 3rd Floor, Apartment 6,  
              Phase 7, Bahria Town, Rawalpindi
            </li>
            <li>051-5707222</li>
            <li>info@kktek.org</li>
            <li>info@kzassociates.net</li>
            <li>info@kktameer.com</li>
          </ul>
          <ContactSection />
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              src="https://framerusercontent.com/images/xrDHqtmWXUz4VpjAo4p1lHqA4.jpg"
              alt="Contact Us"
              className="transition-transform duration-500 ease-in-out hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              fill
            />
          </div>
        </div>
      </div>

      {/* Footer Section Title */}
      <div className="mt-16 text-2xl font-semibold text-[#5f0f4e] text-center">
        CONTACT PAGE
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  )
}

export default Contact

import React from 'react'
import Image from 'next/image'
const ContactSection = () => {
  return (
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
          
          <div className="mx-auto w-full max-w-2xl">
      <div className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-4">
            <p className="md:text-lg">
              For more details about our services, projects, and the exciting
              work we&apos;re involved in, don&apos;t hesitate to reach out.
              Whether you have inquiries about collaborations, partnerships, or
              any other aspects of our work, we&apos;re here to help and would
              love to connect with you. Get in touch to learn more about the
              possibilities and let&apos;s explore how we can work together.
            </p>
           
          </div>

          <div className="h-px w-full bg-gray-200" />

          <div className="flex flex-col gap-4">
            <p className="md:text-lg">
              Want to reach out? If you&apos;re exploring job opportunities or
              collaborations, drop us a line and let&apos;s start a
              conversation.
            </p>
           
          </div>
        </div>
      </div>
    </div>
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
  )
}

export default ContactSection;
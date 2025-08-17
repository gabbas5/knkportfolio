import Footer from '@/components/ui/footer'
import ContactSection from '@/components/contactSection'

const Contact = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-8">
      {/* Heading */}
      <h1 className="mb-8 text-3xl font-semibold text-[#5f0f4e]">Contact Us</h1>

      {/* Main Content Area */}
      <ContactSection />

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

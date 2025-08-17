'use client';

import { useState } from "react";
import Footer from "@/components/ui/footer";
import Slider from "@/components/ui/slider";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CompanyNavLinks from "@/components/companyNavlinks";
import CompanyLogo from "@/components/componyLogo";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="flex flex-col lg:flex-row items-center justify-between px-4 py-3 bg-gray-300 rounded-lg shadow-md lg:px-8">
  <h1 className="text-lg font-bold lg:text-2xl mb-2 lg:mb-0">K&K Associates</h1>

  {/* Nav Links Centered on Large Screens */}
  <nav className="hidden md:flex flex-wrap justify-center gap-6">
    <CompanyNavLinks />
  </nav>

  {/* Mobile Menu Toggle */}
  <button
    className="md:hidden focus:outline-none mt-2 lg:mt-0"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    aria-label="Toggle navigation"
  >
    {mobileMenuOpen ? (
      <XMarkIcon className="w-6 h-6 text-gray-700" />
    ) : (
      <Bars3Icon className="w-6 h-6 text-gray-700" />
    )}
  </button>
</header>


      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
  <div className="md:hidden flex flex-row items-center gap-4 px-4 py-2 bg-gray-100 overflow-x-auto whitespace-nowrap transition-all">
    <CompanyNavLinks />
  </div>
)}


      {/* Main Content */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0 lg:px-1">
        {/* Text Section */}
        <div className="bg-gray-100 p-5 rounded-xl flex flex-col justify-between">
          <p className="text-sm md:text-xs lg:text-2xl leading-relaxed">
            <strong className="text-[#5f0f4e]">Welcome to K&K Associates. </strong>
            Our passion is to provide high standard Mechanical, Electrical and Plumbing Services.
            Discover the powerhouse behind innovative engineering, construction, and consultancy solutions.
            The K&K Group brings together three dynamic companies, each excelling in its specialized domain.
            Explore our companies below to find the right fit for your needs.
          </p>

          {/* Small Logo Links */}
          <div className="flex justify-around mt-6 space-x-4">
            <CompanyLogo href="/KNK" src="/logo/knklogo.png" alt="KNK" />
            <CompanyLogo href="/KZA" src="/logo/kzalogo.png" alt="KZA" />
            <CompanyLogo href="/Tahmeer" src="/logo/tahlogo.png" alt="Tahmeer" />
          </div>
        </div>

        {/* Slider Section */}
        <div className="md:h-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl overflow-hidden">
          <Slider />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-6">
        <Footer />
      </footer>
    </main>
  );
}


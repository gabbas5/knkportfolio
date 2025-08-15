import Image from "next/image";
import Footer from "@/components/ui/footer";

const Home = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 py-12">
        {/* Text Content */}
        <div className="flex items-center justify-center">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            <strong>K&Z Associates</strong> — Experts in MEP Consultancy and Design.
            Since 2020, we have been a trusted name in MEP design and consultancy,
            delivering innovative and efficient solutions for building systems.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="https://framerusercontent.com/images/IUEoy5DmZnBD6y5dWRgJGhiQM.jpg"
            height={500}
            width={500}
            className="w-full h-auto max-w-md md:max-w-full rounded-lg shadow-md"
            alt="Machine Image"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

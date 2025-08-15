import Image from "next/image";
import Footer from "@/components/ui/footer";

const Home = async () => {
  return (
    <>
      {/* KNK home page */}
      <div className="relative flex flex-col items-center justify-center pl-4 p-r-4">
        <div className="w-full h-[60vh] mt-0.4">
          <Image
            src="https://framerusercontent.com/images/Vcmw0Pke9RK5hnXnDCWsBFzEDc.jpg"
            alt="Construction image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="absolute top-10 left-7 w-[40%] max-w-xl bg-white text-[#5f0f4e] rounded-xl p-4 shadow-lg">
          <p className="text-sm sm:text-sm lg:text-lg font-semibold">
            Specialists in Civil and MEP Solutions
          </p>
          <p className=" text-sm sm:text-sm">
            K&K TEK is dedicated to delivering top-notch civil, mechanical,
            electrical, and plumbing (MEP) services for commercial and
            industrial markets.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

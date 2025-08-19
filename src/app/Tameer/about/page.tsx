"use client"
import Image from "next/image";
import Footer from "@/components/ui/footer";
import { motion } from "framer-motion";

const kktameer = {
  title: "About K&K Tameer (SMC-Pvt) Ltd",
  image: "https://framerusercontent.com/images/94iei98eKWCkMINJ8Llgrr1A.jpg",
  content: "Coming Soon",
  heading: "Our Services",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section with Fade-in */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {kktameer.title}
            </h1>
            <h2 className="text-2xl font-semibold text-[#5f0f4e] mb-4">
              {kktameer.heading}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              K&K Tameer is your trusted partner for transformative engineering
              solutions, setting industry standards and driving success through
              excellence.
            </p>
          </motion.div>

          {/* Image Section with Fade-in */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            {/** relative w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg bg-gray-100*/}
            <div className="relative w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src={kktameer.image}
                alt={kktameer.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;

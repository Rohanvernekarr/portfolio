import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, MapPin, Camera } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
       
        <div className="flex flex-col md:flex-row mt-3 items-center justify-between gap-8">
         
          <motion.div
            className="md:w-1/2 flex justify-center relative mt-4 md:mt-0 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
           
            <div className="relative flex flex-col items-center w-[280px] sm:w-[320px] md:w-[350px] lg:w-[450px] ">
            
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[550px] rounded-2xl   overflow-hidden mb-3">
                <div className="absolute inset-0 bg-zinc-800/40 -z-10 blur-xl "></div>
                <Image
                  src="/rohan.jpg"
                  alt="Profile photo"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 350px, 450px"
                  className="object-contain z-10 "
                  priority
                />
              </div>
              
              
              <motion.div 
                className="flex items-center space-x-2 text-sm text-zinc-400 border-t border-zinc-800  pt-3 w-full justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Camera className="h-4 w-4" />
                <span>Bengaluru </span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif lg:text-5xl font-bold text-gray-100 bg-gradient-to-r from-gray-100 to-blue-400 bg-clip-text text-transparent mb-4">
              Rohan Ravi Vernekar
            </h1>
            <p className="text-lg md:text-xl font-sans text-gray-300 mb-6 leading-relaxed">
              Full-stack developer passionate about creating beautiful and
              functional web applications. Exploring Web3 and Blockchain.
            </p>
            <div className="flex items-center text-lg text-gray-400 hover:text-gray-300  w-44">
              <MapPin className="h-8 w-5 mr-2 text-gray-400" />
              <a
                href="https://www.google.com/maps/place/Karnataka/@15.0261513,73.6789652,7z/data=!3m1!4b1!4m6!3m5!1s0x3ba35a4c37bf488f:0x41f1d28cd1757cd5!8m2!3d15.3172775!4d75.7138884!16zL20vMDQ5bHI?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Karnataka, India
              </a>
            </div>
            <motion.div
              className="flex mt-5 space-x-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="https://twitter.com/Rohanvrnkr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transform hover:scale-110 transition-all duration-100"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rohan-vernekar-b57913283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transform hover:scale-110 transition-all duration-100"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://github.com/Rohanvernekarr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transform hover:scale-110 transition-all duration-100"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
            </motion.div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a
                href="https://portfolioo-eight-livid.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-zinc-600 hover:bg-zinc-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
              >
                View New Portfolio
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, MapPin } from "lucide-react";
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
       
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
         
          <motion.div
            className="md:w-1/2 flex justify-center relative mt-8 md:mt-0 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex items-center justify-center w-[280px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[400px] md:h-[550px] lg:w-[650px] lg:h-[600px]">
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-500/20 to-purple-900/20 blur-xl animate-pulse"></div>
             
              <Image
                src="/rohan.png"
                alt="Profile photo"
                fill
                className="object-contain z-10 "
              />
            </div>
          </motion.div>

          
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif lg:text-5xl font-bold text-gray-100 mb-4 bg-gradient-to-r from-gray-100 to-blue-400 bg-clip-text text-transparent">
              Rohan Ravi Vernekar
            </h1>
            <p className="text-lg md:text-xl font-sans text-gray-300 mb-6 leading-relaxed">
              Full-stack developer passionate about creating beautiful and
              functional web applications. Exploring Web3 and Blockchain.
            </p>
            <div className="flex items-center text-lg text-gray-400">
              <MapPin className="h-8 w-5 mr-2 text-blue-400" />
              <a
                href="https://www.google.com/maps/place/Karnataka/@15.0261513,73.6789652,7z/data=!3m1!4b1!4m6!3m5!1s0x3ba35a4c37bf488f:0x41f1d28cd1757c
           // d5!8m2!3d15.3172775!4d75.7138884!16zL20vMDQ5bHI?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
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
                className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rohan-vernekar-b57913283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://github.com/Rohanvernekarr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
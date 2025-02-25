import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiMongodb, SiJson, SiTailwindcss, SiCloudinary, SiExpress, SiPostgresql, SiPostman, SiKalilinux } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <SiReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "Postgresql", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Kali Linux", icon: <SiKalilinux className="text-blue-600" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "JSON", icon: <SiJson className="text-gray-300" /> },
  { name: "Cloudinary", icon: <SiCloudinary className="text-blue-300" /> },
];

// Duplicate skills array to create continuous loop effect
const duplicatedSkills = [...skills, ...skills];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="min-h-96 flex flex-col items-center justify-center pt-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full py-20 relative rounded-full border-collapse">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-serif text-center font-bold mb-2 text-gray-200"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-1 w-20 bg-blue-400 mb-8 mx-auto"
        />
        
        <div className="overflow-x-scroll w-full py-6 relative scrollbar-hide">
          <motion.div
            className="flex gap-3 relative"
            animate={{ x: ["-100%", 0] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-1 w-20 h-20 sm:w-24 sm:h-24 rounded-xl shadow-md transition duration-100 flex-shrink-0 bg-zinc-800"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl sm:text-3xl mb-2">
                  {skill.icon}
                </div>
                <span className="text-xs text-gray-300 transition duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
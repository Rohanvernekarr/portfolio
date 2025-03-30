import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "GitHive",
      description:
        "GitHive is a go-to platform for discovering the best GitHub repositories.It helps you find repositories that match your interests.",
      image: "/githive.png",
      link: "https://github.com/Rohanvernekarr/githive",

      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Vercel",
      ],
      
    },
    
  ];
  const projects1 = [
    {
      title: "Contest Tracker",
      description:
        "Contest Tracker is a web application that helps users track and manage the coding contests from codeforce,leetcode and codechef. With Google authentication.",
      image: "/contest.png",
      link: "https://github.com/Rohanvernekarr/contesttracker",

      tags: [
        "React",
        "Express.js",
        "Javascript",
        "Tailwind CSS",
        "Axios",
        "Node.js",
        "MongoDB",
        "Vercel",
        "Render",
        "Node-cron",

      ],
      
    },
    
  ];
  const projects2 = [
    {
      title: "Fusion Chat",
      description:
        "Fusion Chat is a real-time messaging web application that enables seamless communication between users. ",
      image: "/Fusion.png",
      link: "https://github.com/Rohanvernekarr/FusionChat",

      tags: [
        "React",
        "Express.js",
        "Javascript",
        "Tailwind CSS",
        "Socket.io",
        "MongoDB",
        "Vercel",
      ],
      
    },
    
  ];
  const projects3 = [
    {
      title: "FusionVR",
      description:
        "Landing page.",
      image: "/fusionvr.png",
      link: "https://github.com/Rohanvernekarr/FusionVR",

      tags: [
        "React",
        "Javascript",
        "Tailwind CSS",
        
        "Vercel",
      ],
      
    },
    
  ];
  const projects4 = [
    {
      title: "HackerNews Reader",
      description:
        "HackerNews Reader is a application that fetches the latest news from HackerNews API. With dark and light theme.",
      image: "/hackernews.png",
      link: "https://github.com/Rohanvernekarr/hackernewsreader",

      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HackerNews API",
        
        "Vercel",
      ],
      
    },
    
  ];
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className=" pt-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto  ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-serif font-bold text-gray-100 mb-2"
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 w-20 bg-blue-400 mb-8"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                y: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-zinc-700/50 hover:border-blue-400/30 transition-all duration-100"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-zinc-700/50 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300  font-medium transition-colors duration-300"
                  >
                    View Project
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="https://githive.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300 ml-5 font-medium transition-colors duration-300"
                  >
                    Live Link
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          {projects1.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                y: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-zinc-700/50 hover:border-blue-400/30 transition-all duration-100"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-zinc-700/50 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300  font-medium transition-colors duration-300"
                  >
                    View Project
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="https://contesttracker-ruby.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300 ml-5 font-medium transition-colors duration-300"
                  >
                    Live Link
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          {projects2.map((project2, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                y: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-zinc-700/50 hover:border-blue-400/30 transition-all duration-100"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project2.image}
                  alt={project2.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project2.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  {project2.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project2.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-zinc-700/50 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="gap-4">
                  <Link
                    href={project2.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300  font-medium transition-colors duration-300"
                  >
                    View Project
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="https://fusion-chat-plum.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300 ml-5 font-medium transition-colors duration-300"
                  >
                    Live Link
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
           {projects4.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                y: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-zinc-700/50 hover:border-blue-400/30 transition-all duration-100"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-zinc-700/50 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300  font-medium transition-colors duration-300"
                  >
                    View Project
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="https://hackernewsreader.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300 ml-5 font-medium transition-colors duration-300"
                  >
                    Live Link
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          {projects3.map((project3, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                y: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-xl h-96 shadow-xl overflow-hidden border border-zinc-700/50 
              hover:border-blue-400/30 transition-all duration-100"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project3.image}
                  alt={project3.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-70 
                transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project3.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  {project3.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project3.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-zinc-700/50 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="gap-4">
                  <Link
                    href={project3.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300  font-medium transition-colors duration-300"
                  >
                    View Project
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="https://fusionvr.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-blue-300 ml-5 font-medium transition-colors duration-300"
                  >
                    Live Link
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
         
         
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

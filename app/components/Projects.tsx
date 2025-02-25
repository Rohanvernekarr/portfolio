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
    {
      title: "Fusion Chat",
      description:
        "Fusion Chat is a real-time messaging web application that enables seamless communication between users.",
      image: "/Screenshot 2023-12-27 000040.png",
      link: "#",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.io",
        "Tailwind CSS",
        "Vercel",
        "Render",
      ],
    },
    {
      title: "Fusion VR",
      description:
        "A brief description of project 3 highlighting the key features and the impact it has on users or businesses.",
      image: "/Screenshot 2023-12-27 190955.png",
      link: "#",
      tags: ["React.js", "Tailwind CSS", "Vite", "JavaScript"],
    },
  ];
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-zinc-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-zinc-700/50 hover:border-blue-400/30 transition-all duration-300"
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
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

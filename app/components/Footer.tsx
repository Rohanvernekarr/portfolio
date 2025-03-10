import Link from "next/link";
import { Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-10 border-t border-zinc-800/50 bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-100">
              Rohan Ravi Vernekar
            </h3>
            <p className="text-gray-400 text-lg">Third Year B.Tech Student</p>
            <div className="flex items-center text-gray-400">
              <MapPin className="h-4 w-4 mr-2 text-blue-400" />
              <a
                href="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9542802,77.4661271,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d
                0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bengaluru, India
              </a>
            </div>
            <p className="text-gray-400">
              Passionate about crafting digital experiences and solving
              real-world problems through code.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Rohanvernekarr/Resume/blob/main/rohanvernekar.pdfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Resume
                </Link>
              </li>
             
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-100">Contact</h3>
            <p className="flex items-center text-gray-400">
              <Mail className="h-4 w-4 mr-2 text-blue-400" />
              <a
                href="mailto:rohanrv2004@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                {" "}
                rohanrv2004@gmail.com
              </a>
            </p>
            <p className="flex items-center text-gray-400">
              <Twitter className="h-4 w-4 mr-2 text-blue-400" />
              <a
                href="https://twitter.com/Rohanvrnkr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                {" "}
                rohanvkr
              </a>
            </p>
            <p className="flex items-center text-gray-400">
              <Linkedin className="h-4 w-4 mr-2 text-blue-400" />
              <a
                href="https://www.linkedin.com/in/rohan-vernekar-b57913283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                RohanVernekar
              </a>
            </p>
            <p className="text-gray-400">Feel free to reach out.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

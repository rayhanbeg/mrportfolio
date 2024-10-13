import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:justify-center lg:items-start"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="relative w-full lg:w-1/2"
            >
              <div className="relative w-full max-w-[400px] mx-auto">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded"
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0"
            >
              <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 inline-block rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-1.5 text-xs lg:text-sm bg-purple-600 hover:bg-purple-500 text-white font-bold rounded">
                    Visit Site
                  </button>
                </a>
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-3 py-1.5 text-xs lg:text-sm bg-gray-800 text-white hover:bg-gray-900 font-bold rounded">
                      View Code
                    </button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

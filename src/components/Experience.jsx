import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <div className="pb-4">
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">
          Experience
        </motion.h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div className="flex mb-8 flex-wrap lg:justify-center" key={index}>
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
              </motion.div>

              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold">
                  {experience.role} - <span className="text-sm text-stone-500"> {experience.company} </span>
                </h3>
                <p className="mb-4 text-stone-400">{experience.description}</p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span className="rounded bg-stone-900 transition-all duration-300 border-transparent border hover:border-white hover:bg-transparent p-2 text-sm font-medium text-stone-300 w-1/3 md:w-auto text-center" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;

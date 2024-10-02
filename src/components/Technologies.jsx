import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <>
      <div className="pb-24">
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">
          Technologies
        </motion.h2>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
          <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">
            <FaHtml5 className="text-7xl hover:scale-110 transition-all duration-300  text-orange-400" />
          </motion.div>
          <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
            <FaCss3Alt className="text-7xl hover:scale-110 transition-all duration-300  text-sky-400" />
          </motion.div>
          <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
            <FaJs className="text-7xl hover:scale-110 transition-all duration-300  text-yellow-400" />
          </motion.div>
          <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
            <FaReact className="text-7xl hover:scale-110 transition-all duration-300  text-cyan-400" />
          </motion.div>
          <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
            <FaVuejs className="text-7xl hover:scale-110 transition-all duration-300  text-green-400	" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;

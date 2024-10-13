import { motion } from "framer-motion";

const WhyHireMe = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl"
    >
      <h2>Why Hire Me?</h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mt-8 mx-auto max-w-3xl text-lg text-neutral-400"
      >
        As a passionate Junior MERN Stack Developer with one year of self-taught
        experience, I have developed full-stack web applications using React,
        Node.js, Express, and MongoDB. My focus is on writing clean, efficient
        code and improving the performance of applications.
      </motion.p>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 mx-auto max-w-3xl text-lg text-neutral-400"
      >
        I’m highly adaptable, eager to learn, and motivated to contribute to a
        team environment. My goal is to grow as a developer while delivering
        meaningful and efficient solutions.
      </motion.p>
    </motion.div>
  );
};

export default WhyHireMe;

import { motion } from "framer-motion";
import AnimatedAvatar from "./AnimatedAvatar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4"
          >
            {'<Hello World />'}
          </motion.p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Daniyal Khan</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            Building modern web experiences with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg font-medium text-primary-foreground glow-effect"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg font-medium border border-border text-foreground hover:border-primary transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <AnimatedAvatar className="w-64 md:w-80" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

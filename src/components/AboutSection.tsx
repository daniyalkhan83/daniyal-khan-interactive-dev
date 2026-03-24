import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { year: "2021", label: "Matriculation", detail: "Jadeed Datgir Ideal High School" },
  { year: "2023", label: "FSC Pre-Medical", detail: "Punjab College" },
  { year: "Present", label: "BS Computer Science", detail: "GIFT University" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate full stack developer creating interactive and responsive web apps.
              Currently pursuing BS Computer Science at GIFT University. I love coding, learning 
              new technologies, and building projects that inspire.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey from pre-medical to computer science reflects my drive to follow my 
              true passion — building things that live on the web and make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4"
              >
                <span
                  className="text-sm font-bold px-3 py-1 rounded-full text-primary-foreground shrink-0"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {item.year}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

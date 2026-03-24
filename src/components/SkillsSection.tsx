import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 72 },
    ],
  },
  {
    title: "Dev Tools",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-5 text-foreground">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + ci * 0.15 + si * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

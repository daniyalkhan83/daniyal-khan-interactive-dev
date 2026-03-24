import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Proposal Perfect",
    description: "AI-powered freelance proposal generator that helps craft winning proposals with intelligent suggestions and templates.",
    tags: ["AI", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-blue-500/20 to-purple-500/20",
    github: "https://github.com/daniyalkhan83/proposal-perfect",
  },
  {
    title: "Baig Brothers",
    description: "A full-featured rice e-commerce website with product listings, cart functionality, and a modern shopping experience.",
    tags: ["React", "E-Commerce", "Tailwind CSS", "Node.js"],
    gradient: "from-purple-500/20 to-pink-500/20",
    github: "https://github.com/daniyalkhan83/baigbrothers",
  },
  {
    title: "Giftonians",
    description: "Giftonians Hub AI Directory — a smart directory platform for discovering and exploring AI-powered tools and resources.",
    tags: ["AI", "Directory", "React", "TypeScript"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    github: "https://github.com/daniyalkhan83/giftonians",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Preview area */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="font-mono text-sm text-muted-foreground opacity-40 group-hover:opacity-70 transition-opacity">
                  {'{ preview }'}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm text-primary flex items-center gap-1 hover:underline">
                    <Github className="w-4 h-4" /> Code
                  </span>
                  <span className="text-sm text-primary flex items-center gap-1 hover:underline">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

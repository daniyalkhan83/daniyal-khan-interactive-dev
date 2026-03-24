import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A full-featured admin dashboard with real-time analytics, order management, and product inventory system.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Task Management App",
    description: "Kanban-style project management tool with drag-and-drop, team collaboration, and deadline tracking.",
    tags: ["React", "MongoDB", "Express.js", "Socket.io"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and 7-day predictions.",
    tags: ["React", "TypeScript", "API Integration", "CSS3"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Portfolio Website",
    description: "This interactive portfolio with animated avatar, particle effects, and smooth transitions throughout.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    gradient: "from-green-500/20 to-cyan-500/20",
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

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import proposalImg from "@/assets/proposal-perfect.png";
import baigImg from "@/assets/baig-brothers.png";
import giftoniansImg from "@/assets/giftonians-hub.png";

const projects = [
  {
    title: "Proposal Perfect",
    description: "AI-powered freelance proposal generator that crafts personalized, high-converting proposals for Upwork, Fiverr, and LinkedIn in seconds.",
    tags: ["AI", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-blue-500/20 to-purple-500/20",
    link: "https://proposal-perfect-two.vercel.app/",
    image: proposalImg,
  },
  {
    title: "Baig Brothers",
    description: "Premium rice e-commerce website showcasing product varieties, company history, gallery, and contact — trusted across continents since 1985.",
    tags: ["React", "E-Commerce", "Tailwind CSS", "Node.js"],
    gradient: "from-purple-500/20 to-pink-500/20",
    link: "https://baigbrothers.vercel.app/",
    image: baigImg,
  },
  {
    title: "Giftonians Hub",
    description: "AI tools directory platform to discover, compare, and explore 500+ curated AI tools across writing, coding, image generation, and more.",
    tags: ["AI", "Directory", "React", "TypeScript"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    link: "https://giftonianshub.vercel.app/",
    image: giftoniansImg,
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
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer block"
            >
              {/* Preview image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
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
                    <ExternalLink className="w-4 h-4" /> Visit Live Site
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

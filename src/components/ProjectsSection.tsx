import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import proposalImg from "@/assets/proposal-perfect.png";
import baigImg from "@/assets/baig-brothers.png";
import giftoniansImg from "@/assets/giftonians-hub.png";
import learnsphereImg from "@/assets/learnsphere-ai.png"; // <-- new project image

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
  {
    title: "LearnSphere AI",
    description: "Personalized learning recommendation system using AI to suggest courses based on user preferences and progress, helping learners achieve goals faster.",
    tags: ["AI", "React", "Node.js", "Tailwind CSS", "Full-Stack"],
    gradient: "from-green-500/20 to-teal-500/20",
    link: "https://learnsphere-ai-delta.vercel.app/",
    image: learnsphereImg,
  },
];

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedAvatar = ({ className = "" }: { className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [scrollY, setScrollY] = useState(0);

  const springConfig = { stiffness: 100, damping: 20 };
  const eyeX = useSpring(useTransform(mouseX, [0, window.innerWidth], [-3, 3]), springConfig);
  const eyeY = useSpring(useTransform(mouseY, [0, window.innerHeight], [-2, 2]), springConfig);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY]);

  const headTilt = Math.sin(scrollY * 0.005) * 3;
  const bodyBob = Math.sin(scrollY * 0.003) * 2;

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: bodyBob }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <svg viewBox="0 0 200 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Glow effect */}
        <defs>
          <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(230, 80%, 65%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(230, 80%, 65%)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(230, 80%, 55%)" />
            <stop offset="100%" stopColor="hsl(270, 60%, 50%)" />
          </linearGradient>
        </defs>

        {/* Glow circle */}
        <circle cx="100" cy="160" r="140" fill="url(#avatarGlow)" />

        {/* Body */}
        <motion.g style={{ y: bodyBob }}>
          {/* Torso */}
          <path d="M60 200 Q60 180 100 175 Q140 180 140 200 L145 280 Q145 300 100 300 Q55 300 55 280 Z" fill="url(#shirtGrad)" />
          {/* Collar */}
          <path d="M80 195 Q100 210 120 195" stroke="hsl(225, 20%, 20%)" strokeWidth="2" fill="none" />
          {/* Arms */}
          <path d="M60 200 Q40 220 45 260" stroke="url(#shirtGrad)" strokeWidth="16" strokeLinecap="round" fill="none" />
          <path d="M140 200 Q160 220 155 260" stroke="url(#shirtGrad)" strokeWidth="16" strokeLinecap="round" fill="none" />
          {/* Hands */}
          <circle cx="45" cy="262" r="8" fill="hsl(30, 40%, 65%)" />
          <circle cx="155" cy="262" r="8" fill="hsl(30, 40%, 65%)" />
        </motion.g>

        {/* Head group */}
        <motion.g style={{ rotate: headTilt, originX: "100px", originY: "140px" }}>
          {/* Head */}
          <ellipse cx="100" cy="120" rx="42" ry="48" fill="hsl(30, 40%, 65%)" />
          {/* Hair */}
          <path d="M58 110 Q58 65 100 60 Q142 65 142 110 Q140 85 100 82 Q60 85 58 110Z" fill="hsl(225, 15%, 15%)" />
          <path d="M55 115 Q52 95 60 80" stroke="hsl(225, 15%, 15%)" strokeWidth="8" strokeLinecap="round" fill="none" />
          
          {/* Eyes */}
          <g>
            <ellipse cx="82" cy="118" rx="7" ry="8" fill="hsl(0, 0%, 100%)" />
            <ellipse cx="118" cy="118" rx="7" ry="8" fill="hsl(0, 0%, 100%)" />
            <motion.circle cx="82" cy="118" r="3.5" fill="hsl(225, 25%, 12%)" style={{ x: eyeX, y: eyeY } as any} />
            <motion.circle cx="118" cy="118" r="3.5" fill="hsl(225, 25%, 12%)" style={{ x: eyeX, y: eyeY } as any} />
            {/* Eye shine */}
            <circle cx="84" cy="116" r="1.5" fill="hsl(0, 0%, 100%)" opacity="0.8" />
            <circle cx="120" cy="116" r="1.5" fill="hsl(0, 0%, 100%)" opacity="0.8" />
          </g>

          {/* Eyebrows */}
          <path d="M73 106 Q82 102 91 106" stroke="hsl(225, 15%, 15%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M109 106 Q118 102 127 106" stroke="hsl(225, 15%, 15%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <path d="M97 128 Q100 133 103 128" stroke="hsl(30, 30%, 55%)" strokeWidth="1.5" fill="none" />

          {/* Smile */}
          <path d="M85 140 Q100 152 115 140" stroke="hsl(0, 50%, 55%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Glasses */}
          <rect x="70" y="110" width="24" height="18" rx="4" stroke="hsl(230, 50%, 50%)" strokeWidth="2" fill="none" opacity="0.7" />
          <rect x="106" y="110" width="24" height="18" rx="4" stroke="hsl(230, 50%, 50%)" strokeWidth="2" fill="none" opacity="0.7" />
          <line x1="94" y1="118" x2="106" y2="118" stroke="hsl(230, 50%, 50%)" strokeWidth="1.5" opacity="0.7" />
        </motion.g>

        {/* Laptop */}
        <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="70" y="270" width="60" height="4" rx="1" fill="hsl(225, 15%, 30%)" />
          <rect x="75" y="245" width="50" height="25" rx="2" fill="hsl(225, 20%, 18%)" />
          <rect x="78" y="248" width="44" height="19" rx="1" fill="hsl(230, 80%, 65%)" opacity="0.3" />
          {/* Code lines on screen */}
          <line x1="81" y1="253" x2="95" y2="253" stroke="hsl(160, 70%, 50%)" strokeWidth="1" opacity="0.7" />
          <line x1="81" y1="257" x2="110" y2="257" stroke="hsl(270, 60%, 60%)" strokeWidth="1" opacity="0.5" />
          <line x1="85" y1="261" x2="105" y2="261" stroke="hsl(200, 80%, 60%)" strokeWidth="1" opacity="0.6" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default AnimatedAvatar;

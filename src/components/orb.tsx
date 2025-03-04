import { motion } from "framer-motion";

interface OrbitingOrbProps {
  position: string;
  size: string;
  color: string;
  icon?: React.ReactNode;
  opacity?: string;
}

export function OrbitingOrb({
  position,
  size,
  color,
  icon,
  opacity = "opacity-100",
}: OrbitingOrbProps) {
  const orbitVariants = {
    start: {
      x: 0,
      y: 0,
    },
    orbit: {
      x: [0, 5, 0, -5, 0],
      y: [5, 0, -5, 0, 5],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className={`absolute ${position} ${size} rounded-full ${color} ${opacity} flex items-center justify-center`}
      variants={orbitVariants}
      initial="start"
      animate="orbit"
    >
      {icon}
    </motion.div>
  );
}
import { motion } from "framer-motion";

interface LandingHeroProps {
  id?: string;
}

export default function LandingHero({ id = "landing-hero" }: LandingHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      },
    },
  };

  return (
    <motion.header
      id={id}
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.p className="hero-subtitle" variants={itemVariants}>
          The Wedding Gallery
        </motion.p>
        <motion.h1 className="hero-title" variants={itemVariants}>
          Cenz & partner
        </motion.h1>
        <motion.p className="hero-description" variants={itemVariants}>
          Welcome to our digital keepsake. Here we share the cherished chapters of our wedding journey.
          Click on any album to view the galleries and explore our memories together.
        </motion.p>
      </div>
    </motion.header>
  );
}

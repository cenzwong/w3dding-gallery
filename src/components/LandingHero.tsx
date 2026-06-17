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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      },
    },
  };

  return (
    <motion.header
      id={id}
      className="pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <motion.div variants={itemVariants} className="text-center">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--text-primary)] display-text mb-2">
             <span className="block mb-2 text-xl md:text-2xl tc-informational tracking-widest text-[var(--text-secondary)]">婚禮圖集</span>
             ISSAC & CENZ
           </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[45ch] prose-text italic">
          Welcome to our digital keepsake. Here we share the cherished chapters of our wedding journey.
        </motion.p>
      </div>
    </motion.header>
  );
}

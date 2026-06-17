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
      className="pt-12 pb-6 md:py-6 md:my-0 flex-shrink-0 flex flex-col items-center justify-center text-center px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
        <motion.div variants={itemVariants} className="text-center">
           <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--text-primary)] display-text mb-1">
             <span className="block mb-1.5 text-base md:text-xl tc-informational tracking-widest text-[var(--text-secondary)]">婚禮圖集</span>
             ISSAC & CENZ
           </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="text-sm md:text-lg text-[var(--text-primary)] opacity-85 leading-relaxed max-w-[50ch] prose-text italic">
          Welcome to our digital keepsake. Here we share the cherished chapters of our wedding journey.
        </motion.p>
      </div>
    </motion.header>
  );
}

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

const LaunchDate = new Date("2026-04-22T00:00:00").getTime();

export function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = LaunchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden flex flex-col items-center justify-center text-center px-4 font-body text-foreground">
      {/* Decorative Gradient Meshes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-warm-rose-light/40 mix-blend-multiply blur-[80px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-sage-light/40 mix-blend-multiply blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-gold-light/30 mix-blend-multiply blur-[100px] pointer-events-none" />

      {/* Noise Texture over lay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Decorative Wave at the bottom */}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <motion.div 
        className="z-20 flex flex-col items-center max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl font-light tracking-wide mb-2 md:mb-4 text-foreground/70 uppercase">
          Something Awesome is Coming
        </motion.p>
        <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-wide leading-tight mb-8 md:mb-12 text-foreground">
          COMING SOON
        </motion.h1>

        <motion.div variants={itemVariants} className="flex gap-2 sm:gap-4 md:gap-8 justify-center items-center mb-16 relative w-full max-w-lg mx-auto">
          <TimeUnit value={timeLeft.days} label="Dias" />
          <span className="text-2xl sm:text-3xl md:text-5xl mb-4 sm:mb-6 font-display font-light text-foreground/40">:</span>
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <span className="text-2xl sm:text-3xl md:text-5xl mb-4 sm:mb-6 font-display font-light text-foreground/40">:</span>
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <span className="text-2xl sm:text-3xl md:text-5xl mb-4 sm:mb-6 font-display font-light text-foreground/40">:</span>
          <TimeUnit value={timeLeft.seconds} label="Segs" />
        </motion.div>
      </motion.div>
      
      {/* Brand logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-12 left-4 md:top-8 md:left-12 flex items-center z-30 opacity-80"
      >
        <span className="font-display font-semibold tracking-widest text-xs sm:text-sm uppercase text-foreground/80">Apoio Psicológico</span>
      </motion.div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center w-14 sm:w-16 md:w-24">
      <span className="text-3xl sm:text-4xl md:text-6xl font-display font-light mb-1 md:mb-2 text-primary">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-foreground/60">
        {label}
      </span>
    </div>
  );
}

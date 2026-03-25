import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import heroPhoto from "@/assets/ff658521-415b-4a80-ad62-3de088071a5b.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Camada 1: Foto (fundo) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroPhoto}
          alt="Jéssica Alzira"
          className="w-full h-full object-cover object-[center_top] opacity-100"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Camada 2: hero-bg (arte por cima, com opacidade) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-55 mix-blend-soft-light"
          loading="eager"
        />
      </div>

      {/* Content at the bottom */}
      <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
              Um espaço seguro para você ser ouvido(a).
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/70 max-w-xl mx-auto leading-relaxed">
              Escuta, acolhimento e orientação emocional em momentos difíceis. Privacidade total.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent z-20" />
    </section>
  );
};

export default HeroSection;

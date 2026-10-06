import { motion } from "framer-motion";
import { CalendarHeart } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import heroPhoto from "@/assets/ff658521-415b-4a80-ad62-3de088071a5b.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Camada 1: Foto (fundo) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroPhoto}
          alt="Jéssica da Alzira"
          className="w-full h-full object-cover object-[center_top] opacity-100"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/5" />
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
      <div className="absolute inset-x-0 bottom-6 md:bottom-12 z-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
              Um espaço seguro para você ser ouvido(a).
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground font-medium max-w-xl mx-auto leading-relaxed mb-8 drop-shadow-sm">
              Escuta, acolhimento e orientação emocional em momentos difíceis. Privacidade total.
            </p>

            {/* Destaque de Horários */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-background/80 backdrop-blur-md border border-warm-rose/30 shadow-lg px-4 sm:px-5 py-4 rounded-2xl text-center sm:text-left w-full max-w-lg"
            >
              <div className="bg-warm-rose-light/50 p-3 rounded-full shrink-0">
                <CalendarHeart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-body text-foreground/90 leading-tight">
                  <span className="font-display font-medium text-base block mb-1">Horário de Atendimentos</span>
                  As consultas e atendimentos estarão disponíveis exclusivamente às <strong className="text-primary font-medium">Segundas e Quartas-feiras</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent z-20" />
    </section>
  );
};

export default HeroSection;

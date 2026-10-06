import { motion } from "framer-motion";
import { Mail, Send as TelegramIcon, Instagram, MapPin } from "lucide-react";

// SVGs personalizados para ícones que não existem nativamente no lucide-react com o formato exato
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Contacto
          </h2>
          <p className="font-body text-muted-foreground text-base mb-10">
            Tem alguma dúvida? Entre em contacto.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contacto@jedalzira.com"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors font-body text-sm text-foreground"
            >
              <Mail className="w-4 h-4 text-primary" />
              contacto@jedalzira.com
            </a>
            
            <a
              href="https://t.me/Jedalzira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors font-body text-sm text-foreground"
            >
              <TelegramIcon className="w-4 h-4 text-primary" />
              Telegram
            </a>

            <a
              href="https://wa.me/258874552068"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors font-body text-sm text-foreground"
            >
              <WhatsAppIcon className="w-4 h-4 text-primary" />
              WhatsApp
            </a>

            <a
              href="https://instagram.com/jedalzira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors font-body text-sm text-foreground"
            >
              <Instagram className="w-4 h-4 text-primary" />
              Instagram
            </a>

            <a
              href="https://tiktok.com/@jedalzira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors font-body text-sm text-foreground"
            >
              <TiktokIcon className="w-4 h-4 text-primary" />
              TikTok
            </a>

            <div
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground cursor-default"
            >
              <MapPin className="w-4 h-4 text-primary" />
              Maputo, Moçambique
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

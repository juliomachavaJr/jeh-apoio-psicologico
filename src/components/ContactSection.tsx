import { motion } from "framer-motion";
import { Mail, Send as TelegramIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-2xl text-center">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

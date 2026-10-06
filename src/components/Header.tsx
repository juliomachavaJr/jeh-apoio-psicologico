import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
{ label: "Início", href: "/#inicio" },
{ label: "Sobre", href: "/#sobre" },
{ label: "Modalidades", href: "/#modalidades" },
{ label: "Preços", href: "/#precos" },
{ label: "Como Funciona", href: "/#como-funciona" },
{ label: "FAQ", href: "/#faq" },
{ label: "Contacto", href: "/#contacto" }];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
          className="font-display text-xl font-semibold text-foreground tracking-wide"
        >
          Jéssica da Alzira – Apoio Emocional
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          <a
            href="https://jedalzira.com"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar ao site
          </a>
          {navItems.map((item) =>
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300">
              {item.label}
            </a>
          )}
          <a
            href="/#agendar"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Agendar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-foreground"
          aria-label="Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen &&
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="xl:hidden bg-background border-b border-border overflow-hidden">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a
                href="https://jedalzira.com"
                className="flex items-center gap-2 text-sm font-medium text-primary pb-2 border-b border-border/50"
              >
                <ArrowLeft size={16} />
                Voltar ao site
              </a>
              {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </a>
            )}
              <a
              href="/#agendar"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium text-center hover:opacity-90 transition-opacity">
                Agendar
              </a>
            </div>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

};

export default Header;
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
{ label: "Início", href: "/#inicio" },
{ label: "Sobre", href: "/#sobre" },
{ label: "Modalidades", href: "/#modalidades" },
{ label: "Como Funciona", href: "/#como-funciona" },
{ label: "FAQ", href: "/#faq" },
{ label: "Contacto", href: "/#contacto" }];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/#inicio" className="font-display text-xl font-semibold text-foreground tracking-wide">Jéssica Alzira – Apoio Emocional

        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
          className="md:hidden text-foreground"
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
          className="md:hidden bg-background border-b border-border overflow-hidden">

            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
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
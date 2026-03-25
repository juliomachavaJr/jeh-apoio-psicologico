import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg font-semibold text-foreground mb-2">Jedalzira</p>
        <p className="font-body text-xs text-muted-foreground mb-4">
          Apoio Psicológico e Aconselhamento Online
        </p>
        <p className="font-body text-xs font-semibold text-foreground mb-4">
          Pagamentos aceites: M-Pesa e e-Mola.
        </p>
        <p className="font-body text-xs text-muted-foreground mb-4">
          <span className="underline hover:text-primary transition-colors">
            <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso e Política de Privacidade
            </Link>
          </span>
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jedalzira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

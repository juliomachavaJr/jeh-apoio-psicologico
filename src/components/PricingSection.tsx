import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section id="precos" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-foreground">
            Pacotes de Acompanhamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Um espaço de escuta, acolhimento e reflexão para cuidar da sua saúde emocional, 
            fortalecer a autoestima e lidar com os desafios do dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Essencial */}
          <div className="bg-card rounded-2xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow relative border border-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Essencial</h3>
              <p className="text-muted-foreground font-medium mb-4">4 sessões / mês</p>
              <div className="text-4xl font-bold mb-1">7.000 <span className="text-xl">MZN</span></div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">1 sessão por semana</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">1.750 MZN por sessão</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground font-medium">Economia de 1.000 MZN</span>
              </li>
            </ul>
            
            <Link to="/checkout/essencial" className="w-full mt-auto">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 rounded-lg">
                Começar Agora
              </Button>
            </Link>
          </div>

          {/* Intensivo (Mais Recomendado) */}
          <div className="bg-card rounded-2xl p-8 shadow-md flex flex-col hover:shadow-lg transition-shadow border-2 border-primary relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1.5 rounded-full text-sm font-semibold shadow-sm whitespace-nowrap">
              Mais Recomendado
            </div>
            <div className="text-center mb-6 mt-2">
              <h3 className="text-2xl font-display font-bold mb-2 text-primary">Intensivo</h3>
              <p className="text-muted-foreground font-medium mb-4">6 sessões / mês</p>
              <div className="text-4xl font-bold mb-1">10.500 <span className="text-xl">MZN</span></div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">Maior frequência ao longo do mês</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">1.750 MZN por sessão</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground font-medium">Economia de 1.500 MZN</span>
              </li>
            </ul>
            
            <Link to="/checkout/intensivo" className="w-full mt-auto">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 rounded-lg shadow-md">
                Começar Agora
              </Button>
            </Link>
          </div>

          {/* Contínuo */}
          <div className="bg-card rounded-2xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow relative border border-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Contínuo</h3>
              <p className="text-muted-foreground font-medium mb-4">8 sessões / mês</p>
              <div className="text-4xl font-bold mb-1">14.000 <span className="text-xl">MZN</span></div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">2 sessões por semana</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">1.750 MZN por sessão</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground font-medium">Economia de 2.000 MZN</span>
              </li>
            </ul>
            
            <Link to="/checkout/continuo" className="w-full mt-auto">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 rounded-lg">
                Começar Agora
              </Button>
            </Link>
          </div>
          
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-display font-semibold mb-6 text-center text-foreground">O que este acompanhamento oferece?</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
              <span className="text-card-foreground">Sessões individuais de acompanhamento.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
              <span className="text-card-foreground">Espaço seguro para falar sobre emoções, relações e desafios pessoais.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
              <span className="text-card-foreground">Reflexão orientada para autoconhecimento e autoestima.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
              <span className="text-card-foreground">Acompanhamento estruturado e contínuo.</span>
            </li>
          </ul>
          
          <div className="bg-muted p-6 rounded-xl text-center border border-border">
            <p className="font-semibold text-lg mb-2 text-foreground">Investir em si também é uma forma de cuidado.</p>
            <p className="text-muted-foreground text-sm">
              Os pacotes foram pensados para facilitar o acompanhamento contínuo, com uma condição mais acessível do que as sessões avulsas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;

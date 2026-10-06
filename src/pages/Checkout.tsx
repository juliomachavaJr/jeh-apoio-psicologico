import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ArrowLeft } from "lucide-react";

// Dados simulados dos pacotes baseados no preçário
const pacotesData = {
  essencial: {
    nome: "Pacote Essencial",
    preco: "7.000 MZN",
    precoSessao: "1.750 MZN por sessão",
    sessoes: "4 sessões / mês",
    economia: "Economia de 1.000 MZN",
    frequencia: "1 sessão por semana",
    descricao: "Um espaço de escuta, acolhimento e reflexão para quem deseja cuidar da sua saúde emocional, desenvolver autoconhecimento, fortalecer a autoestima e lidar melhor com os desafios do dia a dia.",
    ofertas: [
      "Sessões individuais de acompanhamento.",
      "Espaço seguro para falar sobre emoções, relações e desafios pessoais.",
      "Reflexão orientada para autoconhecimento e autoestima.",
      "Acompanhamento estruturado e contínuo."
    ]
  },
  intensivo: {
    nome: "Pacote Intensivo",
    preco: "10.500 MZN",
    precoSessao: "1.750 MZN por sessão",
    sessoes: "6 sessões / mês",
    economia: "Economia de 1.500 MZN",
    frequencia: "Maior frequência ao longo do mês",
    descricao: "Para quem necessita de um acompanhamento mais próximo e regular. Um espaço seguro para aprofundar questões emocionais e desenvolver estratégias de enfrentamento com maior suporte.",
    ofertas: [
      "Sessões individuais de acompanhamento (6x por mês).",
      "Espaço seguro para falar sobre emoções, relações e desafios pessoais.",
      "Reflexão orientada para autoconhecimento e autoestima.",
      "Acompanhamento estruturado e contínuo com maior proximidade."
    ]
  },
  continuo: {
    nome: "Pacote Contínuo",
    preco: "14.000 MZN",
    precoSessao: "1.750 MZN por sessão",
    sessoes: "8 sessões / mês",
    economia: "Economia de 2.000 MZN",
    frequencia: "2 sessões por semana",
    descricao: "O acompanhamento mais completo para momentos de crise ou profunda transformação pessoal. Proporciona um suporte intensivo para promover mudanças significativas na sua saúde emocional.",
    ofertas: [
      "Sessões individuais de acompanhamento (2x por semana).",
      "Espaço seguro para falar sobre emoções, relações e desafios pessoais.",
      "Reflexão orientada para autoconhecimento e autoestima.",
      "Acompanhamento estruturado, contínuo e intensivo."
    ]
  }
};

const Checkout = () => {
  const { pacote } = useParams<{ pacote: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Se o pacote não existir (URL inválido), cai para o essencial como fallback
  const pacoteId = pacote && pacotesData[pacote as keyof typeof pacotesData] ? pacote : "essencial";
  const detalhes = pacotesData[pacoteId as keyof typeof pacotesData];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <Link to="/#precos" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos pacotes
          </Link>
          
          {/* Seção Principal do Produto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            
            {/* Coluna Esquerda: Imagem do Produto */}
            <div className="bg-card rounded-2xl p-12 flex items-center justify-center min-h-[400px] border border-border">
              <div className="text-center">
                <h2 className="font-display text-4xl text-foreground font-bold mb-2">{detalhes.nome}</h2>
                <p className="text-primary font-medium">{detalhes.sessoes}</p>
              </div>
            </div>
            
            {/* Coluna Direita: Detalhes e Compra */}
            <div className="flex flex-col justify-center">
              <p className="text-sm text-muted-foreground mb-2 font-body">Categoria: Acompanhamento Mensal</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                {detalhes.nome}
              </h1>
              
              <div className="text-3xl font-bold mb-6 text-foreground font-body">
                {detalhes.preco}
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed font-body">
                {detalhes.descricao}
              </p>
              
              <ul className="space-y-3 mb-8 font-body">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {detalhes.frequencia}
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {detalhes.precoSessao}
                </li>
                <li className="flex items-center gap-2 text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {detalhes.economia}
                </li>
              </ul>
              
              <div className="flex gap-4 border-t border-border pt-8">
                <a 
                  href={`https://wa.me/258874552068?text=${encodeURIComponent(`Olá, gostaria de confirmar e agendar o ${detalhes.nome} (${detalhes.preco}). Podemos prosseguir com o pagamento e agendamento?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-medium rounded-lg">
                    Confirmar e Agendar
                  </Button>
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4 text-center font-body">
                Pagamento seguro e protegido. Ao continuar, concorda com os nossos termos de serviço.
              </p>
            </div>
          </div>
          
          {/* Seção de Tabs */}
          <div className="border-t border-border pt-12 mt-12">
            <Tabs defaultValue="descricao" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none h-auto p-0 bg-transparent mb-8 space-x-8">
                <TabsTrigger 
                  value="descricao" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent rounded-none px-0 py-3 font-display text-xl font-bold text-muted-foreground hover:text-foreground data-[state=active]:shadow-none"
                >
                  Descrição
                </TabsTrigger>
                <TabsTrigger 
                  value="avaliacoes"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent rounded-none px-0 py-3 font-display text-xl font-bold text-muted-foreground hover:text-foreground data-[state=active]:shadow-none"
                >
                  Avaliações (0)
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="descricao" className="text-foreground pt-4 font-body">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Descrição</h3>
                
                <p className="mb-6 leading-relaxed">
                  Investir em si também é uma forma de cuidado. Os nossos pacotes foram pensados para facilitar o acompanhamento contínuo, com uma condição mais acessível do que as sessões avulsas, garantindo que pode manter o foco no seu bem-estar emocional sem preocupações.
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  {detalhes.ofertas.map((oferta, idx) => (
                    <li key={idx}>{oferta}</li>
                  ))}
                </ul>
                
                <p className="leading-relaxed font-medium">
                  Após a confirmação do pagamento, a nossa equipa entrará em contacto num prazo de 24 horas para agendar as suas sessões nos horários mais convenientes para si.
                </p>
              </TabsContent>
              
              <TabsContent value="avaliacoes" className="text-muted-foreground pt-4 font-body">
                <p>Ainda não há avaliações para este pacote de acompanhamento.</p>
              </TabsContent>
            </Tabs>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;

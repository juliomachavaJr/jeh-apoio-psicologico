import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Isso é terapia?",
    a: "Não. Este é um serviço de apoio psicológico e aconselhamento. Não substitui psicoterapia presencial ou acompanhamento psiquiátrico.",
  },
  {
    q: "Posso usar em situação de emergência?",
    a: "Não. Este serviço não é indicado para emergências. Em caso de crise, procure um profissional especializado ou ligue para os serviços de emergência.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento deve ser realizado antes do atendimento, via M-Pesa, PayPal ou transferência bancária. O horário só é confirmado após a confirmação do pagamento.",
  },
  {
    q: "Posso cancelar?",
    a: "Sim, o cancelamento é permitido até 12 horas antes do horário agendado. Após esse prazo, a sessão é considerada realizada.",
  },
  {
    q: "As conversas são gravadas?",
    a: "Não. As chamadas não são gravadas e o conteúdo das conversas não é armazenado.",
  },
  {
    q: "Quem pode agendar?",
    a: "Adultos com 18 anos ou mais que precisam de escuta, acolhimento e orientação emocional.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

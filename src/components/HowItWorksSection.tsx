import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Escolha a modalidade", text: "Mensagem de texto ou chamada telefônica." },
  { number: "02", title: "Preencha o formulário", text: "Informações básicas para um atendimento mais acolhedor." },
  { number: "03", title: "Realize o pagamento", text: "M-Pesa, PayPal ou transferência bancária." },
  { number: "04", title: "Receba a confirmação", text: "Data, horário e instruções do atendimento." },
  { number: "05", title: "Atendimento", text: "No horário marcado, o atendimento acontece com atenção total." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            Simples, organizado e seguro.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-6"
            >
              <span className="font-display text-3xl font-bold text-gold/60 shrink-0 w-12">
                {step.number}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

import { motion } from "framer-motion";
import { MessageSquare, Phone, Check } from "lucide-react";

const modalities = [
  {
    icon: MessageSquare,
    title: "Atendimento por Mensagem",
    platform: "Telegram",
    duration: "30 minutos",
    price: "1.200 MZN",
    description: "Indicado para quem prefere escrever, refletir com mais calma e se expressar por mensagens.",
    features: [
      "Mensagens de texto em tempo real",
      "Horário de início e término definidos",
      "Conversa contínua e focada",
      "Conteúdo confidencial",
    ],
  },
  {
    icon: Phone,
    title: "Atendimento por Chamada",
    platform: "Chamada telefônica",
    duration: "60 minutos",
    price: "2.000 MZN",
    description: "Indicado para quem precisa falar, desabafar e se sentir ouvido(a).",
    features: [
      "Chamada de áudio individual",
      "Horário previamente agendado",
      "Atendimento focado e confidencial",
      "Chamadas não são gravadas",
    ],
    highlighted: true,
  },
];

const ModalitiesSection = () => {
  return (
    <section id="modalidades" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Modalidades de Atendimento
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            Escolha a forma que se sentir mais confortável.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {modalities.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl border transition-shadow hover:shadow-lg ${
                mod.highlighted
                  ? "bg-background border-primary/30 shadow-md"
                  : "bg-background border-border"
              }`}
            >
              {mod.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                  Mais procurado
                </div>
              )}

              <div className="w-12 h-12 rounded-full bg-warm-rose-light flex items-center justify-center mb-6">
                <mod.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{mod.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-1">{mod.platform} · {mod.duration}</p>
              <p className="font-body text-sm text-muted-foreground mb-6">{mod.description}</p>

              <ul className="space-y-3 mb-8">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-body text-foreground/80">
                    <Check className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6 flex items-end justify-between">
                <div>
                  <span className="font-display text-2xl font-bold text-foreground">{mod.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">/ sessão</span>
                </div>
                <a
                  href="#agendar"
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Agendar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;

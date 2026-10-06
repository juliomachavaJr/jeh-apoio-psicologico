import { motion } from "framer-motion";
import { Heart, Shield, Lock } from "lucide-react";
import professionalPhoto from "@/assets/YARA8036.jpg";

const values = [
  { icon: Heart, title: "Acolhimento", text: "Escuta atenta e sem julgamento, num ambiente de respeito e empatia." },
  { icon: Shield, title: "Segurança", text: "Estrutura organizada para garantir um atendimento de qualidade." },
  { icon: Lock, title: "Confidencialidade", text: "Suas informações e conversas são tratadas com total sigilo." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center text-left mb-16">
            <div className="md:w-1/3 w-2/3 mx-auto">
              <img src={professionalPhoto} alt="Jéssica da Alzira" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]" />
            </div>
            <div className="md:w-2/3">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                Prazer, sou a Jéssica da Alzira.
              </h2>
              <p className="font-body text-sm text-primary font-medium mb-6">
                Profissional de Apoio Emocional • Atendimento Online
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
                Este serviço nasceu da necessidade de organizar algo que já acontecia: pessoas que me procuram para falar, desabafar e buscar clareza. Pensei em criar um espaço mais estruturado, seguro e acessível.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                A minha metodologia foca-se numa abordagem humanista, baseada numa escuta ativa profunda e sem julgamentos, promovendo o auto-conhecimento e alívio emocional.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-warm-rose-light flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-[#FFF9E6] border border-[#FDE68A] text-center shadow-md"
        >
          <p className="font-body text-sm text-foreground/80 leading-relaxed">
            <strong>Aviso Importante:</strong> Este serviço não substitui psicoterapia ou atendimento 
            psiquiátrico e não é indicado para situações de emergência.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

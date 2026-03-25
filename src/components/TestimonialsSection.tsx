import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "O acompanhamento com a Jéssica ajudou-me a encontrar clareza num momento em que tudo parecia confuso. O espaço é verdadeiramente seguro e livre de julgamentos.",
    author: "M. S.",
  },
  {
    id: 2,
    text: "Senti-me acolhido desde a primeira sessão. A abordagem empática fez toda a diferença para o meu processo de autoconhecimento e gestão de ansiedade.",
    author: "R. A.",
  },
  {
    id: 3,
    text: "Nunca tinha feito terapia antes e tinha algum receio, mas a forma doce e profissional da Jéssica deixou-me imediatamente à vontade. Recomendo muito!",
    author: "L. C.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4"
          >
            O que dizem sobre mim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground text-bas md:text-lg max-w-2xl mx-auto"
          >
            A experiência de quem já deu o primeiro passo na sua jornada de autocuidado.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-background p-8 rounded-2xl border border-border shadow-sm flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <p className="font-body text-foreground leading-relaxed flex-grow mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="font-display font-semibold text-primary text-lg">
                – {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

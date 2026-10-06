import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Send } from "lucide-react";


const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    modality: "",
    hadTherapy: "",
    reason: "",
    emotionalState: "",
    emotionalStateOther: "",
    crisis: "",
    expectation: "",
    agreeTerms: false,
    authorizeData: false,
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [showCrisisAlert, setShowCrisisAlert] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "crisis") {
      setShowCrisisAlert(value === "sim");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (showCrisisAlert) return;

    // Construct WhatsApp message
    const message = `Olá Jéssica! Gostaria de agendar um atendimento.

*Dados do Formulário:*
- *Nome:* ${formData.name}
- *Telefone:* ${formData.city}
- *Modalidade:* ${formData.modality === "mensagem" ? "Atendimento por Mensagem" : "Atendimento por Chamada"}
- *Motivo:* ${formData.reason}
- *Pagamento:* ${paymentMethod === "mpesa" ? "M-Pesa" : paymentMethod === "emola" ? "e-Mola" : "PayPal"}

Aguardando instruções para o próximo passo.`;

    const encodedMessage = encodeURIComponent(message);
    // Usando o link direto pelo número para garantir que a mensagem pré-definida seja enviada corretamente
    const whatsappUrl = `https://wa.me/258874552068?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
    
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow";
  const labelClass = "block text-sm font-body font-medium text-foreground mb-2";

  if (submitted) {
    return (
      <section id="agendar" className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-6">
              <Send className="w-7 h-7 text-sage" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Formulário enviado com sucesso!
            </h2>
            <p className="font-body text-muted-foreground mb-2">
              Receberá em breve as instruções de pagamento e confirmação do seu
              atendimento.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Obrigada por confiar neste espaço. 💛
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="agendar" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Agendar Atendimento
          </h2>
          <p className="font-body text-muted-foreground text-base">
            Preencha o formulário abaixo para iniciar o processo de agendamento.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Nome ou apelido *</label>
              <input
                type="text"
                required
                placeholder="Como prefere ser chamado(a)?"
                className={inputClass}
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Número de Telefone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="Ex: 84 000 0000"
                className={inputClass}
                value={formData.city} // Reusing field for simplicity as per existing state
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
          </div>

          {/* Modality */}
          <div>
            <label className={labelClass}>Escolha a modalidade *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { value: "mensagem", label: "Atendimento por Mensagem" },
                { value: "chamada", label: "Atendimento por Chamada" },
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => handleChange("modality", opt.value)}
                  className={`p-3 rounded-lg border text-center font-body text-sm transition-all ${
                    formData.modality === opt.value
                      ? "border-primary bg-primary/5 text-foreground font-medium"
                      : "border-border bg-background text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className={labelClass}>Motivo do contacto (breve descrição) *</label>
            <textarea
              required
              rows={3}
              placeholder="O que o(a) traz aqui hoje?"
              className={inputClass}
              value={formData.reason}
              onChange={(e) => handleChange("reason", e.target.value)}
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className={labelClass}>
              Escolha o método de pagamento *
            </label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { value: "mpesa", label: "M-Pesa" },
                { value: "emola", label: "e-Mola" },
                { value: "paypal", label: "PayPal" },
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setPaymentMethod(opt.value)}
                  className={`p-4 rounded-lg border text-center font-body font-medium transition-all ${
                    paymentMethod === opt.value
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              {paymentMethod === "mpesa" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-border rounded-lg p-5 text-center shadow-sm"
                >
                  <p className="font-body text-sm text-foreground mb-1">
                    Instruções de pagamento via <strong>M-Pesa</strong>:
                  </p>
                  <p className="font-display text-xl font-bold text-primary">
                    +258 845252068
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">
                    Titular: Jéssica da Alzira
                  </p>
                </motion.div>
              )}
              {paymentMethod === "emola" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-border rounded-lg p-5 text-center shadow-sm"
                >
                  <p className="font-body text-sm text-foreground mb-1">
                    Instruções de pagamento via <strong>e-Mola</strong>:
                  </p>
                  <p className="font-display text-xl font-bold text-primary">
                    +258 874552068
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">
                    Titular: Jéssica da Alzira
                  </p>
                </motion.div>
              )}
              {paymentMethod === "paypal" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-border rounded-lg p-5 text-center shadow-sm"
                >
                  <p className="font-body text-sm text-foreground mb-1">
                    E-mail para pagamento via <strong>PayPal</strong>:
                  </p>
                  <p className="font-display text-base md:text-lg font-bold text-primary break-all">
                    jessica.mmuchanga3@gmail.com
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">
                    Titular: Jéssica da Alzira
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Consents */}
          <div className="space-y-4 pt-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={formData.agreeTerms}
                onChange={(e) => handleChange("agreeTerms", e.target.checked)}
                className="mt-1 accent-primary h-4 w-4 rounded border-gray-300"
              />
              <span className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                Concordo que este serviço é de apoio psicológico e
                aconselhamento, não substituindo psicoterapia ou atendimento de
                emergência. *
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={formData.authorizeData}
                onChange={(e) =>
                  handleChange("authorizeData", e.target.checked)
                }
                className="mt-1 accent-primary h-4 w-4 rounded border-gray-300"
              />
              <span className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                Autorizo o uso das informações acima exclusivamente para fins de
                atendimento. *
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!formData.modality || !paymentMethod}
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg text-base font-medium hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            Confirmar Agendamento
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;

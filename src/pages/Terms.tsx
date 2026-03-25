import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Terms = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main className="max-w-2xl mx-auto pt-32 pb-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Termos de Uso</h1>
      <p className="mb-4">Ao utilizar este serviço, você concorda com os seguintes termos:</p>
      <ul className="list-disc pl-6 mb-8">
        <li>O serviço é destinado ao apoio psicológico e não substitui acompanhamento presencial.</li>
        <li>Seus dados serão tratados com confidencialidade e segurança.</li>
        <li>É proibido o uso do serviço para fins ilícitos ou prejudiciais.</li>
        <li>O usuário é responsável pelas informações fornecidas.</li>
      </ul>
      <h2 className="text-xl font-bold mb-4">Política de Privacidade</h2>
      <p className="mb-4">Esta plataforma respeita sua privacidade. As informações coletadas são utilizadas exclusivamente para fins de atendimento e não serão compartilhadas com terceiros, exceto quando exigido por lei.</p>
      <ul className="list-disc pl-6 mb-8">
        <li>Dados pessoais e sensíveis são protegidos conforme a legislação vigente.</li>
        <li>Você pode solicitar a exclusão de seus dados a qualquer momento.</li>
        <li>Cookies podem ser utilizados para melhorar a experiência do usuário.</li>
      </ul>
      <p className="text-sm text-muted-foreground">Última atualização: 27 de fevereiro de 2026</p>
    </main>
    <Footer />
  </div>
);

export default Terms;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModalitiesSection from "@/components/ModalitiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BookingForm from "@/components/BookingForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ModalitiesSection />
      <PricingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BookingForm />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

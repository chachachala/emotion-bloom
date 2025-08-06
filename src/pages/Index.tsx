import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsEISection from "@/components/WhatIsEISection";
import ComponentsSection from "@/components/ComponentsSection";
import ContactModal from "@/components/ContactModal";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatIsEISection />
        <ComponentsSection />
        
        {/* Placeholder sections for future development */}
        

        <section id="recursos" className="section-padding bg-background text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Recursos y Herramientas
            </h2>
            
            <a href="https://emocionaligencia.com/" target="_blank" rel="noopener noreferrer" className="btn-hero inline-block">
              Visitar Blog de Inteligencia Emocional
            </a>
          </div>
        </section>

        

        

        <section id="contacto" className="section-padding bg-gradient-warm text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Contacto y Soporte
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ¿Necesitas ayuda? Estamos aquí para apoyarte en tu crecimiento emocional
            </p>
            <ContactModal />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Emotion Bloom</h3>
          <p className="text-primary-foreground/80 mb-6">
            Transformando vidas a través de la inteligencia emocional
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Emotion Bloom. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsEISection from "@/components/WhatIsEISection";
import ComponentsSection from "@/components/ComponentsSection";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatIsEISection />
        <ComponentsSection />
        
        {/* Placeholder sections for future development */}
        <section id="test" className="section-padding bg-muted/20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Test de Inteligencia Emocional
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Próximamente: Un test interactivo personalizado para evaluar tu IE
            </p>
            <div className="bg-white rounded-2xl p-12 shadow-gentle">
              <p className="text-muted-foreground">🧠 Sección en desarrollo...</p>
            </div>
          </div>
        </section>

        <section id="recursos" className="section-padding bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Recursos y Herramientas
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Biblioteca completa de libros, podcasts, videos y herramientas digitales
            </p>
            <div className="bg-gradient-calm rounded-2xl p-12 shadow-gentle">
              <p className="text-muted-foreground">📚 Sección en desarrollo...</p>
            </div>
          </div>
        </section>

        <section id="blog" className="section-padding bg-muted/20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Blog de Inteligencia Emocional
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Artículos sobre emociones, relaciones, mindfulness y crecimiento personal
            </p>
            <div className="bg-white rounded-2xl p-12 shadow-gentle">
              <p className="text-muted-foreground">✍️ Sección en desarrollo...</p>
            </div>
          </div>
        </section>

        <section id="comunidad" className="section-padding bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Comunidad y Foro
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Conecta con otros en su viaje de crecimiento emocional
            </p>
            <div className="bg-gradient-calm rounded-2xl p-12 shadow-gentle">
              <p className="text-muted-foreground">👥 Sección en desarrollo...</p>
            </div>
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
            
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Emotion Bloom</h3>
          <p className="text-white/80 mb-6">
            Transformando vidas a través de la inteligencia emocional
          </p>
          <p className="text-white/60 text-sm">
            © 2024 Emotion Bloom. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-emotional-intelligence.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-warm">
                <Sparkles className="h-4 w-4" />
                <span>Descubre tu potencial emocional</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Desarrolla tu
                <span className="text-accent"> Inteligencia Emocional</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Aprende a comprender, gestionar y aplicar tus emociones para mejorar 
                tus relaciones, tomar mejores decisiones y encontrar el bienestar 
                que mereces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Comenzar tu viaje
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                Ver recursos gratuitos
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-white/70">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/70">Estudiantes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5★</div>
                <div className="text-sm text-white/70">Valoración</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-gentle-float">
              <img
                src={heroImage}
                alt="Personas conectando emocionalmente"
                className="w-full h-auto rounded-3xl shadow-warm"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full animate-warm-pulse opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full opacity-40"></div>
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-primary-glow rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
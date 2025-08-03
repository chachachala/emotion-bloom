import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users, TrendingUp } from "lucide-react";

const WhatIsEISection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Mejor toma de decisiones",
      description: "Las emociones guían nuestras decisiones más que la lógica pura"
    },
    {
      icon: Heart,
      title: "Bienestar emocional",
      description: "Reduce el estrés y aumenta la satisfacción personal"
    },
    {
      icon: Users,
      title: "Relaciones más fuertes",
      description: "Mejora la comunicación y la conexión con otros"
    },
    {
      icon: TrendingUp,
      title: "Éxito profesional",
      description: "90% del rendimiento laboral depende de la inteligencia emocional"
    }
  ];

  const timeline = [
    {
      year: "1990",
      title: "Primeros estudios",
      description: "Mayer y Salovey acuñan el término 'Inteligencia Emocional'"
    },
    {
      year: "1995",
      title: "Popularización",
      description: "Daniel Goleman publica su bestseller sobre IE"
    },
    {
      year: "2000+",
      title: "Investigación actual",
      description: "Miles de estudios confirman su importancia en todos los ámbitos de la vida"
    }
  ];

  return (
    <section id="que-es" className="section-padding bg-gradient-calm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            ¿Qué es la
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Inteligencia Emocional?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            La inteligencia emocional es la capacidad de reconocer, comprender y gestionar 
            nuestras propias emociones, así como las de otras personas. Es la habilidad que 
            nos permite navegar exitosamente por la vida social y emocional.
          </p>
        </div>

        {/* Main Definition */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-gentle mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-semibold text-foreground">
                Más que un concepto, es una revolución personal
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A diferencia del coeficiente intelectual (CI), que permanece relativamente 
                estático, la inteligencia emocional puede desarrollarse y mejorarse a lo 
                largo de toda la vida. Es la diferencia entre reaccionar y responder, 
                entre sobrevivir y prosperar.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                <p className="text-accent-foreground font-medium italic">
                  "La inteligencia emocional representa el 90% de lo que nos hace 
                  avanzar en la vida cuando el CI y las habilidades técnicas son similares."
                </p>
                <cite className="text-sm text-muted-foreground">- Daniel Goleman</cite>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="card-gentle empathy-hover">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-semibold text-center text-foreground mb-12">
            Historia y evolución del concepto
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}>
                    <Card className="card-gentle">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <h4 className="text-xl font-semibold text-foreground mb-3">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Models */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-gentle">
          <h3 className="text-3xl font-display font-semibold text-center text-foreground mb-8">
            Modelos principales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-gentle">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Modelo de Mayer-Salovey
                </h4>
                <p className="text-muted-foreground mb-4">
                  Se enfoca en cuatro habilidades básicas:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Percepción emocional</li>
                  <li>• Uso de emociones</li>
                  <li>• Comprensión emocional</li>
                  <li>• Regulación emocional</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gentle">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Modelo de Goleman
                </h4>
                <p className="text-muted-foreground mb-4">
                  Incluye competencias personales y sociales:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Autoconciencia</li>
                  <li>• Autorregulación</li>
                  <li>• Motivación</li>
                  <li>• Empatía</li>
                  <li>• Habilidades sociales</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEISection;
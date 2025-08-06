import { Card, CardContent } from "@/components/ui/card";
import selfAwarenessIcon from "@/assets/icon-self-awareness.jpg";
import regulationIcon from "@/assets/icon-regulation.jpg";
import motivationIcon from "@/assets/icon-motivation.jpg";
import empathyIcon from "@/assets/icon-empathy.jpg";
import socialIcon from "@/assets/icon-social.jpg";

const ComponentsSection = () => {
  const components = [
    {
      title: "Autoconciencia",
      description: "Reconoce y comprende tus propias emociones, fortalezas y limitaciones. El primer paso hacia el crecimiento emocional.",
      icon: selfAwarenessIcon,
      color: "from-primary/20 to-primary/5",
      examples: ["Mindfulness emocional", "Autorreflexión", "Diario emocional"]
    },
    {
      title: "Autorregulación",
      description: "Gestiona tus emociones de manera efectiva, adaptándote a los cambios y manteniendo el control en situaciones desafiantes.",
      icon: regulationIcon,
      color: "from-secondary/30 to-secondary/10",
      examples: ["Técnicas de respiración", "Gestión del estrés", "Flexibilidad emocional"]
    },
    {
      title: "Motivación",
      description: "Cultiva la motivación intrínseca, establece metas significativas y persigue tus objetivos con pasión y persistencia.",
      icon: motivationIcon,
      color: "from-accent/25 to-accent/8",
      examples: ["Metas personales", "Resiliencia", "Optimismo"]
    },
    {
      title: "Empatía",
      description: "Desarrolla la capacidad de comprender y conectar con las emociones de otros, fortaleciendo tus relaciones interpersonales.",
      icon: empathyIcon,
      color: "from-purple-200/30 to-purple-100/10",
      examples: ["Escucha activa", "Perspectiva", "Comprensión emocional"]
    },
    {
      title: "Habilidades Sociales",
      description: "Mejora tu comunicación, liderazgo y capacidad para construir relaciones positivas y duraderas con otros.",
      icon: socialIcon,
      color: "from-green-200/30 to-green-100/10",
      examples: ["Comunicación asertiva", "Resolución de conflictos", "Trabajo en equipo"]
    }
  ];

  return (
    <section id="componentes" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Los 5 Componentes de la
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Inteligencia Emocional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Según el modelo de Daniel Goleman, estos son los pilares fundamentales 
            para desarrollar una inteligencia emocional sólida y transformadora.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <Card 
              key={component.title} 
              className={`card-gentle empathy-hover group cursor-pointer overflow-hidden ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-0">
                {/* Icon and Background */}
                <div className={`relative h-48 bg-gradient-to-br ${component.color} flex items-center justify-center`}>
                  <img
                    src={component.icon}
                    alt={component.title}
                    className="w-24 h-24 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-display font-semibold text-foreground">
                    {component.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {component.description}
                  </p>

                  {/* Examples */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground opacity-80">
                      Incluye:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {component.examples.map((example) => (
                        <span
                          key={example}
                          className="inline-block bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-calm p-8 rounded-3xl border border-border">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              ¿Listo para evaluar tu inteligencia emocional?
            </h3>
            <p className="text-muted-foreground mb-6">
              Descubre tu nivel actual en cada componente con nuestro test personalizado
            </p>
            <a 
              href="https://www.yourselfirst.com/es/iq?utm_source=google&utm_medium=cpc&utm_campaign=LATAM_IQ_test&utm_term=test+de+inteligencia+emocional&utm_ad_id=725214188822&utm_adset_id=170438745005&utm_campaign_id=22017225326&utm_adset_name=LATAM_IQ_test&utm_campaign_name=LATAM_IQ_test&gclid=CjwKCAjw-svEBhB6EiwAEzSdrusxT--dRJE5y7F4ysTBzmOBzVB-DN8Bqv0V6oBrtcNd4RUSERPqxBoCLaYQAvD_BwE&gbraid=0AAAAA-F0vozzPNDl0tMyHzQNrsFA3rCyB&uuid=9b53afc7-85c0-430c-b142-888c1ef30ddf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-block"
            >
              Realizar Test Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
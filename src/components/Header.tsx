import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "¿Qué es IE?", href: "#que-es" },
    { name: "Componentes", href: "#componentes" },
    { name: "Test IE", href: "#test" },
    { name: "Recursos", href: "#recursos" },
    { name: "Blog", href: "#blog" },
    { name: "Comunidad", href: "#comunidad" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-full">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              Emotion Bloom
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://www.yourselfirst.com/es/iq?utm_source=google&utm_medium=cpc&utm_campaign=LATAM_IQ_test&utm_term=test+de+inteligencia+emocional&utm_ad_id=725214188822&utm_adset_id=170438745005&utm_campaign_id=22017225326&utm_adset_name=LATAM_IQ_test&utm_campaign_name=LATAM_IQ_test&gclid=CjwKCAjw-svEBhB6EiwAEzSdrusxT--dRJE5y7F4ysTBzmOBzVB-DN8Bqv0V6oBrtcNd4RUSERPqxBoCLaYQAvD_BwE&gbraid=0AAAAA-F0vozzPNDl0tMyHzQNrsFA3rCyB&uuid=9b53afc7-85c0-430c-b142-888c1ef30ddf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-block"
            >
              Comenzar Test
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <a 
                  href="https://www.yourselfirst.com/es/iq?utm_source=google&utm_medium=cpc&utm_campaign=LATAM_IQ_test&utm_term=test+de+inteligencia+emocional&utm_ad_id=725214188822&utm_adset_id=170438745005&utm_campaign_id=22017225326&utm_adset_name=LATAM_IQ_test&utm_campaign_name=LATAM_IQ_test&gclid=CjwKCAjw-svEBhB6EiwAEzSdrusxT--dRJE5y7F4ysTBzmOBzVB-DN8Bqv0V6oBrtcNd4RUSERPqxBoCLaYQAvD_BwE&gbraid=0AAAAA-F0vozzPNDl0tMyHzQNrsFA3rCyB&uuid=9b53afc7-85c0-430c-b142-888c1ef30ddf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero w-full inline-block text-center"
                >
                  Comenzar Test
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Zap, TrendingUp, Crown, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-nexus.jpg";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Exceptional results that exceeded all expectations. They delivered solutions others deemed impossible.",
      author: "Anonymous Executive",
      role: "Fortune 500 Company"
    },
    {
      text: "Absolute discretion and remarkable effectiveness. They handle complex situations with unmatched expertise.",
      author: "Confidential Client",
      role: "International Business"
    },
    {
      text: "Strategic guidance that transformed my entire business trajectory. Truly unparalleled consulting.",
      author: "Private Client",
      role: "Investment Management"
    }
  ];

  const services = [
    {
      title: "Financial Management",
      description: "Comprehensive wealth protection and asset optimization through advanced security protocols.",
      icon: Shield,
      features: ["Secure asset management", "Strategic investment planning", "Confidential wealth protection"]
    },
    {
      title: "Crisis Resolution",
      description: "Expert solutions for complex business and personal challenges with absolute discretion.",
      icon: Zap,
      features: ["Strategic problem solving", "Reputation management", "Confidential crisis handling"]
    },
    {
      title: "Growth Strategy",
      description: "Accelerated pathways for career advancement and business expansion through strategic planning.",
      icon: TrendingUp,
      features: ["Strategic networking", "Business acceleration", "Career advancement planning"]
    },
    {
      title: "Elite Services",
      description: "Bespoke consulting solutions for high-profile clients with unique and complex requirements.",
      icon: Crown,
      features: ["Personalized strategies", "High-level connections", "Exclusive opportunities"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-background relative">
      <MatrixRain />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 bg-gradient-quantum bg-clip-text text-transparent">
              NEXUS SHADOW
            </h1>
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-8 text-primary">
              COLLECTIVE
            </h2>
          </div>
          
          <p className="text-2xl md:text-3xl font-cyber mb-8 text-muted-foreground max-w-4xl mx-auto">
            Elite Consulting for Unprecedented Results
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-foreground/80 max-w-3xl mx-auto">
            Discreet, high-level consulting for influential clients who require 
            exceptional solutions and absolute confidentiality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-primary">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional consulting solutions for complex challenges and strategic advancement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 h-full bg-card/50 backdrop-blur-lg border border-primary/30 hover:border-primary/50 transition-all">
                <CardContent className="p-0">
                  <div className="mb-6 flex justify-center">
                    <service.icon className="w-12 h-12 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-12 text-primary">
            Client Success
          </h2>
          
          <Card className="p-8 bg-card/50 backdrop-blur-lg border border-primary/30">
            <CardContent className="p-0">
              <Quote className="w-12 h-12 text-accent mx-auto mb-6 opacity-50" />
              
              <div className="relative h-32 flex items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-xl md:text-2xl font-cyber mb-6 text-foreground">
                      "{testimonial.text}"
                    </p>
                    <div className="text-primary font-orbitron font-bold">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="p-12 bg-card/50 backdrop-blur-lg border border-primary/30">
            <CardContent className="p-0">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-primary">
                Ready to Begin?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                Join our exclusive clientele who demand exceptional results. 
                Experience consulting that delivers the impossible.
              </p>
              
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Us Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;

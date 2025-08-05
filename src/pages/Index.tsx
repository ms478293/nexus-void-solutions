import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Zap, Brain, Crown, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import QuantumButton from "@/components/QuantumButton";
import HologramCard from "@/components/HologramCard";
import heroImage from "@/assets/hero-nexus.jpg";
import quantumFinance from "@/assets/quantum-finance.jpg";
import crisisNeural from "@/assets/crisis-neural.jpg";
import growthEngine from "@/assets/growth-engine.jpg";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "They solved the impossible. My career trajectory shifted overnight through their quantum algorithms.",
      author: "Anonymous Fortune 500 CEO",
      role: "Global Industries"
    },
    {
      text: "The neural prediction matrix identified threats before they materialized. Untraceable, unstoppable.",
      author: "Classified Political Figure",
      role: "International Relations"
    },
    {
      text: "Financial ascension beyond conventional limits. The quantum vault secured assets I didn't know existed.",
      author: "Anonymous Billionaire",
      role: "Private Equity"
    }
  ];

  const services = [
    {
      title: "Financial Mastery",
      description: "Quantum-secured vaults managing assets through hyper-encrypted protocols beyond conventional banking.",
      icon: Shield,
      image: quantumFinance,
      features: ["Unbreakable quantum entanglement protocols", "Asset optimization across realities", "Untraceable financial elevation"]
    },
    {
      title: "Crisis Intervention",
      description: "Predictive AI resolves threats before they manifest using temporal algorithms and neural forecasting.",
      icon: Brain,
      image: crisisNeural,
      features: ["Threat neutralization algorithms", "Predictive crisis mapping", "Reality-warping solutions"]
    },
    {
      title: "Growth Acceleration",
      description: "Career and business ascension via neural strategy mapping and dimensional networking protocols.",
      icon: Zap,
      image: growthEngine,
      features: ["Neural networking matrices", "Quantum opportunity detection", "Ascension engine protocols"]
    },
    {
      title: "Elite Elevation",
      description: "Bespoke power amplification through reality-bending technologies and interdimensional influence.",
      icon: Crown,
      image: growthEngine,
      features: ["God-tier status protocols", "Reality manipulation engines", "Infinite power recursion"]
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
            <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 bg-gradient-quantum bg-clip-text text-transparent animate-quantum-pulse">
              NEXUS SHADOW
            </h1>
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-8 text-primary">
              COLLECTIVE
            </h2>
          </div>
          
          <p className="text-2xl md:text-3xl font-cyber mb-8 text-muted-foreground max-w-4xl mx-auto">
            We Handle the Impossible – Quantum-Discreet Elevation for the Elite
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-foreground/80 max-w-3xl mx-auto">
            Enter the quantum nexus where power meets secrecy. Ultra-secured consulting 
            for high-profile clients in untraceable digital realms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <QuantumButton className="text-lg px-8 py-4">
                Initiate Quantum Link
              </QuantumButton>
            </Link>
            <Link to="/services">
              <QuantumButton variant="secondary" className="text-lg px-8 py-4">
                Explore Capabilities
              </QuantumButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-primary">
              Impossible Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond conventional consulting—neural-enhanced solutions for those who shape reality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <HologramCard key={index} className="p-6 h-full">
                <div className="relative mb-6 h-40 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-void/50" />
                  <service.icon className="absolute top-4 right-4 w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
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
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-12 text-primary">
            Quantum Testimonials
          </h2>
          
          <HologramCard className="p-8" glowColor="neural">
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
          </HologramCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HologramCard className="p-12" glowColor="quantum">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-primary">
              Ready to Enter the Nexus?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Join the elite who operate beyond conventional reality. 
              Your ascension awaits in the quantum realm.
            </p>
            
            <Link to="/contact">
              <QuantumButton className="text-lg px-8 py-4">
                Initialize Neural Contact
              </QuantumButton>
            </Link>
          </HologramCard>
        </div>
      </section>
    </div>
  );
};

export default Index;

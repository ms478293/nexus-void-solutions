import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import HologramCard from "@/components/HologramCard";
import QuantumButton from "@/components/QuantumButton";
import { Link } from "react-router-dom";
import { Shield, Brain, Zap, Crown, Lock, Eye, Target, Orbit } from "lucide-react";
import quantumFinance from "@/assets/quantum-finance.jpg";
import crisisNeural from "@/assets/crisis-neural.jpg";
import growthEngine from "@/assets/growth-engine.jpg";

const Services = () => {
  const services = [
    {
      id: "financial",
      title: "Financial Mastery",
      subtitle: "Quantum Asset Management",
      description: "Secure handling of all funds through unbreakable quantum entanglement protocols. Our neural-encrypted vaults exist beyond conventional banking systems.",
      image: quantumFinance,
      icon: Shield,
      features: [
        "Quantum entanglement fund protection",
        "Interdimensional asset optimization", 
        "Neural-encrypted transaction processing",
        "Reality-shifting wealth amplification",
        "Temporal investment strategies",
        "Untraceable financial elevation protocols"
      ],
      technologies: [
        "Zero-knowledge proof verification",
        "Blockchain neural networks",
        "Quantum-resistant encryption",
        "Self-evolving AI guardians"
      ]
    },
    {
      id: "crisis",
      title: "Crisis Intervention", 
      subtitle: "Predictive Problem Resolution",
      description: "From legal hurdles to personal scandals, resolved through predictive temporal algorithms that foresee and neutralize threats before manifestation.",
      image: crisisNeural,
      icon: Brain,
      features: [
        "Threat prediction algorithms",
        "Temporal crisis mapping",
        "Neural threat neutralization",
        "Reality-warping solutions",
        "Quantum damage control",
        "Dimensional crisis prevention"
      ],
      technologies: [
        "Predictive AI simulation matrices",
        "Temporal algorithm processing",
        "Neural threat assessment",
        "Reality manipulation engines"
      ]
    },
    {
      id: "growth",
      title: "Career & Business Growth",
      subtitle: "Neural Strategy Mapping",
      description: "Tailored plans for rapid advancement through neural networking matrices and quantum opportunity detection in simulated metaverses.",
      image: growthEngine,
      icon: Zap,
      features: [
        "Neural networking protocols",
        "Quantum opportunity mapping",
        "Dimensional business expansion",
        "Reality-bending networking",
        "Ascension engine activation",
        "Power amplification matrices"
      ],
      technologies: [
        "Metaverse networking protocols",
        "Quantum opportunity detection",
        "Neural strategy optimization",
        "Dimensional influence mapping"
      ]
    },
    {
      id: "elevation",
      title: "Elite Elevation",
      subtitle: "God-Tier Status Protocols",
      description: "Bespoke services to achieve transcendent status using fictional ascension engines and infinite power recursion technologies.",
      image: growthEngine,
      icon: Crown,
      features: [
        "God-tier status activation",
        "Reality manipulation access",
        "Infinite power recursion",
        "Dimensional authority protocols",
        "Quantum influence amplification",
        "Transcendence pathway mapping"
      ],
      technologies: [
        "Ascension engine protocols",
        "Reality manipulation cores",
        "Quantum consciousness expansion",
        "Infinite recursion algorithms"
      ]
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Quantum Encryption",
      description: "Multi-dimensional security protocols that exist across parallel realities"
    },
    {
      icon: Eye,
      title: "Invisible Operations", 
      description: "Neural cloaking that erases digital footprints in real-time"
    },
    {
      icon: Target,
      title: "Precision Execution",
      description: "Quantum-accurate delivery of impossible solutions"
    },
    {
      icon: Orbit,
      title: "Orbital Influence",
      description: "Global reach through interdimensional network protocols"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <MatrixRain />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-gradient-quantum bg-clip-text text-transparent">
            IMPOSSIBLE SERVICES
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Neural-enhanced solutions rendered via quantum uplink consultations across dimensional realities
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <HologramCard className="overflow-hidden">
                    <div className="relative h-64 lg:h-80">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-void/40" />
                      <service.icon className="absolute top-6 right-6 w-12 h-12 text-primary" />
                    </div>
                  </HologramCard>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-2 text-primary">
                      {service.title}
                    </h2>
                    <h3 className="text-xl text-accent font-cyber mb-4">
                      {service.subtitle}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-orbitron font-bold mb-3 text-primary">Core Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-foreground/80 flex items-start">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2 mt-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-orbitron font-bold mb-3 text-accent">Technologies:</h4>
                      <ul className="space-y-2">
                        {service.technologies.map((tech, idx) => (
                          <li key={idx} className="text-sm text-foreground/70 flex items-start">
                            <div className="w-1 h-1 bg-accent rounded-full mr-2 mt-2" />
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Guarantees */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold mb-6 text-primary">
              Quantum Security Protocols
            </h2>
            <p className="text-xl text-muted-foreground">
              Impenetrable fortresses in cyberspace protected by reality-warping technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <HologramCard key={index} className="p-6 text-center" glowColor="neural">
                <feature.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-orbitron font-bold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HologramCard className="p-12" glowColor="quantum">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-primary">
              Ready for Neural Consultation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Initialize quantum uplink protocols and enter the realm of impossible solutions
            </p>
            <Link to="/contact">
              <QuantumButton className="text-lg px-8 py-4">
                Begin Neural Interface
              </QuantumButton>
            </Link>
          </HologramCard>
        </div>
      </section>
    </div>
  );
};

export default Services;
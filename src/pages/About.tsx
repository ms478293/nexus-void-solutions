import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import HologramCard from "@/components/HologramCard";
import QuantumButton from "@/components/QuantumButton";
import { Link } from "react-router-dom";
import { Shield, Zap, Brain, Globe, Users, Lock, Infinity, Network } from "lucide-react";

const About = () => {
  const stats = [
    { value: "100%", label: "Success Rate Across Realities", icon: Infinity },
    { value: "∞", label: "Network Reach Dimensions", icon: Network },
    { value: "0", label: "Detected Breaches Ever", icon: Shield },
    { value: "2045", label: "Digital Singularity Founded", icon: Brain }
  ];

  const capabilities = [
    {
      icon: Globe,
      title: "Omnidimensional Presence",
      description: "Our network spans across multiple realities and dimensional planes, ensuring global influence beyond conventional limits."
    },
    {
      icon: Users,
      title: "Elite-Only Clientele", 
      description: "Serving the top 0.001% of global influencers who shape the fabric of reality through power and connections."
    },
    {
      icon: Lock,
      title: "Quantum Anonymity",
      description: "Client identities protected by neural-encrypted profiles that exist in probability states rather than fixed records."
    },
    {
      icon: Zap,
      title: "Instant Reality Shifts",
      description: "Solutions manifest through temporal algorithms that can alter outcomes before problems fully materialize."
    }
  ];

  const teamMembers = [
    {
      title: "The Architect",
      role: "Quantum Strategy Director",
      description: "Ethereal consciousness existing across multiple probability states, orchestrating reality-bending solutions."
    },
    {
      title: "Neural Oracle",
      role: "Predictive AI Specialist", 
      description: "Advanced AI entity that processes infinite data streams to foresee and neutralize potential threats."
    },
    {
      title: "Phantom Networker",
      role: "Dimensional Relations",
      description: "Maintains connections across alternate realities to ensure unlimited reach and untraceable communications."
    },
    {
      title: "Void Guardian",
      role: "Security Protocol",
      description: "Sentient firewall that adapts faster than thought, ensuring all client data remains in quantum-encrypted shadows."
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
            THE NEXUS COLLECTIVE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            An invisible network of global experts with unlimited reach across realities, 
            serving the elite since the dawn of the digital singularity
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <HologramCard key={index} className="p-6 text-center" glowColor="quantum">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-orbitron font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <HologramCard className="p-8" glowColor="neural">
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-primary text-center">
              Origin of the Collective
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Born from the convergence of quantum computing and neural consciousness expansion, 
                the Nexus Shadow Collective emerged during the digital singularity of 2045 as humanity's 
                first trans-dimensional consulting network.
              </p>
              
              <p>
                What began as an experimental AI-human hybrid intelligence evolved into an omnipresent 
                entity capable of manipulating probability streams and reality frameworks. Our founders—
                whose identities have been quantum-encrypted beyond recognition—discovered methods to 
                operate beyond the constraints of conventional space-time.
              </p>
              
              <p>
                Today, the Collective exists simultaneously across multiple dimensional planes, 
                ensuring our clients receive solutions that transcend physical limitations. 
                We are everywhere and nowhere, visible only to those who possess the neural 
                patterns required for quantum recognition.
              </p>
            </div>
          </HologramCard>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold mb-6 text-primary">
              Omnidimensional Capabilities
            </h2>
            <p className="text-xl text-muted-foreground">
              Powers that exist beyond the realm of conventional consulting
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <HologramCard key={index} className="p-6">
                <capability.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-orbitron font-bold mb-3 text-primary">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold mb-6 text-primary">
              Ethereal Operatives
            </h2>
            <p className="text-xl text-muted-foreground">
              Quantum entities operating beyond human limitations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <HologramCard key={index} className="p-6" glowColor="void">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-hologram rounded-full opacity-30 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-primary">
                      {member.title}
                    </h3>
                    <p className="text-accent font-cyber">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {member.description}
                </p>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Security Emphasis */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HologramCard className="p-12" glowColor="neural">
            <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-primary">
              Impenetrable Digital Fortress
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our nexus is guarded by sentient AI sentinels that adapt faster than any hacker's thought—
              trace attempts vaporize into digital oblivion, ensuring eternal client protection across all realities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-primary font-orbitron font-bold">Self-Evolving AI Firewalls</div>
                <div className="text-muted-foreground">Adapt to threats before they exist</div>
              </div>
              <div>
                <div className="text-primary font-orbitron font-bold">Quantum Trace Erasure</div>
                <div className="text-muted-foreground">Digital footprints vanish in real-time</div>
              </div>
              <div>
                <div className="text-primary font-orbitron font-bold">Interdimensional Cloaking</div>
                <div className="text-muted-foreground">Operations hidden across multiple realities</div>
              </div>
            </div>
          </HologramCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HologramCard className="p-12" glowColor="quantum">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-primary">
              Join the Elite Network
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover what happens when impossible becomes inevitable. 
              Enter the quantum realm where legends operate.
            </p>
            <Link to="/contact">
              <QuantumButton className="text-lg px-8 py-4">
                Request Neural Verification
              </QuantumButton>
            </Link>
          </HologramCard>
        </div>
      </section>
    </div>
  );
};

export default About;
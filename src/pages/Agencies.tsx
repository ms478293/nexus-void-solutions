import { useState } from "react";
import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import HologramCard from "@/components/HologramCard";
import QuantumButton from "@/components/QuantumButton";
import { Eye, Users, FileText, Zap, Brain, Shield, Globe, Lock } from "lucide-react";
import { toast } from "sonner";

const Agencies = () => {
  const [authStep, setAuthStep] = useState<"phantom" | "psy-auth" | "access">("phantom");
  const [psychicPattern, setPsychicPattern] = useState<string[]>([]);
  const [targetPattern] = useState(["alpha", "neural", "omega", "quantum"]);

  const handlePhantomGate = () => {
    toast.loading("Entering phantom gate protocols...");
    
    setTimeout(() => {
      toast.success("Phantom gate traversed. Initiating psy-authentication.");
      setAuthStep("psy-auth");
    }, 2500);
  };

  const handlePsychicInput = (pattern: string) => {
    const newPattern = [...psychicPattern, pattern];
    setPsychicPattern(newPattern);
    
    if (newPattern.length === targetPattern.length) {
      if (JSON.stringify(newPattern) === JSON.stringify(targetPattern)) {
        toast.success("Psychic pattern verified. Welcome, Shadow Agent.");
        setAuthStep("access");
      } else {
        toast.error("Psychic mismatch detected. Pattern sequence reset.");
        setPsychicPattern([]);
      }
    }
  };

  const espionageServices = [
    {
      title: "Encrypted Dead Drops",
      description: "Quantum-encrypted information exchange points across dimensional barriers",
      icon: FileText,
      capabilities: ["Neural data packets", "Reality-shifting intelligence", "Temporal message drops"]
    },
    {
      title: "AI-Forged Identities", 
      description: "Complete consciousness reconstruction for deep cover operations",
      icon: Users,
      capabilities: ["Neural identity masks", "Quantum personality shifts", "Memory implantation"]
    },
    {
      title: "Dimensional Surveillance",
      description: "Omnipresent monitoring across multiple reality planes simultaneously",
      icon: Globe,
      capabilities: ["Multi-reality tracking", "Quantum surveillance grids", "Neural pattern monitoring"]
    }
  ];

  const activeOperations = [
    {
      id: "PHANTOM-7792",
      codename: "Quantum Shadow",
      classification: "ULTRA BLACK",
      status: "DEEP COVER",
      operatives: 3
    },
    {
      id: "NEURAL-4456",
      codename: "Reality Breach", 
      classification: "COSMIC SECRET",
      status: "SURVEILLANCE",
      operatives: 7
    },
    {
      id: "VOID-9981",
      codename: "Dimensional Hunt",
      classification: "BEYOND BLACK",
      status: "ACTIVE PURSUIT",
      operatives: 12
    }
  ];

  if (authStep === "phantom") {
    return (
      <div className="min-h-screen bg-background relative">
        <MatrixRain />
        <Navigation />
        
        <section className="pt-24 relative min-h-screen flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4">
            <HologramCard className="p-8 text-center" glowColor="void">
              <Eye className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />
              
              <h1 className="text-3xl font-orbitron font-bold mb-4 text-primary">
                AGENCIES PORTAL
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Dedicated liaison portal for intelligence agencies and shadow organizations. 
                Entry through phantom gates with multi-factor psy-authentication required.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="text-left space-y-2">
                  <div className="text-sm text-primary font-cyber">◆ Phantom gate traversal required</div>
                  <div className="text-sm text-primary font-cyber">◆ Psychic pattern verification</div>
                  <div className="text-sm text-primary font-cyber">◆ Multi-factor consciousness auth</div>
                  <div className="text-sm text-accent font-cyber">◆ Reality-warping code protection</div>
                </div>
              </div>
              
              <QuantumButton onClick={handlePhantomGate} className="w-full">
                Enter Phantom Gate
              </QuantumButton>
              
              <p className="text-xs text-muted-foreground mt-4">
                Breaches trigger self-erasing wormholes for eternal secrecy
              </p>
            </HologramCard>
          </div>
        </section>
      </div>
    );
  }

  if (authStep === "psy-auth") {
    const patternOptions = ["alpha", "beta", "gamma", "delta", "neural", "quantum", "omega", "void"];
    
    return (
      <div className="min-h-screen bg-background relative">
        <MatrixRain />
        <Navigation />
        
        <section className="pt-24 relative min-h-screen flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4">
            <HologramCard className="p-8 text-center" glowColor="neural">
              <Brain className="w-16 h-16 text-primary mx-auto mb-6 animate-quantum-pulse" />
              
              <h1 className="text-3xl font-orbitron font-bold mb-4 text-primary">
                PSY-AUTHENTICATION
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Enter the psychic pattern sequence. Your consciousness signature 
                will be verified across dimensional frequencies.
              </p>
              
              <div className="mb-6">
                <div className="text-sm text-primary mb-4">
                  Pattern Progress: {psychicPattern.length}/4
                </div>
                <div className="flex justify-center space-x-2 mb-4">
                  {[0,1,2,3].map((i) => (
                    <div 
                      key={i}
                      className={`w-4 h-4 rounded-full border-2 ${
                        psychicPattern[i] ? 'bg-primary border-primary' : 'border-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 mb-6">
                {patternOptions.map((option) => (
                  <QuantumButton
                    key={option}
                    onClick={() => handlePsychicInput(option)}
                    variant="secondary"
                    className="text-xs p-2"
                  >
                    {option}
                  </QuantumButton>
                ))}
              </div>
              
              <QuantumButton 
                onClick={() => setPsychicPattern([])}
                variant="danger"
                className="text-sm"
              >
                Reset Pattern
              </QuantumButton>
              
              <p className="text-xs text-muted-foreground mt-4">
                Incorrect patterns trigger neural feedback loops
              </p>
            </HologramCard>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <MatrixRain />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-gradient-neural bg-clip-text text-transparent">
              SHADOW NETWORK
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome to the intelligence nexus. Psychic authentication verified.
            </p>
          </div>
        </div>
      </section>

      {/* Security Status */}
      <section className="pb-8 relative">
        <div className="max-w-6xl mx-auto px-4">
          <HologramCard className="p-4" glowColor="void">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Lock className="w-8 h-8 text-accent" />
                <div>
                  <div className="font-orbitron font-bold text-primary">Shadow Protocol Status</div>
                  <div className="text-sm text-muted-foreground">Reality-warping code layers active</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-accent font-orbitron font-bold">ETERNAL SECRECY</div>
                <div className="text-sm text-muted-foreground">All dimensional barriers</div>
              </div>
            </div>
          </HologramCard>
        </div>
      </section>

      {/* Espionage Services */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Espionage-Grade Operations
          </h2>
          
          <div className="space-y-8">
            {espionageServices.map((service, index) => (
              <HologramCard key={index} className="p-6" glowColor="neural">
                <div className="flex items-start space-x-6">
                  <service.icon className="w-12 h-12 text-accent mt-2" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-orbitron font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-sm text-foreground/80">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Active Operations */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Active Black Operations
          </h2>
          
          <div className="space-y-6">
            {activeOperations.map((op) => (
              <HologramCard key={op.id} className="p-6" glowColor="void">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="font-cyber text-accent text-sm">{op.id}</span>
                      <span className="px-2 py-1 bg-destructive/20 text-destructive rounded text-xs font-orbitron font-bold">
                        {op.classification}
                      </span>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-primary mb-2">
                      Operation {op.codename}
                    </h3>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <span>Status: <span className="text-accent">{op.status}</span></span>
                      <span>Operatives: <span className="text-primary">{op.operatives}</span></span>
                    </div>
                  </div>
                  <QuantumButton variant="secondary">
                    Access Dead Drop
                  </QuantumButton>
                </div>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Tools */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Shadow Intelligence Tools
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HologramCard className="p-6 text-center" glowColor="neural">
              <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-orbitron font-bold text-primary mb-2">
                Neural Surveillance
              </h3>
              <p className="text-sm text-muted-foreground">
                Consciousness monitoring across realities
              </p>
            </HologramCard>
            
            <HologramCard className="p-6 text-center" glowColor="quantum">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-bold text-primary mb-2">
                Identity Forge
              </h3>
              <p className="text-sm text-muted-foreground">
                AI-generated quantum personalities
              </p>
            </HologramCard>
            
            <HologramCard className="p-6 text-center" glowColor="void">
              <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-orbitron font-bold text-primary mb-2">
                Quantum Drops
              </h3>
              <p className="text-sm text-muted-foreground">
                Encrypted dimensional messaging
              </p>
            </HologramCard>
            
            <HologramCard className="p-6 text-center" glowColor="neural">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-bold text-primary mb-2">
                Reality Manipulation
              </h3>
              <p className="text-sm text-muted-foreground">
                Environmental reality alteration
              </p>
            </HologramCard>
          </div>
        </div>
      </section>

      {/* Network Status */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <HologramCard className="p-8 text-center" glowColor="quantum">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6 animate-neural-glow" />
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-primary">
              Shadow Network Status
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Built on layers of reality-warping code. Attempted breaches trigger 
              self-erasing wormholes, ensuring eternal operational secrecy.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-primary font-orbitron font-bold">Phantom Gates</div>
                <div className="text-accent">∞ Active Portals</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-orbitron font-bold">Wormhole Shields</div>
                <div className="text-accent">Self-Erasing Active</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-orbitron font-bold">Reality Layers</div>
                <div className="text-accent">Maximum Distortion</div>
              </div>
            </div>
          </HologramCard>
        </div>
      </section>
    </div>
  );
};

export default Agencies;
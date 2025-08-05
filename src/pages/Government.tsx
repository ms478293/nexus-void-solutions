import { useState } from "react";
import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import HologramCard from "@/components/HologramCard";
import QuantumButton from "@/components/QuantumButton";
import { Crown, Globe, Shield, Users, FileText, TrendingUp, Zap, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const Government = () => {
  const [accessLevel, setAccessLevel] = useState<"none" | "diplomatic" | "classified" | "sovereign">("none");

  const handleDiplomaticEntry = () => {
    toast.loading("Verifying diplomatic quantum credentials...");
    
    setTimeout(() => {
      setAccessLevel("diplomatic");
      toast.success("Diplomatic immunity verified. Entering sovereign nexus.");
    }, 2500);
  };

  const handleClassifiedAccess = () => {
    toast.loading("Scanning governmental neural patterns...");
    
    setTimeout(() => {
      setAccessLevel("classified");
      toast.success("Maximum clearance granted. Welcome to the sovereign realm.");
    }, 3000);
  };

  const governmentServices = [
    {
      title: "Policy Influence Simulations",
      description: "Quantum modeling of legislative outcomes across dimensional timelines",
      icon: Globe,
      features: ["Reality branch prediction", "Temporal policy mapping", "Dimensional consensus building"]
    },
    {
      title: "Asset Transfer Protocols",
      description: "Cloaked channels for sovereign resource management beyond conventional oversight",
      icon: Shield,
      features: ["Quantum-encrypted transfers", "Interdimensional routing", "Zero-trace protocols"]
    },
    {
      title: "Crisis War Rooms",
      description: "Predictive geopolitical mapping with reality-altering contingency plans",
      icon: AlertTriangle,
      features: ["Global threat prediction", "Reality crisis simulation", "Quantum containment"]
    }
  ];

  const globalMissions = [
    {
      id: "GOV-ALPHA-001",
      title: "Dimensional Trade Agreement",
      status: "ACTIVE",
      classification: "TOP SECRET",
      regions: ["North America", "European Union", "Quantum Territories"]
    },
    {
      id: "GOV-BETA-045",
      title: "Reality Stability Protocol",
      status: "MONITORING", 
      classification: "COSMIC SECRET",
      regions: ["Global", "Multiverse", "Parallel Dimensions"]
    },
    {
      id: "GOV-GAMMA-789",
      title: "Neural Influence Campaign",
      status: "DEPLOYED",
      classification: "BEYOND SECRET",
      regions: ["Asia-Pacific", "Consciousness Networks", "Quantum Realms"]
    }
  ];

  if (accessLevel === "none") {
    return (
      <div className="min-h-screen bg-background relative">
        <MatrixRain />
        <Navigation />
        
        <section className="pt-24 relative min-h-screen flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4">
            <HologramCard className="p-8 text-center" glowColor="neural">
              <Crown className="w-16 h-16 text-primary mx-auto mb-6 animate-quantum-pulse" />
              
              <h1 className="text-3xl font-orbitron font-bold mb-4 text-primary">
                SOVEREIGN NEXUS
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Specialized gateway for interfacing with governmental entities. 
                Diplomatic immunity in cyberspace with quantum sovereignty protocols.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="text-left space-y-2">
                  <div className="text-sm text-primary font-cyber">◆ Governmental quantum shields active</div>
                  <div className="text-sm text-primary font-cyber">◆ Integration with global surveillance nets</div>
                  <div className="text-sm text-primary font-cyber">◆ Remains invisible to all monitoring</div>
                  <div className="text-sm text-accent font-cyber">◆ Diplomatic immunity guaranteed</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <QuantumButton onClick={handleDiplomaticEntry} className="w-full">
                  Diplomatic Portal Entry
                </QuantumButton>
                <QuantumButton 
                  onClick={handleClassifiedAccess} 
                  variant="secondary" 
                  className="w-full"
                >
                  Maximum Clearance Access
                </QuantumButton>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Protected by international quantum law and reality-warping treaties
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
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-gradient-quantum bg-clip-text text-transparent">
              SOVEREIGN NEXUS
            </h1>
            <p className="text-xl text-muted-foreground">
              {accessLevel === "diplomatic" 
                ? "Diplomatic access granted. Operating under quantum immunity protocols."
                : "Maximum governmental clearance verified. Welcome to the sovereign realm."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Security Status */}
      <section className="pb-8 relative">
        <div className="max-w-6xl mx-auto px-4">
          <HologramCard className="p-4" glowColor="quantum">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-orbitron font-bold text-primary">Sovereign Status</div>
                  <div className="text-sm text-muted-foreground">Protected by international quantum law</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-primary font-orbitron font-bold">DIPLOMATIC IMMUNITY</div>
                <div className="text-sm text-accent">All dimensional territories</div>
              </div>
            </div>
          </HologramCard>
        </div>
      </section>

      {/* Government Services */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Sovereign Capabilities
          </h2>
          
          <div className="space-y-8">
            {governmentServices.map((service, index) => (
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
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-foreground/80">{feature}</span>
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

      {/* Active Global Missions */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Global Mission Status
          </h2>
          
          <div className="space-y-6">
            {globalMissions.map((mission) => (
              <HologramCard key={mission.id} className="p-6" glowColor="void">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="font-cyber text-accent text-sm">{mission.id}</span>
                      <span className="px-2 py-1 bg-destructive/20 text-destructive rounded text-xs font-orbitron font-bold">
                        {mission.classification}
                      </span>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-primary mb-2">
                      {mission.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      Status: <span className="text-accent">{mission.status}</span>
                    </div>
                  </div>
                  <QuantumButton variant="secondary">
                    Access Quantum Brief
                  </QuantumButton>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {mission.regions.map((region, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Geopolitical Monitoring */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Quantum Geopolitical Map
          </h2>
          
          <HologramCard className="p-8" glowColor="quantum">
            <div className="text-center mb-8">
              <Globe className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">
                Real-Time Reality Monitoring
              </h3>
              <p className="text-muted-foreground">
                Live tracking of dimensional shifts, quantum political movements, 
                and reality-altering events across all governmental territories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-lg font-orbitron font-bold text-primary">847</div>
                <div className="text-sm text-muted-foreground">Active Quantum Policies</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-lg font-orbitron font-bold text-primary">23</div>
                <div className="text-sm text-muted-foreground">Connected Governments</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-lg font-orbitron font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Reality Stability</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-lg font-orbitron font-bold text-primary">0.001ms</div>
                <div className="text-sm text-muted-foreground">Quantum Response Time</div>
              </div>
            </div>
          </HologramCard>
        </div>
      </section>

      {/* Emergency Protocols */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <HologramCard className="p-8 text-center" glowColor="neural">
            <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-primary">
              Emergency Sovereignty Protocols
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              In case of reality breach or dimensional crisis, activate quantum containment 
              and engage multiverse diplomatic immunity shields.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <QuantumButton variant="danger">
                Reality Crisis Protocol
              </QuantumButton>
              <QuantumButton variant="secondary">
                Dimensional Evacuation
              </QuantumButton>
            </div>
            
            <p className="text-sm text-muted-foreground">
              All emergency actions are protected under international quantum law 
              and interdimensional diplomatic treaties.
            </p>
          </HologramCard>
        </div>
      </section>
    </div>
  );
};

export default Government;
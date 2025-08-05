import { useState } from "react";
import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import HologramCard from "@/components/HologramCard";
import QuantumButton from "@/components/QuantumButton";
import { Shield, Users, Zap, Brain, Globe, Target, MessageSquare, FileText } from "lucide-react";
import { toast } from "sonner";

const Team = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleShadowLogin = () => {
    toast.loading("Verifying shadow agent protocols...");
    
    setTimeout(() => {
      setAuthenticated(true);
      toast.success("Shadow access granted. Welcome, Agent.");
    }, 2000);
  };

  const missionBriefings = [
    {
      id: "ALPHA-7731",
      title: "Quantum Financial Stabilization",
      priority: "CRITICAL",
      agent: "Neural Oracle",
      status: "In Progress"
    },
    {
      id: "BETA-9942", 
      title: "Reality Manipulation - Celebrity Crisis",
      priority: "HIGH",
      agent: "Phantom Networker",
      status: "Deployed"
    },
    {
      id: "GAMMA-3358",
      title: "Dimensional Business Expansion",
      priority: "MEDIUM", 
      agent: "The Architect",
      status: "Planning"
    }
  ];

  const teamResources = [
    {
      title: "Mission Briefings",
      icon: FileText,
      description: "Virtual reality quantum chambers for operation planning",
      status: "7 active briefings"
    },
    {
      title: "Resource Allocation",
      icon: Target,
      description: "AI-orchestrated neural network distribution",
      status: "∞ quantum resources available"
    },
    {
      title: "Telepathic Communications",
      icon: MessageSquare,
      description: "Encrypted consciousness-to-consciousness channels",
      status: "12 agents online"
    },
    {
      title: "Global Surveillance",
      icon: Globe,
      description: "Omnidimensional monitoring and threat detection",
      status: "Reality scan complete"
    }
  ];

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background relative">
        <MatrixRain />
        <Navigation />
        
        <section className="pt-24 pb-16 relative min-h-screen flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4">
            <HologramCard className="p-8 text-center" glowColor="neural">
              <Shield className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />
              
              <h1 className="text-3xl font-orbitron font-bold mb-4 text-primary">
                SHADOW AGENT ACCESS
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Ultra-secured internal hub for Nexus operatives only. 
                Unauthorized access triggers quantum countermeasures.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="text-left space-y-2">
                  <div className="text-sm text-accent font-cyber">Security Level: MAXIMUM</div>
                  <div className="text-sm text-muted-foreground">Protocol: Shadow Agent Authentication</div>
                  <div className="text-sm text-muted-foreground">Encryption: Quantum-Neural Hybrid</div>
                </div>
              </div>
              
              <QuantumButton onClick={handleShadowLogin} className="w-full">
                Initialize Shadow Protocol
              </QuantumButton>
              
              <p className="text-xs text-muted-foreground mt-4">
                Hacks rebound as counter-invasions. Traces lead to infinite loops.
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
              SHADOW HQ
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome, Agent. Your neural signature has been verified across all realities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Briefings */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Active Mission Briefings
          </h2>
          
          <div className="space-y-6">
            {missionBriefings.map((mission) => (
              <HologramCard key={mission.id} className="p-6" glowColor="quantum">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="font-cyber text-accent text-sm">{mission.id}</span>
                      <span className={`px-2 py-1 rounded text-xs font-orbitron font-bold ${
                        mission.priority === "CRITICAL" ? "bg-destructive text-destructive-foreground" :
                        mission.priority === "HIGH" ? "bg-accent/20 text-accent" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {mission.priority}
                      </span>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-primary mb-2">
                      {mission.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Agent: {mission.agent}</span>
                      <span>Status: {mission.status}</span>
                    </div>
                  </div>
                  <QuantumButton variant="secondary">
                    Enter VR Chamber
                  </QuantumButton>
                </div>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Resources */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Quantum Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamResources.map((resource, index) => (
              <HologramCard key={index} className="p-6" glowColor="neural">
                <div className="flex items-start space-x-4">
                  <resource.icon className="w-8 h-8 text-accent mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-orbitron font-bold text-primary mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {resource.description}
                    </p>
                    <div className="text-sm text-accent font-cyber">
                      {resource.status}
                    </div>
                  </div>
                </div>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Tools */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <HologramCard className="p-8 text-center" glowColor="void">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-primary">
              Neural Collaboration Matrix
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with other shadow agents through telepathic chat simulations 
              and quantum-encrypted consciousness sharing protocols.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Brain className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-primary font-orbitron font-bold">Mind-Link Active</div>
                <div className="text-xs text-muted-foreground">12 agents connected</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-primary font-orbitron font-bold">Quantum Sync</div>
                <div className="text-xs text-muted-foreground">0.01ms latency</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-primary font-orbitron font-bold">Neural Encryption</div>
                <div className="text-xs text-muted-foreground">Unbreachable</div>
              </div>
            </div>
            
            <QuantumButton>
              Enter Telepathic Network
            </QuantumButton>
          </HologramCard>
        </div>
      </section>

      {/* Security Status */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <HologramCard className="p-6" glowColor="neural">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-orbitron font-bold text-primary mb-2">
                  Dimensional Security Status
                </h3>
                <p className="text-muted-foreground">
                  All quantum barriers active. No reality breaches detected.
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-orbitron font-bold text-primary">SECURE</div>
                <div className="text-sm text-accent">All dimensions protected</div>
              </div>
            </div>
          </HologramCard>
        </div>
      </section>
    </div>
  );
};

export default Team;
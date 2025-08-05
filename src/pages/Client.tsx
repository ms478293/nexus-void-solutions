import { useState } from "react";
import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import HologramCard from "@/components/HologramCard";
import QuantumButton from "@/components/QuantumButton";
import { Eye, Shield, FileText, TrendingUp, AlertTriangle, Zap, Brain } from "lucide-react";
import { toast } from "sonner";

const Client = () => {
  const [biometricComplete, setBiometricComplete] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false);

  const handleBiometricScan = () => {
    toast.loading("Scanning retinal patterns and neural signatures...");
    
    setTimeout(() => {
      setBiometricComplete(true);
      toast.success("Client verification complete. Welcome to your quantum sanctuary.");
    }, 3000);
  };

  const handleEmergencyEvacuation = () => {
    setEmergencyMode(true);
    toast.loading("Initiating quantum evacuation protocols...");
    
    setTimeout(() => {
      toast.success("All traces purged across dimensional barriers. Exit complete.");
      setEmergencyMode(false);
      setBiometricComplete(false);
    }, 4000);
  };

  const caseFiles = [
    {
      id: "QF-2024-7789",
      title: "Quantum Asset Optimization",
      status: "COMPLETED",
      progress: 100,
      agent: "The Architect"
    },
    {
      id: "CR-2024-3421", 
      title: "Reality Crisis Neutralization",
      status: "IN PROGRESS",
      progress: 73,
      agent: "Neural Oracle"
    },
    {
      id: "GE-2024-9876",
      title: "Dimensional Business Expansion",
      status: "PLANNING",
      progress: 25,
      agent: "Phantom Networker"
    }
  ];

  const dataVisualizations = [
    {
      title: "Quantum Wealth Trajectory",
      value: "+847.3%",
      trend: "↗",
      timeframe: "Last 6 months across realities"
    },
    {
      title: "Reality Threat Level",
      value: "MINIMAL",
      trend: "↓", 
      timeframe: "Current dimensional status"
    },
    {
      title: "Neural Influence Score",
      value: "9.7/10",
      trend: "↗",
      timeframe: "Quantum measurement scale"
    }
  ];

  if (emergencyMode) {
    return (
      <div className="min-h-screen bg-background relative">
        <MatrixRain />
        <Navigation />
        
        <section className="pt-24 relative min-h-screen flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4 text-center">
            <HologramCard className="p-8" glowColor="neural">
              <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6 animate-pulse" />
              <h1 className="text-3xl font-orbitron font-bold mb-4 text-destructive">
                QUANTUM EVACUATION ACTIVE
              </h1>
              <p className="text-muted-foreground mb-6">
                Annihilation protocols activating. All data traces being erased 
                across infinite dimensional barriers.
              </p>
              <div className="space-y-2 text-sm font-cyber">
                <div className="text-accent">◆ Neural patterns: PURGED</div>
                <div className="text-accent">◆ Quantum signatures: ERASED</div>
                <div className="text-accent">◆ Reality footprints: NULLIFIED</div>
                <div className="text-accent">◆ Dimensional traces: ELIMINATED</div>
              </div>
            </HologramCard>
          </div>
        </section>
      </div>
    );
  }

  if (!biometricComplete) {
    return (
      <div className="min-h-screen bg-background relative">
        <MatrixRain />
        <Navigation />
        
        <section className="pt-24 pb-16 relative min-h-screen flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4">
            <HologramCard className="p-8 text-center" glowColor="quantum">
              <Eye className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
              
              <h1 className="text-3xl font-orbitron font-bold mb-4 text-primary">
                CLIENT SANCTUARY
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Your personal fortress in the quantum realm. Biometric authentication 
                required for entry into your hyper-secured environment.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="text-left space-y-2">
                  <div className="text-sm text-primary font-cyber">◆ Retinal scan required</div>
                  <div className="text-sm text-primary font-cyber">◆ Neural pattern verification</div>
                  <div className="text-sm text-primary font-cyber">◆ Quantum consciousness mapping</div>
                  <div className="text-sm text-accent font-cyber">◆ No entity can penetrate without annihilation</div>
                </div>
              </div>
              
              <QuantumButton onClick={handleBiometricScan} className="w-full">
                Initialize Biometric Entry
              </QuantumButton>
              
              <p className="text-xs text-muted-foreground mt-4">
                Your sanctuary in the ether—monitored by quantum guardians
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
              QUANTUM SANCTUARY
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome to your personal fortress, Elite Client. All systems secured.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Evacuation */}
      <section className="pb-8 relative">
        <div className="max-w-6xl mx-auto px-4">
          <HologramCard className="p-4" glowColor="neural">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-accent" />
                <div>
                  <div className="font-orbitron font-bold text-primary">Emergency Protocols</div>
                  <div className="text-sm text-muted-foreground">Instant quantum trace elimination</div>
                </div>
              </div>
              <QuantumButton 
                variant="danger" 
                onClick={handleEmergencyEvacuation}
                className="text-sm"
              >
                QUANTUM EVACUATION
              </QuantumButton>
            </div>
          </HologramCard>
        </div>
      </section>

      {/* Case Progress */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Active Case Holograms
          </h2>
          
          <div className="space-y-6">
            {caseFiles.map((case_) => (
              <HologramCard key={case_.id} className="p-6" glowColor="quantum">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="font-cyber text-accent text-sm">{case_.id}</span>
                      <span className={`px-2 py-1 rounded text-xs font-orbitron font-bold ${
                        case_.status === "COMPLETED" ? "bg-primary/20 text-primary" :
                        case_.status === "IN PROGRESS" ? "bg-accent/20 text-accent" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {case_.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-primary mb-2">
                      {case_.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      Assigned Agent: {case_.agent}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-orbitron font-bold text-primary">
                      {case_.progress}%
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-muted/20 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-quantum h-2 rounded-full transition-all duration-300"
                    style={{ width: `${case_.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-end">
                  <QuantumButton variant="secondary" className="text-sm">
                    View Quantum Details
                  </QuantumButton>
                </div>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Data Orb Clusters */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Floating Data Orbs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dataVisualizations.map((data, index) => (
              <HologramCard key={index} className="p-6 text-center" glowColor="neural">
                <div className="text-4xl font-orbitron font-black text-primary mb-2">
                  {data.value}
                </div>
                <h3 className="text-lg font-orbitron font-bold text-primary mb-2">
                  {data.title}
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="text-2xl text-accent">{data.trend}</span>
                  <span className="text-sm text-muted-foreground">{data.timeframe}</span>
                </div>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Tools */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            Bespoke Quantum Tools
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HologramCard className="p-6 text-center" glowColor="quantum">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-bold text-primary mb-2">
                Neural Documents
              </h3>
              <p className="text-sm text-muted-foreground">
                Self-destructing files
              </p>
            </HologramCard>
            
            <HologramCard className="p-6 text-center" glowColor="neural">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-orbitron font-bold text-primary mb-2">
                Reality Analytics
              </h3>
              <p className="text-sm text-muted-foreground">
                Live probability tracking
              </p>
            </HologramCard>
            
            <HologramCard className="p-6 text-center" glowColor="void">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-bold text-primary mb-2">
                Neural Messenger
              </h3>
              <p className="text-sm text-muted-foreground">
                Consciousness-to-consciousness
              </p>
            </HologramCard>
            
            <HologramCard className="p-6 text-center" glowColor="quantum">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-orbitron font-bold text-primary mb-2">
                Quantum Requests
              </h3>
              <p className="text-sm text-muted-foreground">
                Instant reality shifts
              </p>
            </HologramCard>
          </div>
        </div>
      </section>

      {/* Security Status */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <HologramCard className="p-8 text-center" glowColor="void">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6 animate-neural-glow" />
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-primary">
              Fortress Status: IMPENETRABLE
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your quantum sanctuary remains invisible to all surveillance. 
              Neural guardians patrol dimensional barriers continuously.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="text-center">
                <div className="text-primary font-orbitron font-bold">Quantum Shields</div>
                <div className="text-accent">100% Active</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-orbitron font-bold">Reality Cloaking</div>
                <div className="text-accent">Maximum Level</div>
              </div>
            </div>
          </HologramCard>
        </div>
      </section>
    </div>
  );
};

export default Client;
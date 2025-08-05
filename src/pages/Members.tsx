import { useState } from "react";
import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import HologramCard from "@/components/HologramCard";
import QuantumButton from "@/components/QuantumButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Lock, Eye, Brain, Shield, AlertTriangle, Fingerprint } from "lucide-react";

const Members = () => {
  const [authStep, setAuthStep] = useState<"login" | "retinal" | "neural" | "access">("login");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [scanProgress, setScanProgress] = useState(0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!credentials.username || !credentials.password) {
      toast.error("Neural credentials required for quantum access");
      return;
    }

    toast.loading("Verifying quantum signature...");
    
    setTimeout(() => {
      toast.success("Initial verification complete. Proceeding to biometric scan.");
      setAuthStep("retinal");
    }, 2000);
  };

  const simulateRetinalScan = () => {
    setAuthStep("retinal");
    setScanProgress(0);
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          toast.success("Retinal pattern verified. Initiating neural authentication.");
          setTimeout(() => setAuthStep("neural"), 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const simulateNeuralAuth = () => {
    setScanProgress(0);
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          const success = Math.random() > 0.2; // 80% success rate for demo
          
          if (success) {
            toast.success("Neural authentication complete. Welcome to the Nexus.");
            setTimeout(() => setAuthStep("access"), 1000);
          } else {
            toast.error("Neural pattern mismatch. Access denied.");
            setTimeout(() => setAuthStep("login"), 2000);
          }
          return 100;
        }
        return prev + 8;
      });
    }, 150);
  };

  const portalFeatures = [
    {
      title: "Active Missions",
      description: "Real-time holographic case tracking",
      status: "3 quantum operations in progress"
    },
    {
      title: "Neural Updates",
      description: "Direct consciousness briefings",
      status: "2 dimensional alerts pending"
    },
    {
      title: "Strategy Simulations",
      description: "Personalized reality modeling",
      status: "12 probability matrices available"
    },
    {
      title: "Secure Vault",
      description: "Quantum-encrypted asset storage",
      status: "∞ TB secured across realities"
    }
  ];

  if (authStep === "access") {
    return (
      <div className="min-h-screen bg-background relative">
        <MatrixRain />
        <Navigation />
        
        <section className="pt-24 pb-16 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-gradient-quantum bg-clip-text text-transparent">
                NEXUS MEMBER PORTAL
              </h1>
              <p className="text-xl text-muted-foreground">
                Welcome to your quantum sanctuary, Elite Member
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {portalFeatures.map((feature, index) => (
                <HologramCard key={index} className="p-6" glowColor="quantum">
                  <h3 className="text-xl font-orbitron font-bold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-accent font-cyber">
                    {feature.status}
                  </div>
                </HologramCard>
              ))}
            </div>

            <div className="text-center">
              <HologramCard className="p-8" glowColor="neural">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-orbitron font-bold mb-4 text-primary">
                  Portal Fully Activated
                </h2>
                <p className="text-muted-foreground mb-6">
                  Your neural pattern has been verified across all dimensional barriers. 
                  All quantum capabilities are now at your disposal.
                </p>
                <QuantumButton onClick={() => setAuthStep("login")}>
                  Exit Quantum Sanctuary
                </QuantumButton>
              </HologramCard>
            </div>
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-gradient-quantum bg-clip-text text-transparent">
            MEMBERS PORTAL
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Neural Authentication Required - Elite Access Only
          </p>
        </div>
      </section>

      {/* Authentication Interface */}
      <section className="py-16 relative">
        <div className="max-w-lg mx-auto px-4">
          <HologramCard className="p-8" glowColor="neural">
            {authStep === "login" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Lock className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-orbitron font-bold text-primary">
                    Quantum Access Terminal
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Enter your neural credentials to begin authentication sequence
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <Label htmlFor="username" className="text-primary font-orbitron">
                      Neural Username
                    </Label>
                    <Input
                      id="username"
                      value={credentials.username}
                      onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                      placeholder="Enter quantum identifier..."
                      className="bg-muted/50 border-primary/30"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-primary font-orbitron">
                      Quantum Passphrase
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                      placeholder="Enter dimensional key..."
                      className="bg-muted/50 border-primary/30"
                    />
                  </div>

                  <QuantumButton type="submit" className="w-full">
                    Initialize Authentication
                  </QuantumButton>
                </form>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Unauthorized access attempts trigger quantum countermeasures
                  </p>
                </div>
              </div>
            )}

            {authStep === "retinal" && (
              <div className="text-center space-y-6">
                <Eye className="w-16 h-16 text-accent mx-auto animate-pulse" />
                <h2 className="text-2xl font-orbitron font-bold text-primary">
                  Retinal Verification
                </h2>
                <p className="text-muted-foreground">
                  Please look directly into the quantum scanner
                </p>
                
                <div className="relative">
                  <div className="w-32 h-32 mx-auto border-2 border-accent rounded-full relative">
                    <div 
                      className="absolute inset-0 border-2 border-primary rounded-full transition-all duration-200"
                      style={{ 
                        clipPath: `inset(0 ${100 - scanProgress}% 0 0)`,
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-accent mt-4">
                    Scanning: {scanProgress}%
                  </div>
                </div>

                {scanProgress === 0 && (
                  <QuantumButton onClick={simulateRetinalScan}>
                    Begin Retinal Scan
                  </QuantumButton>
                )}
              </div>
            )}

            {authStep === "neural" && (
              <div className="text-center space-y-6">
                <Brain className="w-16 h-16 text-primary mx-auto animate-quantum-pulse" />
                <h2 className="text-2xl font-orbitron font-bold text-primary">
                  Neural Pattern Analysis
                </h2>
                <p className="text-muted-foreground">
                  Analyzing consciousness signature across dimensional frequencies
                </p>

                <div className="space-y-4">
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-quantum h-2 rounded-full transition-all duration-300"
                      style={{ width: `${scanProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-primary">
                    Neural mapping: {scanProgress}%
                  </div>
                </div>

                {scanProgress === 0 && (
                  <QuantumButton onClick={simulateNeuralAuth}>
                    Authorize Neural Scan
                  </QuantumButton>
                )}

                <div className="text-xs text-muted-foreground">
                  Advanced AI analyzing quantum brainwave patterns
                </div>
              </div>
            )}
          </HologramCard>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <HologramCard className="p-4" glowColor="void">
              <div className="flex items-center justify-center space-x-2 text-accent">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-cyber">
                  This portal is protected by reality-warping security protocols
                </span>
              </div>
            </HologramCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
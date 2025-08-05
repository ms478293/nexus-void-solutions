import { useState } from "react";
import Navigation from "@/components/Navigation";
import MatrixRain from "@/components/MatrixRain";
import HologramCard from "@/components/HologramCard";
import QuantumButton from "@/components/QuantumButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Shield, Eye, Brain, Lock, Zap, AlertTriangle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "",
    issueType: "",
    urgency: "",
    description: "",
    verificationCode: ""
  });

  const [biometricStatus, setBiometricStatus] = useState<"idle" | "scanning" | "verified" | "failed">("idle");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const simulateBiometricScan = () => {
    setBiometricStatus("scanning");
    
    setTimeout(() => {
      // Simulate random success/failure for demo
      const success = Math.random() > 0.3;
      setBiometricStatus(success ? "verified" : "failed");
      
      if (success) {
        toast.success("Neural pattern verified. Quantum encryption activated.");
      } else {
        toast.error("Neural verification failed. Please retry quantum alignment.");
      }
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (biometricStatus !== "verified") {
      toast.error("Neural verification required before transmission");
      return;
    }

    // Simulate form submission
    toast.loading("Uploading essence to quantum void...", { duration: 2000 });
    
    setTimeout(() => {
      toast.success("Neural transmission complete. Expect contact through dimensional channels within 24 Earth hours.");
      
      // Reset form
      setFormData({
        name: "",
        contactMethod: "",
        issueType: "",
        urgency: "",
        description: "",
        verificationCode: ""
      });
      setBiometricStatus("idle");
    }, 2000);
  };

  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Quantum Encryption",
      description: "Messages encrypted across dimensional barriers"
    },
    {
      icon: Eye,
      title: "Automatic NDA Neural Imprints",
      description: "Confidentiality encoded directly into consciousness"
    },
    {
      icon: Brain,
      title: "Psychic Pattern Matching",
      description: "Identity verified through neural signature analysis"
    },
    {
      icon: Lock,
      title: "Self-Destructing Data Streams",
      description: "Information vanishes after processing completion"
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
            NEURAL CONTACT
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Initialize quantum-encrypted communication with the Collective. 
            Your essence will be uploaded to the void for instant processing.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-primary">
              Quantum Security Protocols
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {securityFeatures.map((feature, index) => (
              <HologramCard key={index} className="p-4 text-center" glowColor="neural">
                <feature.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-orbitron font-bold mb-2 text-primary text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </HologramCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <HologramCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Neural Identity */}
              <div className="space-y-4">
                <h3 className="text-2xl font-orbitron font-bold text-primary">
                  Neural Identity Verification
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-primary font-orbitron">
                      Quantum Identifier *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your dimensional signature..."
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact" className="text-primary font-orbitron">
                      Preferred Neural Channel
                    </Label>
                    <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange("contactMethod", value)}>
                      <SelectTrigger className="bg-muted/50 border-primary/30">
                        <SelectValue placeholder="Select transmission method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quantum-email">Quantum Email</SelectItem>
                        <SelectItem value="neural-link">Direct Neural Link</SelectItem>
                        <SelectItem value="dimensional-call">Dimensional Voice Call</SelectItem>
                        <SelectItem value="hologram-meet">Holographic Meeting</SelectItem>
                        <SelectItem value="void-message">Void Messaging</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Issue Classification */}
              <div className="space-y-4">
                <h3 className="text-2xl font-orbitron font-bold text-primary">
                  Mission Parameters
                </h3>
                
                <div>
                  <Label className="text-primary font-orbitron mb-4 block">
                    Issue Classification *
                  </Label>
                  <RadioGroup
                    value={formData.issueType}
                    onValueChange={(value) => handleInputChange("issueType", value)}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="financial" id="financial" />
                      <Label htmlFor="financial">Financial Quantum Management</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="crisis" id="crisis" />
                      <Label htmlFor="crisis">Crisis Neural Intervention</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="growth" id="growth" />
                      <Label htmlFor="growth">Ascension Engine Activation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="elevation" id="elevation" />
                      <Label htmlFor="elevation">Elite Reality Manipulation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Custom Impossibility</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="urgency" className="text-primary font-orbitron">
                    Temporal Priority Level
                  </Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                    <SelectTrigger className="bg-muted/50 border-primary/30">
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Standard Processing (7-14 dimensional days)</SelectItem>
                      <SelectItem value="medium">Expedited (3-7 dimensional days)</SelectItem>
                      <SelectItem value="high">Critical Priority (24-72 quantum hours)</SelectItem>
                      <SelectItem value="emergency">Reality-Threatening Emergency (Instant)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <Label htmlFor="description" className="text-primary font-orbitron">
                  Detailed Mission Brief *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe your impossible request in detail. Include any dimensional constraints, reality parameters, or temporal limitations..."
                  className="bg-muted/50 border-primary/30 focus:border-primary min-h-32"
                  required
                />
              </div>

              {/* Biometric Verification */}
              <div className="space-y-4">
                <h3 className="text-2xl font-orbitron font-bold text-primary">
                  Neural Pattern Authentication
                </h3>
                
                <div className="flex items-center justify-between p-6 bg-muted/20 rounded-lg border border-primary/30">
                  <div className="flex items-center space-x-4">
                    {biometricStatus === "idle" && <Brain className="w-8 h-8 text-muted-foreground" />}
                    {biometricStatus === "scanning" && <Zap className="w-8 h-8 text-accent animate-pulse" />}
                    {biometricStatus === "verified" && <Shield className="w-8 h-8 text-primary" />}
                    {biometricStatus === "failed" && <AlertTriangle className="w-8 h-8 text-destructive" />}
                    
                    <div>
                      <div className="font-orbitron font-bold text-primary">
                        Biometric Scan Status
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {biometricStatus === "idle" && "Awaiting neural pattern scan"}
                        {biometricStatus === "scanning" && "Analyzing quantum consciousness..."}
                        {biometricStatus === "verified" && "Neural pattern verified ✓"}
                        {biometricStatus === "failed" && "Pattern mismatch - retry required"}
                      </div>
                    </div>
                  </div>
                  
                  <QuantumButton
                    type="button"
                    onClick={simulateBiometricScan}
                    disabled={biometricStatus === "scanning" || biometricStatus === "verified"}
                    variant={biometricStatus === "verified" ? "primary" : "secondary"}
                  >
                    {biometricStatus === "scanning" ? "Scanning..." : "Scan Neural Pattern"}
                  </QuantumButton>
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <QuantumButton
                  type="submit"
                  className="text-lg px-12 py-4"
                  disabled={biometricStatus !== "verified"}
                >
                  Upload Essence to Quantum Void
                </QuantumButton>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Transmission will be quantum-encrypted and self-destruct after processing. 
                  Expect dimensional contact within 24 Earth hours.
                </p>
              </div>
            </form>
          </HologramCard>
        </div>
      </section>
    </div>
  );
};

export default Contact;
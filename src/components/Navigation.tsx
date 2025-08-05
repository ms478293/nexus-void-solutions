import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const portalItems = [
    { name: "Members Portal", path: "/members", icon: Shield },
    { name: "Team Portal", path: "/team", icon: Zap },
    { name: "Client Portal", path: "/client", icon: Shield },
    { name: "Government Portal", path: "/government", icon: Shield },
    { name: "Agencies Portal", path: "/agencies", icon: Shield },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-quantum rounded-lg animate-neural-glow"></div>
            <span className="font-orbitron font-bold text-xl text-primary">
              NEXUS SHADOW
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="relative group">
              <Button
                variant="outline"
                className="bg-secondary/50 border-primary/30 text-primary hover:bg-primary/20"
              >
                <Shield className="w-4 h-4 mr-2" />
                Secured Portals
              </Button>
              
              <div className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-void opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-2">
                  {portalItems.map((portal) => (
                    <Link
                      key={portal.path}
                      to={portal.path}
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                    >
                      <portal.icon className="w-4 h-4 mr-2 text-primary" />
                      {portal.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-border mt-4 pt-4">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  Secured Portals
                </div>
                {portalItems.map((portal) => (
                  <Link
                    key={portal.path}
                    to={portal.path}
                    className="flex items-center px-3 py-2 text-sm hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <portal.icon className="w-4 h-4 mr-2 text-primary" />
                    {portal.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
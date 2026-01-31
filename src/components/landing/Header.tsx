import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">DeepTrust</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#industries" className="text-muted-foreground hover:text-foreground transition-colors">Industries</a>
          <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors">Results</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
          <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

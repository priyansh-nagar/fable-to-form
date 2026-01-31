import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-circuit.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-light border border-primary/20">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Advanced AI Detection Technology</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Detect Deepfakes<br />with Precision
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Protect your content and brand integrity with cutting-edge AI technology that identifies manipulated media in real-time. Stay ahead of misinformation.
            </p>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-12 pt-4">
              <div>
                <p className="text-4xl font-bold text-foreground">99.7%</p>
                <p className="text-muted-foreground">Accuracy Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground">500+</p>
                <p className="text-muted-foreground">Images Analyzed</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image with badges */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="AI Detection Technology" 
                className="w-full h-auto object-cover"
              />
              
              {/* Authentic Badge */}
              <div className="absolute top-8 left-8 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green"></div>
                  <div>
                    <p className="font-semibold text-foreground">Authentic</p>
                    <p className="text-sm text-muted-foreground">No manipulation detected</p>
                  </div>
                </div>
              </div>
              
              {/* Deepfake Badge */}
              <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div>
                    <p className="font-semibold text-foreground">Deepfake</p>
                    <p className="text-sm text-muted-foreground">97% confidence level</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

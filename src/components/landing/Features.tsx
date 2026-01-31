import { Bot, Zap, Lock, Clock, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Detection",
    description: "Advanced neural networks trained on millions of samples to identify even the most sophisticated deepfakes.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    description: "Process videos and images in seconds with our optimized detection algorithms for instant results.",
    color: "bg-green text-white",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your content is processed with end-to-end encryption and automatically deleted after analysis.",
    color: "bg-teal text-white",
  },
  {
    icon: Clock,
    title: "Batch Processing",
    description: "Upload and analyze multiple files simultaneously for efficient large-scale verification.",
    color: "bg-orange text-white",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Comprehensive analysis with confidence scores, manipulation indicators, and exportable data.",
    color: "bg-pink text-white",
  },
  {
    icon: Globe,
    title: "API Integration",
    description: "Seamlessly integrate deepfake detection into your existing workflows with our RESTful API.",
    color: "bg-green text-white",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Complete Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to detect, analyze, and verify the authenticity of digital media content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

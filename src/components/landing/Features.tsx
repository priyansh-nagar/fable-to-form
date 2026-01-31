import { Bot, Zap, Lock, Clock, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Complete Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to detect, analyze, and verify the authenticity of digital media content.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

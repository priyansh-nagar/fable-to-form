import { Button } from "@/components/ui/button";
import { Upload, ScanSearch, FileCheck, Download } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Media",
    description: "Upload your video or image files securely through our platform or API.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "AI Analysis",
    description: "Our advanced AI models analyze facial features, artifacts, and inconsistencies.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Get Results",
    description: "Receive detailed reports with confidence scores and manipulation indicators.",
  },
  {
    number: "04",
    icon: Download,
    title: "Export & Share",
    description: "Download reports, export data, and share results with your team.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Simple, fast, and accurate deepfake detection in just four easy steps.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative"
            >
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-full bg-purple-light flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <a href="https://deeptrust-sandy.vercel.app/"  rel="noopener noreferrer">
              Try It Now - It's Free
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

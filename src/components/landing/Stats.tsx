import { Shield, Users, Clock, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Shield,
    value: "99.7%",
    label: "Detection Accuracy",
    description: "Industry-leading precision in identifying deepfakes",
  },
  {
    icon: Users,
    value: "250+",
    label: "Active Users",
    description: "Organizations trusting our platform",
  },
  {
    icon: Clock,
    value: "5K+",
    label: "Files Analyzed",
    description: "Images scanned to date",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-20 px-4 gradient-stats">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Proven Results at Scale
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Numbers that speak to our commitment to excellence and innovation.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <p className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-lg font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-white/70 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

import { FileText, Building2, Video } from "lucide-react";
import { motion } from "framer-motion";
import mediaImage from "@/assets/industry-media.jpg";
import securityImage from "@/assets/industry-security.jpg";
import socialImage from "@/assets/industry-social.jpg";

const industries = [
  {
    icon: FileText,
    title: "Media & Journalism",
    description: "Verify the authenticity of user-generated content and protect your reputation from fake news.",
    image: mediaImage,
  },
  {
    icon: Building2,
    title: "Enterprise Security",
    description: "Protect your organization from fraudulent content, phishing attempts, and identity theft.",
    image: securityImage,
  },
  {
    icon: Video,
    title: "Social Media Platforms",
    description: "Automatically detect and flag manipulated content to maintain platform integrity.",
    image: socialImage,
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizations worldwide rely on our technology to protect against deepfakes and maintain content authenticity.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-2xl overflow-hidden h-80 group"
            >
              <img 
                src={industry.image} 
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-white/80 text-sm">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

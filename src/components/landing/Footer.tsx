import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 bg-foreground text-background"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">DeepTrust</span>
            </div>
            <p className="text-background/70">
              Advanced AI technology to detect and prevent deepfake manipulation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="https://deep-trust.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="https://deep-trust.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">API</a></li>
              <li><a href="https://deep-trust.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© {new Date().getFullYear()} DeepTrust. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

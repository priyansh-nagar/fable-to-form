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
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="DeepTrust" className="h-8 w-8" />
            <span className="text-xl font-bold">DeepTrust</span>
          </div>
          <p className="text-background/70 text-center max-w-md">
            Advanced AI technology to detect and prevent deepfake manipulation.
          </p>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© {new Date().getFullYear()} DeepTrust. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

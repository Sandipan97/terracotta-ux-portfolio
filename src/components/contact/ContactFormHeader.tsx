
import { motion } from 'framer-motion';

const ContactFormHeader = () => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
        Let's Work Together
      </h2>
      <p className="text-white/90 max-w-2xl mx-auto">
        Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
      </p>
    </motion.div>
  );
};

export default ContactFormHeader;

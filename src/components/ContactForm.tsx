
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-bengali-terracotta to-bengali-red text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5 filter blur-xl"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2 text-white/80">
                  Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-bengali-mustard focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                  animate={{
                    borderColor: focusedField === 'name' ? '#F9D342' : 'rgba(255, 255, 255, 0.3)',
                    backgroundColor: focusedField === 'name' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2 text-white/80">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-bengali-mustard focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                  animate={{
                    borderColor: focusedField === 'email' ? '#F9D342' : 'rgba(255, 255, 255, 0.3)',
                    backgroundColor: focusedField === 'email' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                  required
                />
              </motion.div>
            </div>

            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-sm font-medium mb-2 text-white/80">
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-bengali-mustard focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
                animate={{
                  borderColor: focusedField === 'message' ? '#F9D342' : 'rgba(255, 255, 255, 0.3)',
                  backgroundColor: focusedField === 'message' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'
                }}
                transition={{ duration: 0.3 }}
                required
              />
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-bengali-mustard text-bengali-dark hover:bg-bengali-mustard/90 px-8 py-3 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-bengali-dark border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send size={18} className="ml-2" />
                    </motion.div>
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import ContactFormHeader from './contact/ContactFormHeader';
import ContactFormFields from './contact/ContactFormFields';

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
    <section className="py-20 bg-gradient-to-br from-red-pantone to-red-pantone-dark text-white relative overflow-hidden">
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
          <ContactFormHeader />

          <motion.form
            onSubmit={handleSubmit}
            className="bg-card/20 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactFormFields 
              formData={formData}
              focusedField={focusedField}
              onInputChange={handleInputChange}
              onFocusChange={setFocusedField}
            />

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-honeydew text-berkeley-blue hover:bg-honeydew/90 px-8 py-3 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-berkeley-blue border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <span data-lovable-editable="contact-form-submit-button">Send Message</span>
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

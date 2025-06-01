
import { motion } from 'framer-motion';

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  focusedField: string | null;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocusChange: (field: string | null) => void;
}

const ContactFormFields = ({ formData, focusedField, onInputChange, onFocusChange }: ContactFormFieldsProps) => {
  return (
    <>
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
            onChange={onInputChange}
            onFocus={() => onFocusChange('name')}
            onBlur={() => onFocusChange(null)}
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
            onChange={onInputChange}
            onFocus={() => onFocusChange('email')}
            onBlur={() => onFocusChange(null)}
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
          onChange={onInputChange}
          onFocus={() => onFocusChange('message')}
          onBlur={() => onFocusChange(null)}
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
    </>
  );
};

export default ContactFormFields;

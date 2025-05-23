
import { motion } from 'framer-motion';
import { EditableImage } from '@/components/ui/editable-image';

type ProcessStep = {
  title: string;
  description: string;
  image?: string;
};

interface DesignProcessProps {
  process: ProcessStep[];
}

const DesignProcess = ({ process }: DesignProcessProps) => {
  return (
    <section className="py-12 xs:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-bengali-dark mb-6 xs:mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Design Process
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          {process.map((step, index) => (
            <motion.div 
              key={index} 
              className="mb-12 xs:mb-16 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-6 xs:gap-8 items-center">
                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="bg-white p-4 xs:p-6 rounded-lg shadow-md border border-white/60 backdrop-blur-sm">
                    <div className="text-bengali-terracotta font-medium text-sm xs:text-base mb-1 xs:mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="font-heading text-lg xs:text-2xl font-semibold text-bengali-dark mb-2 xs:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-bengali-dark/80 text-sm xs:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
                <motion.div 
                  className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <EditableImage 
                      src={step.image || '/placeholder.svg'} 
                      alt={step.title}
                      className="w-full h-auto"
                      fallbackSrc="/placeholder.svg"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;


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
    <section className="py-12 xs:py-16 bg-muted/30 dark:bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground mb-6 xs:mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-lovable-editable="project-design-process-title"
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
                  <div className="bg-card p-4 xs:p-6 rounded-lg shadow-md border border-border backdrop-blur-sm">
                    <div 
                      className="text-bengali-terracotta dark:text-bengali-terracotta-light font-medium text-sm xs:text-base mb-1 xs:mb-2"
                      data-lovable-editable={`project-design-process-step-${index}-number`}
                    >
                      Step {index + 1}
                    </div>
                    <h3 
                      className="font-heading text-lg xs:text-2xl font-semibold text-foreground mb-2 xs:mb-4"
                      data-lovable-editable={`project-design-process-step-${index}-title`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-muted-foreground text-sm xs:text-base"
                      data-lovable-editable={`project-design-process-step-${index}-description`}
                    >
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

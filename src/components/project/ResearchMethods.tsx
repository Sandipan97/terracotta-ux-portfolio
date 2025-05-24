
import { motion } from 'framer-motion';
import { EditableImage } from '@/components/ui/editable-image';

type ResearchMethod = {
  title: string;
  description: string;
  image?: string;
};

interface ResearchMethodsProps {
  researchMethods: ResearchMethod[];
}

const ResearchMethods = ({ researchMethods }: ResearchMethodsProps) => {
  return (
    <section className="py-12 xs:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground mb-6 xs:mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Research Methods
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
            {researchMethods.map((method, index) => (
              <motion.div 
                key={index} 
                className="bg-card p-4 xs:p-6 rounded-lg shadow-md border-l-4 border-bengali-terracotta dark:border-bengali-terracotta-light backdrop-blur-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-2 xs:mb-4">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm xs:text-base mb-4">
                  {method.description}
                </p>
                {method.image && (
                  <motion.div 
                    className="rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <EditableImage 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-auto"
                      fallbackSrc="/placeholder.svg"
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchMethods;

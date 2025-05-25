
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
    <section className="py-12 xs:py-16 bg-muted/20 relative overflow-hidden dark-glow-subtle">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-40 left-10 w-72 h-72 rounded-full bg-bengali-terracotta/5 filter blur-3xl" 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }} 
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-bengali-mustard/5 filter blur-2xl" 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }} 
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
                className="group bg-background/60 backdrop-blur-sm p-4 xs:p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 dark-glow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-bengali-terracotta to-bengali-mustard rounded-full mr-4 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-2 group-hover:text-bengali-terracotta transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm xs:text-base leading-relaxed mb-4">
                      {method.description}
                    </p>
                  </div>
                </div>
                
                {method.image && (
                  <motion.div 
                    className="rounded-xl overflow-hidden border border-border/30 dark-glow-image"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <EditableImage 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
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

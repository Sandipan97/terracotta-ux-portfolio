
import { motion } from 'framer-motion';
import { EditableImage } from '@/components/ui/editable-image';

type UserFlow = {
  title: string;
  description: string;
  image?: string;
};

interface UserFlowsProps {
  userFlows: UserFlow[];
}

const UserFlows = ({ userFlows }: UserFlowsProps) => {
  return (
    <div className="relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-bengali-terracotta/5 filter blur-3xl" 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }} 
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
      </div>

      <motion.h2 
        className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground mb-6 xs:mb-10 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        User Flows & Journeys
      </motion.h2>
      
      <div className="relative z-10">
        {userFlows.map((flow, index) => (
          <motion.div 
            key={index} 
            className="mb-8 xs:mb-10 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-6 xs:gap-8 items-center">
              <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="bg-background/60 backdrop-blur-sm p-4 xs:p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 dark-glow-card">
                  <div className="flex items-start mb-4">
                    <div className="w-1 h-16 bg-gradient-to-b from-bengali-terracotta to-bengali-mustard rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-heading text-lg xs:text-2xl font-semibold text-foreground mb-2 xs:mb-4">
                        {flow.title}
                      </h3>
                      <p className="text-muted-foreground text-sm xs:text-base leading-relaxed">
                        {flow.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border/30 bg-background/30 backdrop-blur-sm dark-glow-image">
                  <EditableImage 
                    src={flow.image || '/placeholder.svg'} 
                    alt={flow.title}
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserFlows;

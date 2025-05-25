
import { motion } from 'framer-motion';
import { EditableImage } from '@/components/ui/editable-image';

type UserPersona = {
  title: string;
  description: string;
  image?: string;
};

interface UserPersonasProps {
  userPersona: UserPersona[];
}

const UserPersonas = ({ userPersona }: UserPersonasProps) => {
  return (
    <div className="mb-12 xs:mb-16 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(249,211,66)_1px,_transparent_0)] bg-[size:30px_30px]"></div>
      </div>
      
      <motion.h2 
        className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground mb-6 xs:mb-10 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        User Personas
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 relative z-10">
        {userPersona.map((persona, index) => (
          <motion.div 
            key={index} 
            className="group bg-background/60 backdrop-blur-sm p-4 xs:p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 dark-glow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="mb-4 h-32 xs:h-48 overflow-hidden rounded-xl border border-border/30 dark-glow-image">
              <EditableImage 
                src={persona.image || 'https://images.unsplash.com/photo-1494172892981-ce47ca2da1fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'} 
                alt={persona.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                fallbackSrc="/placeholder.svg"
              />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-heading text-base xs:text-xl font-semibold text-foreground group-hover:text-bengali-terracotta transition-colors duration-300">
                {persona.title}
              </h3>
              <p className="text-muted-foreground text-sm xs:text-base leading-relaxed">
                {persona.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserPersonas;

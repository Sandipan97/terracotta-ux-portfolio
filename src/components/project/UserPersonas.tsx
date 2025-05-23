
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
    <div className="mb-12 xs:mb-16">
      <motion.h2 
        className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-bengali-dark mb-6 xs:mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        User Personas
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
        {userPersona.map((persona, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-4 xs:p-6 rounded-lg shadow-md border border-white/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="mb-4 h-32 xs:h-48 overflow-hidden rounded-lg">
              <EditableImage 
                src={persona.image || 'https://images.unsplash.com/photo-1494172892981-ce47ca2da1fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'} 
                alt={persona.title}
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
            </div>
            <h3 className="font-heading text-base xs:text-xl font-semibold text-bengali-dark mb-2">
              {persona.title}
            </h3>
            <p className="text-bengali-dark/80 text-sm xs:text-base">
              {persona.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserPersonas;

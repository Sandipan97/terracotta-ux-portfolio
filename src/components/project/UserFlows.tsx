
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
    <div>
      <motion.h2 
        className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-bengali-dark mb-6 xs:mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        User Flows & Journeys
      </motion.h2>
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
              <div className="bg-white p-4 xs:p-6 rounded-lg shadow-md border border-white/60 backdrop-blur-sm">
                <h3 className="font-heading text-lg xs:text-2xl font-semibold text-bengali-dark mb-2 xs:mb-4">
                  {flow.title}
                </h3>
                <p className="text-bengali-dark/80 text-sm xs:text-base">
                  {flow.description}
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
                  src={flow.image || '/placeholder.svg'} 
                  alt={flow.title}
                  className="w-full h-auto"
                  fallbackSrc="/placeholder.svg"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UserFlows;


import { motion } from 'framer-motion';
import { designPhases } from '@/data/designPhases';
import ProcessArrow from './ProcessArrow';

interface MobileLayoutProps {
  isInView: boolean;
  containerVariants: any;
  phaseVariants: any;
  iconVariants: any;
  arrowVariants: any;
}

const MobileLayout = ({ 
  isInView, 
  containerVariants, 
  phaseVariants, 
  iconVariants, 
  arrowVariants 
}: MobileLayoutProps) => {
  return (
    <div className="md:hidden">
      <motion.div 
        className="grid grid-cols-2 gap-x-6 gap-y-8 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {designPhases.map((phase, index) => (
          <div key={phase.id} className="relative">
            <motion.div
              className="flex flex-col items-center group cursor-pointer"
              variants={phaseVariants}
              whileHover="hover"
              initial="rest"
            >
              <motion.div
                className={`
                  w-14 h-14 rounded-full ${phase.color} 
                  flex items-center justify-center shadow-lg mb-3
                  group-hover:shadow-xl transition-shadow duration-300 overflow-hidden
                  relative
                `}
                variants={iconVariants}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8">
                    {phase.illustration}
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={iconVariants}
              >
                <h3 className="font-heading text-sm font-semibold text-bengali-dark mb-1">
                  {phase.label}
                </h3>
                <p className="text-xs text-bengali-dark/60">
                  {phase.description}
                </p>
              </motion.div>
            </motion.div>

            {/* Vertical arrows for mobile */}
            {index % 2 === 1 && index < designPhases.length - 1 && (
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2"
                variants={arrowVariants}
              >
                <ProcessArrow 
                  arrowVariants={arrowVariants}
                  index={index}
                  isVertical={true}
                />
              </motion.div>
            )}

            {/* Horizontal arrow for odd items in mobile */}
            {index % 2 === 0 && index < designPhases.length - 1 && (
              <motion.div
                className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2"
                variants={arrowVariants}
              >
                <ProcessArrow 
                  arrowVariants={arrowVariants}
                  index={index}
                />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MobileLayout;


import { motion } from 'framer-motion';

const MoreResearchBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced magnifying glasses with plus signs */}
      <motion.div
        className="absolute top-16 left-12 w-20 h-20 opacity-25"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 20, 0],
          x: [0, 40, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full border-4 border-bengali-red rounded-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-8 bg-bengali-red/60"></div>
            <div className="w-8 h-2 bg-bengali-red/60 absolute"></div>
          </div>
        </div>
        <div className="w-2 h-10 bg-bengali-red transform rotate-45 absolute -bottom-2 -right-2"></div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-16 w-16 h-16 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -30, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-full h-full border-3 border-bengali-terracotta rounded-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-6 bg-bengali-terracotta/60"></div>
            <div className="w-6 h-1 bg-bengali-terracotta/60 absolute"></div>
          </div>
        </div>
      </motion.div>

      {/* Multiple data layers */}
      <motion.div
        className="absolute top-60 left-20 w-16 h-20 bg-bengali-red/20 rounded opacity-40"
        animate={{
          y: [0, -20, 0],
          scaleY: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-62 left-22 w-16 h-20 bg-bengali-red/25 rounded opacity-35"
        animate={{
          y: [0, -25, 0],
          scaleY: [1, 1.1, 1]
        }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
      />

      {/* Enhanced research particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-bengali-red/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.3, 1.8, 0.3],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}

      {/* Deep dive arrows */}
      <motion.div
        className="absolute bottom-32 right-24 text-3xl text-bengali-red/40"
        animate={{
          y: [0, 20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ⬇️
      </motion.div>
    </div>
  );
};

export default MoreResearchBackground;

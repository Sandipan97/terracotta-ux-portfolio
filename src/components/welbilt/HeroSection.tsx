
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50/50 to-indigo-100/30 dark:from-blue-950/20 dark:to-indigo-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <Badge className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2">
                UX/UI Design • Enterprise Software
              </Badge>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Welbilt Kitchen Connect
                <span className="block text-blue-600 dark:text-blue-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 sm:mt-3 md:mt-4">
                  IoT Platform Redesign
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Transforming kitchen equipment management through intuitive design and enhanced user experience for commercial kitchen operators.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8">
              <div className="text-center p-3 sm:p-4 md:p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">40%</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Faster Setup</div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">65%</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Less Errors</div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">90%</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">User Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-800">
              <EditableImage
                src="/lovable-uploads/WBnew.webp"
                alt="Welbilt Kitchen Connect Platform Interface"
                className="w-full h-full object-contain"
                fallbackSrc="/placeholder.svg"
                priority="critical"
                eager={true}
                lazy={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-blue-500 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-indigo-400 rounded-full opacity-15 animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

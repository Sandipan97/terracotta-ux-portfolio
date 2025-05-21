import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { EditableImage } from './ui/editable-image';
const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated blob backgrounds */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-bengali-terracotta rounded-t-[50%] transform translate-y-1/4"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-bengali-mustard/30 filter blur-xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[40%] right-[15%] w-40 h-40 rounded-full bg-bengali-terracotta/20 filter blur-xl animate-[pulse_12s_ease-in-out_infinite_1s]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div className="order-2 md:order-1" initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="font-display text-4xl lg:text-6xl font-bold text-bengali-dark mb-6 md:text-5xl text-left py-[12px]">
              <span className="relative inline-block py-0 my-[20px]">
                Hi
                <motion.span className="absolute -bottom-1 left-0 h-1 bg-bengali-mustard" initial={{
                width: 0
              }} animate={{
                width: "100%"
              }} transition={{
                delay: 1.2,
                duration: 0.8
              }} />
              </span>
              <br />I am
              <br />
              <span className="relative inline-block text-7xl py-0 my-[16px]">
                Sandipan
                <motion.span className="absolute -bottom-1 left-0 h-1 bg-bengali-terracotta" initial={{
                width: 0
              }} animate={{
                width: "100%"
              }} transition={{
                delay: 1.4,
                duration: 0.8
              }} />
              </span>
            </motion.h1>
            
            <motion.p className="text-lg text-bengali-dark/80 mb-8 max-w-md" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }}>
              Senior UX Designer & Researcher with 5 years of experience and a Masters in Design from IISc
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }}>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button onClick={scrollToProjects} className="bg-bengali-mustard text-bengali-terracotta hover:bg-bengali-mustard/90 transition-all duration-300">
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button variant="outline" className="border-bengali-terracotta text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300" asChild>
                  <a href="/contact">Get In Touch</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div className="order-1 md:order-2 flex justify-center md:justify-end" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.4,
          duration: 0.8,
          type: "spring"
        }}>
            <div className="relative">
              <motion.div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <EditableImage alt="Senior UX Designer and Researcher" src="/lovable-uploads/d6f8c20d-1961-4552-a823-c9c0b12a8f05.jpg" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="absolute -bottom-4 -right-4 text-bengali-dark px-6 py-3 rounded-full font-medium bg-white backdrop-blur-md border border-white/20 shadow-lg" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 1,
              duration: 0.5
            }}>
                5+ Years Experience
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5,
        duration: 0.5
      }}>
          <motion.button onClick={scrollToProjects} className="text-white bg-bengali-dark/20 backdrop-blur-sm p-3 rounded-full hover:bg-bengali-dark/30 transition-colors" aria-label="Scroll to projects" animate={{
          y: [0, 8, 0]
        }} transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}>
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default Hero;
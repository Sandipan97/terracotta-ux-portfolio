import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DesignSolutions = () => {
  const interfaceFeatures = [
    "OLED Screen (1.3\") – Black & white minimalist UI",
    "Power & Status Display – Clear, icon-based feedback", 
    "Alarm Logic Design – Color-coded + Symbol + Audible + Text (optional)",
    "Flow Rate, Oxygen Purity, and Timer – Always visible"
  ];

  const userFlowSteps = [
    "Bootup with branding and diagnostics",
    "Primary functions: Set Timer, Start, Pause, Check Filter", 
    "Alarm triggered with Visual + Audible combination",
    "Error screen with code/message for easy reporting"
  ];

  const prototypeFeatures = [
    "WHO safety features",
    "Optimized error-resolution paths",
    "Customizability for economic segments", 
    "Accessible interfaces for older adults"
  ];

  return (
    <section id="solutions" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="design-solutions" className="w-full">
            <AccordionItem value="design-solutions" className="border border-purple-200/50 rounded-2xl px-6 bg-purple-50/30 dark:bg-purple-900/10 dark:border-purple-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-purple-600 dark:hover:text-purple-400 py-6">
                ✨ DESIGN SOLUTIONS (Start with visuals first!)
                <span className="ml-2 text-sm text-muted-foreground">[Prototype Gallery: Basic, Mid, Premium Variants]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-8">
                  
                  {/* Interface Architecture */}
                  <div className="bg-background/60 rounded-xl p-6 border border-purple-200/30 dark:border-purple-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                      ⚙️ Interface Architecture
                      <span className="ml-2 text-sm text-muted-foreground">[Bitmap Layouts for Default + Alarm Modes]</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {interfaceFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-purple-50/30 dark:bg-purple-900/10 rounded-lg"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* User Flow */}
                  <div className="bg-background/60 rounded-xl p-6 border border-purple-200/30 dark:border-purple-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                      🔄 USER FLOW
                      <span className="ml-2 text-sm text-muted-foreground">[Flow Animation: Boot-up → Set Timer → Use → Alarm Mode → Off]</span>
                    </h3>
                    <div className="space-y-3">
                      {userFlowSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4 p-4 bg-purple-50/30 dark:bg-purple-900/10 rounded-lg"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-muted-foreground flex-1">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Prototype */}
                  <div className="bg-background/60 rounded-xl p-6 border border-purple-200/30 dark:border-purple-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                      💡 PROTOTYPE
                      <span className="ml-2 text-sm text-muted-foreground">[Industrial Prototype Photograph or 3D Render]</span>
                    </h3>
                    <p className="text-muted-foreground mb-4">💬 Final model incorporates:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {prototypeFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-purple-50/30 dark:bg-purple-900/10 rounded-lg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-purple-600 dark:text-purple-400">✅</span>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Transitions & Animations */}
                  <div className="bg-background/60 rounded-xl p-6 border border-purple-200/30 dark:border-purple-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4">
                      📍 TRANSITIONS & ANIMATIONS (Lovable.dev Suggestions)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <p>• <strong>Fade In:</strong> Hero Banner + Personas</p>
                        <p>• <strong>Slide Left/Right:</strong> Competitive Benchmark Carousel</p>
                        <p>• <strong>Scale-in Zoom:</strong> OLED screen mockups</p>
                      </div>
                      <div>
                        <p>• <strong>Lottie Animation:</strong> Alarm scenarios</p>
                        <p>• <strong>Sequential Scroll:</strong> Journey Map with illustrations</p>
                        <p>• <strong>Parallax Scroll:</strong> Low-fi → Mid-fi → Final Prototypes walkthrough</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignSolutions;
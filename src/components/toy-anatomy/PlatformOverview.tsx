import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PlatformOverview = () => {
  return (
    <section id="platform" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="platform-overview" className="w-full">
            <AccordionItem value="platform-overview" className="border border-blue-200/50 rounded-2xl px-6 bg-blue-50/30 dark:bg-blue-900/10 dark:border-blue-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 py-6">
                🧩 PLATFORM OVERVIEW
                <span className="ml-2 text-sm text-muted-foreground">[Exploded 3D Model Placeholder with Socket Animation]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="bg-background/60 rounded-lg p-6 border border-blue-200/30 dark:border-blue-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4">Platform Type: Modular Mechatronic Human Anatomy Toy</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Sub-Platforms:</h4>
                        <motion.div 
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-lg p-4 border border-blue-200/30">
                            <h5 className="font-medium text-foreground mb-2">"Make Him Alive"</h5>
                            <p className="text-sm text-muted-foreground">Kids connect organs to activate lights/sounds</p>
                          </div>
                          <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-lg p-4 border border-blue-200/30">
                            <h5 className="font-medium text-foreground mb-2">"Medical Training"</h5>
                            <p className="text-sm text-muted-foreground">Modular anatomy for students and nurses</p>
                          </div>
                        </motion.div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🔌 Interactivity Features:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            Plug-in organs, sensors, LED feedback
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            Mobile app sync
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">📱 App Features:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            Guided instructions
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            Fun quizzes
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            Responsive visual feedback
                          </li>
                        </ul>
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

export default PlatformOverview;
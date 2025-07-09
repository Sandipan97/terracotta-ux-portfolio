import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FutureVision = () => {
  const navigate = useNavigate();

  const futureExpansions = [
    "Expand to mental wellness kits (breathing/yoga modules)",
    "Create inclusive anatomy models (prosthetics, deformities)",
    "Build AI-assisted teaching apps that grow with the child"
  ];

  return (
    <section id="future" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="future-vision" className="w-full">
            <AccordionItem value="future-vision" className="border border-emerald-200/50 rounded-2xl px-6 bg-emerald-50/30 dark:bg-emerald-900/10 dark:border-emerald-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 py-6">
                🔮 WHAT'S NEXT?
                <span className="ml-2 text-sm text-muted-foreground">[Future Vision Animation: Anatomy Universe Platform]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="bg-background/60 rounded-lg p-6 border border-emerald-200/30 dark:border-emerald-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4">Future Platform Expansion</h3>
                    <div className="space-y-3">
                      {futureExpansions.map((expansion, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                          <span className="text-muted-foreground">{expansion}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                        Educational Innovation Through Play
                      </h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                        This project demonstrates the potential to revolutionize STEM education by making complex biological concepts accessible through interactive, mechatronic learning experiences that bridge fear and curiosity.
                      </p>
                      <Button 
                        className="bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300"
                        onClick={() => navigate('/contact')}
                      >
                        Discuss Educational Innovation
                      </Button>
                    </motion.div>
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

export default FutureVision;
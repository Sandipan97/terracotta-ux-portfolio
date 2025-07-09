import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ProjectTakeaways = () => {
  const navigate = useNavigate();

  const takeaways = [
    "Designs need to address empathy, error tolerance, and user literacy.",
    "Socio-economic personas guide differentiated UI approaches.", 
    "WHO alarms are necessary, but must be contextualized to local users' expectations"
  ];

  return (
    <section id="takeaways" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="project-takeaways" className="w-full">
            <AccordionItem value="project-takeaways" className="border border-green-200/50 rounded-2xl px-6 bg-green-50/30 dark:bg-green-900/10 dark:border-green-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-green-600 dark:hover:text-green-400 py-6">
                🏁 TAKEAWAYS & IMPACT
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-8">
                  
                  {/* Key Takeaways */}
                  <div className="bg-background/60 rounded-xl p-6 border border-green-200/30 dark:border-green-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-6">Key Learning Outcomes</h3>
                    <div className="space-y-4">
                      {takeaways.map((takeaway, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 p-4 bg-green-50/30 dark:bg-green-900/10 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-green-600 dark:text-green-400 text-lg">✅</span>
                          <span className="text-muted-foreground leading-relaxed">{takeaway}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Design Impact Metrics */}
                  <div className="bg-background/60 rounded-xl p-6 border border-green-200/30 dark:border-green-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-6">Design Impact Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <motion.div 
                        className="text-center p-4 bg-green-50/30 dark:bg-green-900/10 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">95%</div>
                        <div className="text-sm text-muted-foreground">WHO Compliance Rate</div>
                      </motion.div>
                      
                      <motion.div 
                        className="text-center p-4 bg-green-50/30 dark:bg-green-900/10 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">80%</div>
                        <div className="text-sm text-muted-foreground">Usability Score Across Age Groups</div>
                      </motion.div>
                      
                      <motion.div 
                        className="text-center p-4 bg-green-50/30 dark:bg-green-900/10 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">60%</div>
                        <div className="text-sm text-muted-foreground">Reduction in Setup Errors</div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-cyan-200/30 dark:border-cyan-800/30">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="font-bold text-xl text-foreground mb-4">
                        Interested in WHO-Compliant Medical Device Design?
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                        This O2C project demonstrates comprehensive UX methodology for life-critical medical devices, 
                        from socio-economic user research through deployment-ready prototypes.
                      </p>
                      <Button 
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                        onClick={() => navigate('/contact')}
                      >
                        Discuss Medical Device UX Projects
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

export default ProjectTakeaways;
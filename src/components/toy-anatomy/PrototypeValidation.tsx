import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PrototypeValidation = () => {
  const prototypeFeatures = [
    "3D-printed frame + snap-fit modules",
    "LED + Sensor logic with unique plug geometry",
    "Cardboard variations for low-cost rural access"
  ];

  const feedbackStats = [
    { percentage: "85%", description: "Parents prefer toys that reduce fear of hospitals" },
    { percentage: "92%", description: "Teachers see value in 3D learning kits" },
    { percentage: "70%", description: 'Kids said "it should light up or speak!"' }
  ];

  const ncertTopics = [
    "Bones", "Digestion", "Circulatory System", "Organs"
  ];

  return (
    <section id="prototype" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="prototype-validation" className="w-full">
            <AccordionItem value="prototype-validation" className="border border-pink-200/50 rounded-2xl px-6 bg-pink-50/30 dark:bg-pink-900/10 dark:border-pink-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-pink-600 dark:hover:text-pink-400 py-6">
                🧪 PROTOTYPE & VALIDATION
                <span className="ml-2 text-sm text-muted-foreground">[Prototype Photo + Assembly Time Lapse]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="bg-background/60 rounded-lg p-6 border border-pink-200/30 dark:border-pink-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                      🧪 PROTOTYPE & DEMO PREVIEW
                      <span className="ml-2 text-sm text-muted-foreground">[Demo: Connect → Light-up → App Reacts]</span>
                    </h3>
                    <div className="space-y-3">
                      {prototypeFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-pink-600 dark:text-pink-400 mr-2">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-6 border border-pink-200/30 dark:border-pink-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                      💬 USER FEEDBACK & SURVEY HIGHLIGHTS
                      <span className="ml-2 text-sm text-muted-foreground">[Survey Results Visualization - Pie + Word Cloud]</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {feedbackStats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="bg-pink-50/50 dark:bg-pink-900/10 rounded-lg p-4 border border-pink-200/30 text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                            ✅ {stat.percentage}
                          </div>
                          <p className="text-sm text-muted-foreground">{stat.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-6 border border-pink-200/30 dark:border-pink-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                      📚 NCERT SYLLABUS INTEGRATION
                      <span className="ml-2 text-sm text-muted-foreground">[Overlay Infographic: NCERT vs Toy Topics Matched]</span>
                    </h3>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">✅ Matches Class 4–9 Biology Topics</p>
                      <div className="flex flex-wrap gap-2">
                        {ncertTopics.map((topic, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-1 bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 rounded-full text-sm border border-pink-200/30"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            🧬 {topic}
                          </motion.span>
                        ))}
                      </div>
                      <p className="text-muted-foreground mt-3">🎯 Works as a curriculum support tool</p>
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

export default PrototypeValidation;
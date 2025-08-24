
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProjectStatus = () => {
  const navigate = useNavigate();

  const timeline = [
    { phase: "Phase 1 – Research & Stakeholder Mapping", date: "Sept 2021" },
    { phase: "Phase 2 – Design Prototyping", date: "Oct–Dec 2021" },
    { phase: "Phase 3 – System Testing & Feedback Loops", date: "Jan 2022" }
  ];

  const nextSteps = [
    "Clinical field trials in government and private hospitals",
    "EMR integration for automated documentation",
    "Filing of IP based on configuration-specific innovation"
  ];

  const impactGoals = [
    "Validated end-to-end process: insight → method → design → prototype",
    "Demonstrated human-centered design, affordability, and engineering rigor",
    "Real-world testing readiness with focus on scale, UX, and resilience"
  ];

  return (
    <section id="status" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="project-status" className="w-full">
            <AccordionItem value="project-status" className="border border-teal-200/50 rounded-2xl px-8 py-2 bg-teal-50/30 dark:bg-teal-900/10 dark:border-teal-800/50">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold text-foreground hover:text-teal-600 dark:hover:text-teal-400 py-8">
                ▶️ PROJECT STATUS, COST, & NEXT STEPS
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="space-y-10">
                  {/* Timeline */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-teal-700 dark:text-teal-400 mb-6 flex items-center">
                      📆 <span className="ml-3">Timeline</span>
                    </h3>
                    <div className="space-y-4">
                      {timeline.map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-background/60 rounded-lg p-6 border border-teal-200/30 dark:border-teal-800/30 flex justify-between items-center"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-foreground font-medium text-base md:text-lg">{item.phase}</span>
                          <span className="text-teal-600 dark:text-teal-400 font-semibold text-base md:text-lg">{item.date}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Cost */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-teal-700 dark:text-teal-400 mb-6 flex items-center">
                      💰 <span className="ml-3">Cost Projections</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-background/60 rounded-lg p-6 border border-teal-200/30 dark:border-teal-800/30">
                        <div className="text-3xl md:text-4xl font-bold text-foreground">₹3,860</div>
                        <div className="text-muted-foreground text-base md:text-lg mt-2">Prototype setup for 2 beds</div>
                      </div>
                      <div className="bg-background/60 rounded-lg p-6 border border-teal-200/30 dark:border-teal-800/30">
                        <div className="text-3xl md:text-4xl font-bold text-foreground">₹2,500/unit</div>
                        <div className="text-muted-foreground text-base md:text-lg mt-2">Estimated cost with scale</div>
                      </div>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-teal-700 dark:text-teal-400 mb-6 flex items-center">
                      🚀 <span className="ml-3">Next Steps</span>
                    </h3>
                    <ul className="space-y-3">
                      {nextSteps.map((step, index) => (
                        <li key={index} className="text-muted-foreground text-base md:text-lg flex items-start">
                          <span className="text-teal-600 dark:text-teal-400 mr-3 text-xl">•</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Goals */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-teal-700 dark:text-teal-400 mb-6 flex items-center">
                      🎯 <span className="ml-3">Impact Goals for PD Recruiters:</span>
                    </h3>
                    <ul className="space-y-3">
                      {impactGoals.map((goal, index) => (
                        <li key={index} className="text-muted-foreground text-base md:text-lg flex items-start">
                          <span className="text-emerald-600 dark:text-emerald-400 mr-3 text-xl">•</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-teal-200/30">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="bg-teal-600 hover:bg-teal-700 text-white text-base md:text-lg px-6 py-3"
                        onClick={() => navigate('/contact')}
                      >
                        Discuss Medical Device Projects
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

export default ProjectStatus;

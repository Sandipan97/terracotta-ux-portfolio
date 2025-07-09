import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ObjectiveMethodologies = () => {
  const methodologies = [
    { stage: "User Needs Analysis", methodology: "Field Interviews + Personas" },
    { stage: "Heuristic Evaluation", methodology: "Competitive Product Analysis" },
    { stage: "System Flow Definition", methodology: "Function Structure + WHO Alarm Guidelines" },
    { stage: "Design Iterations", methodology: "Low-Fidelity Wireframes + Prototypes" },
    { stage: "UX Validation", methodology: "Scenario-based Walkthroughs" }
  ];

  return (
    <section id="objective" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="objective-methodologies" className="w-full">
            <AccordionItem value="objective-methodologies" className="border border-cyan-200/50 rounded-2xl px-6 bg-cyan-50/30 dark:bg-cyan-900/10 dark:border-cyan-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-cyan-600 dark:hover:text-cyan-400 py-6">
                🎯 OBJECTIVE & METHODOLOGY
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="bg-background/60 rounded-lg p-6 border border-cyan-200/30 dark:border-cyan-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4">🎯 OBJECTIVE</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Design a user-friendly, accessible, and WHO-compliant UI/UX system for home-based and clinical oxygen concentrators catering to diverse economic user groups across India during the post-COVID-19 health crisis.
                    </p>
                    <div className="bg-cyan-600/10 border border-cyan-300/30 rounded-lg p-4">
                      <p className="text-foreground font-medium">
                        🟩 Outcome-focused design that ensures safe, easy, and error-free use for non-technical family members and clinical operators alike.
                      </p>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-6 border border-cyan-200/30 dark:border-cyan-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                      🧠 METHODOLOGY
                      <span className="ml-2 text-sm text-muted-foreground">[Flow Diagram Placeholder]</span>
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-cyan-200/50">
                            <th className="text-left py-3 px-4 font-semibold text-foreground bg-cyan-100/50 dark:bg-cyan-900/20 rounded-tl-lg">
                              Stage
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground bg-cyan-100/50 dark:bg-cyan-900/20 rounded-tr-lg">
                              Methodology Used
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {methodologies.map((row, index) => (
                            <motion.tr
                              key={index}
                              className="border-b border-cyan-200/30 hover:bg-cyan-50/30 dark:hover:bg-cyan-900/10 transition-colors"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <td className="py-3 px-4 font-medium text-cyan-700 dark:text-cyan-400">
                                {row.stage}
                              </td>
                              <td className="py-3 px-4 text-muted-foreground">
                                {row.methodology}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
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

export default ObjectiveMethodologies;
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ObjectiveMethodologies = () => {
  return (
    <section id="objective" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="objective-methodologies" className="w-full">
            <AccordionItem value="objective-methodologies" className="border border-emerald-200/50 rounded-2xl px-6 bg-emerald-50/30 dark:bg-emerald-900/10 dark:border-emerald-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 py-6">
                ▶️ OBJECTIVE and METHODOLOGIES
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center">
                      🎯 <span className="ml-2">Objective</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Design and develop a clinically robust, affordable IV drip monitoring device tailored for resource-constrained medical environments such as NICUs, burns wards, and rural health centers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center">
                      🛠 <span className="ml-2">Methodologies Employed:</span>
                    </h3>
                    <div className="grid gap-4">
                      {[
                        {
                          title: "Contextual Inquiry:",
                          description: "Stakeholder interviews across public/private healthcare facilities"
                        },
                        {
                          title: "Functional Decomposition & Morphological Analysis:",
                          description: "Created over 10 design variants"
                        },
                        {
                          title: "Quality Function Deployment (QFD):",
                          description: "Mapped stakeholder voice to engineering specs"
                        },
                        {
                          title: "Failure Mode and Effects Analysis (FMEA):",
                          description: "Risk evaluation with high-RPN mitigation"
                        },
                        {
                          title: "Power Budgeting:",
                          description: "Ensured 20-hour operation with a 3.7V 10,000mAh battery"
                        }
                      ].map((method, index) => (
                        <div key={index} className="bg-background/60 rounded-lg p-4 border border-emerald-200/30 dark:border-emerald-800/30">
                          <strong className="text-foreground">{method.title}</strong>
                          <span className="text-muted-foreground ml-1">{method.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-emerald-100/50 dark:bg-emerald-900/20 rounded-lg p-4 border-l-4 border-emerald-500">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">📌 Result:</strong> A clear, insight-driven pathway from user needs to validated, deployable design.
                    </p>
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
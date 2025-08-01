
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EditableImage } from '@/components/ui/editable-image';

const ResearchQuestions = () => {
  const questions = [
    {
      question: "How do we minimize manual drip errors in low-resource wards?",
      method: "Addressed via field visits, observational studies, nurse interviews."
    },
    {
      question: "What features ensure trust without overcomplicating use?",
      method: "Evaluated using QFD: LED alerts, snap-fit sensors, intuitive status display."
    },
    {
      question: "How can alerts be actionable without causing panic?",
      method: "Designed centralized console & visual-only alerts in patient zone."
    },
    {
      question: "How to eliminate theft and reduce device clutter?",
      method: "Solved with tamper-proof mounting, location-restricted functionality."
    }
  ];

  return (
    <section id="research" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="research-questions" className="w-full">
            <AccordionItem value="research-questions" className="border border-teal-200/50 rounded-2xl px-6 bg-teal-50/30 dark:bg-teal-900/10 dark:border-teal-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-teal-600 dark:hover:text-teal-400 py-6">
                ▶️ RESEARCH QUESTIONS – CONNECTED TO METHODS
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  {questions.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-background/60 rounded-lg p-5 border border-teal-200/30 dark:border-teal-800/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-foreground mb-2 flex items-start">
                        <span className="text-teal-600 dark:text-teal-400 mr-2">🔍 {index + 1}.</span>
                        {item.question}
                      </h4>
                      <p className="text-muted-foreground text-sm flex items-start">
                        <span className="text-emerald-600 dark:text-emerald-400 mr-2 font-medium">✅</span>
                        {item.method}
                      </p>
                    </motion.div>
                  ))}

                  {/* Customer Requirements Analysis - Full Width Landscape */}
                  <motion.div
                    className="space-y-6 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-teal-600 dark:text-teal-400 mr-2">📊</span>
                      Customer Requirements Rating Matrix
                    </h4>
                    <div className="w-full">
                      <EditableImage
                        src="/lovable-uploads/e1affce8-133c-4851-af10-6bc8eab24477.png"
                        alt="Customer Requirements Rating Matrix showing prioritized user needs and importance scores"
                        className="w-full h-auto rounded-lg border border-teal-200/50 shadow-md"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-teal-600 dark:text-teal-400 mr-2">🔗</span>
                      Our Competitors
                    </h4>
                    <div className="w-full">
                      <EditableImage
                        src="/lovable-uploads/O2C competitors.png"
                        alt="Technical dependency matrix linking customer requirements to engineering specifications"
                        className="w-full h-auto rounded-lg border border-teal-200/50 shadow-md"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>
                  </motion.div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchQuestions;

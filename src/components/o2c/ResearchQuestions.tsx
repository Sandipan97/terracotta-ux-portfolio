import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ResearchQuestions = () => {
  const questions = [
    {
      question: "How can oxygen concentrators be made usable by non-tech-savvy caregivers in low-resource settings?",
      method: "User Interviews + Persona Mapping"
    },
    {
      question: "What are the common failure points in user journeys?",
      method: "User Journey Mapping + Error Mode Analysis"
    },
    {
      question: "Which alarm and feedback indicators work best across age groups?",
      method: "WHO Guidelines Study + Bitmap UX Testing"
    },
    {
      question: "How do expectations differ across income segments?",
      method: "User Segmentation + Scenario-Based Interviews"
    }
  ];

  return (
    <section id="research" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="research-questions" className="w-full">
            <AccordionItem value="research-questions" className="border border-blue-200/50 rounded-2xl px-6 bg-blue-50/30 dark:bg-blue-900/10 dark:border-blue-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 py-6">
                ❓ RESEARCH QUESTIONS & METHODOLOGY ALIGNMENT
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-4">
                  {questions.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-background/60 rounded-lg p-5 border border-blue-200/30 dark:border-blue-800/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-foreground mb-2 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">🔍 {index + 1}.</span>
                        {item.question}
                      </h4>
                      <p className="text-muted-foreground text-sm flex items-start">
                        <span className="text-cyan-600 dark:text-cyan-400 mr-2 font-medium">→</span>
                        {item.method}
                      </p>
                    </motion.div>
                  ))}
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
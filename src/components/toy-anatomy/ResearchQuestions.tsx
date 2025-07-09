import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ResearchQuestions = () => {
  const questions = [
    "How can children learn biology fearlessly through play?",
    "What STEM toy features promote longer engagement?",
    "How can schools and parents embrace anatomy education beyond books?",
    "How can modular content adapt to age and curriculum?"
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
            <AccordionItem value="research-questions" className="border border-amber-200/50 rounded-2xl px-6 bg-amber-50/30 dark:bg-amber-900/10 dark:border-amber-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-amber-600 dark:hover:text-amber-400 py-6">
                ❓ KEY RESEARCH QUESTIONS
                <span className="ml-2 text-sm text-muted-foreground">[Split View Placeholder: Old Static Toy vs New Mechatronic Toy]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <motion.div
                      key={index}
                      className="bg-background/60 rounded-lg p-5 border border-amber-200/30 dark:border-amber-800/30 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.01 }}
                    >
                      <h4 className="font-semibold text-foreground flex items-start">
                        <span className="text-amber-600 dark:text-amber-400 mr-2">{index + 1}.</span>
                        {question}
                      </h4>
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
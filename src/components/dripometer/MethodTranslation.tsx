import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const MethodTranslation = () => {
  const translations = [
    {
      methodology: "Contextual Inquiry",
      decision: "LED alerts, central console, ergonomic screen tilt"
    },
    {
      methodology: "QFD",
      decision: "Pole mount (compact), USB charging, sensor status display"
    },
    {
      methodology: "Morphological Matrix",
      decision: "Selection of low-cost, theft-safe modular form"
    },
    {
      methodology: "FMEA",
      decision: "Backup memory for power loss, Wi-Fi integrity measures"
    },
    {
      methodology: "Power Budgeting",
      decision: "3.7V, 10,000mAh battery + minimal consumption circuit"
    }
  ];

  return (
    <section id="translation" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="method-translation" className="w-full">
            <AccordionItem value="method-translation" className="border border-emerald-200/50 rounded-2xl px-6 bg-emerald-50/30 dark:bg-emerald-900/10 dark:border-emerald-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 py-6">
                ▶️ TRANSLATION OF METHOD INTO DESIGN DECISIONS
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-emerald-200/50">
                        <th className="text-left py-3 px-4 font-semibold text-foreground bg-emerald-100/50 dark:bg-emerald-900/20 rounded-tl-lg">
                          Methodology
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground bg-emerald-100/50 dark:bg-emerald-900/20 rounded-tr-lg">
                          Resulting Design Decision
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {translations.map((row, index) => (
                        <motion.tr
                          key={index}
                          className="border-b border-emerald-200/30 hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <td className="py-3 px-4 font-medium text-emerald-700 dark:text-emerald-400">
                            {row.methodology}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {row.decision}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodTranslation;
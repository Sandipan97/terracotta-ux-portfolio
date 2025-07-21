import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EditableImage } from '@/components/ui/editable-image';
const MethodTranslation = () => {
  const translations = [{
    methodology: "Contextual Inquiry",
    decision: "LED alerts, central console, ergonomic screen tilt"
  }, {
    methodology: "QFD",
    decision: "Pole mount (compact), USB charging, sensor status display"
  }, {
    methodology: "Morphological Matrix",
    decision: "Selection of low-cost, theft-safe modular form"
  }, {
    methodology: "FMEA",
    decision: "Backup memory for power loss, Wi-Fi integrity measures"
  }, {
    methodology: "Power Budgeting",
    decision: "3.7V, 10,000mAh battery + minimal consumption circuit"
  }];
  return <section id="methods" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <Accordion type="single" collapsible defaultValue="method-translation" className="w-full">
            <AccordionItem value="method-translation" className="border border-emerald-200/50 rounded-2xl px-6 bg-emerald-50/30 dark:bg-emerald-900/10 dark:border-emerald-800/50">
              
              <AccordionContent className="pb-6">
                <div className="space-y-8">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-emerald-200/50">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Methodology</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Design Decision</th>
                        </tr>
                      </thead>
                      <tbody>
                        {translations.map((row, index) => (
                          <tr key={index} className="border-b border-emerald-100/50 last:border-0">
                            <td className="py-3 px-4 text-foreground font-medium">{row.methodology}</td>
                            <td className="py-3 px-4 text-muted-foreground">{row.decision}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* FMEA Analysis - Full Width Landscape */}
                  <motion.div className="space-y-6" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.6
                }} viewport={{
                  once: true
                }}>
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-emerald-600 dark:text-emerald-400 mr-2">⚠️</span>
                      FMEA Risk Analysis & Mitigation
                    </h4>
                    <div className="w-full">
                      <EditableImage src="/lovable-uploads/9bda1bc6-6d7d-4fe3-abb6-b1ce6f1516d4.png" alt="FMEA analysis table showing failure modes, effects, and risk mitigation strategies" className="w-full h-auto rounded-lg border border-emerald-200/50 shadow-md bg-white" fallbackSrc="/placeholder.svg" />
                    </div>
                  </motion.div>

                  {/* Function Structure - Full Width Landscape */}
                  <motion.div className="space-y-6" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.8
                }} viewport={{
                  once: true
                }}>
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-emerald-600 dark:text-emerald-400 mr-2">🔄</span>
                      Function Structure & Workflow
                    </h4>
                    <div className="w-full">
                      <EditableImage src="/lovable-uploads/98b03f40-5c59-4e85-a4d7-13c27d611bac.png" alt="Function structure diagram showing system workflow and component interactions" className="w-full h-auto rounded-lg border border-emerald-200/50 shadow-md bg-white" fallbackSrc="/placeholder.svg" />
                    </div>
                  </motion.div>

                  {/* Circuit Diagram and UI Flow - Full Width Landscape */}
                  <motion.div className="space-y-6" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: 1.0
                }} viewport={{
                  once: true
                }}>
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-emerald-600 dark:text-emerald-400 mr-2">⚡</span>
                      Circuit Design & User Interface Flow
                    </h4>
                    <div className="w-full">
                      <EditableImage src="/lovable-uploads/dbd16053-1353-4d40-bd87-5c80add05d77.png" alt="Circuit diagram and user interface flow showing technical implementation details" className="w-full h-auto rounded-lg border border-emerald-200/50 shadow-md bg-white" fallbackSrc="/placeholder.svg" />
                    </div>
                  </motion.div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>;
};
export default MethodTranslation;
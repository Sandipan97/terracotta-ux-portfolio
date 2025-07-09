import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const KeyFindings = () => {
  const findings = [
    {
      title: "Lack of Universal UI Usability",
      description: "Many interfaces lacked clarity, and icons were not intuitive for elders or caretakers with low tech exposure.",
      visual: "[Screens from Competitive Analysis]",
      chart: "[Bar Chart: Feature Presence Across Brands]",
      icon: "🔧"
    },
    {
      title: "Alarms Often Too Harsh or Unclear", 
      description: "Harsh red indicators and beeping alarms caused panic among elderly users, especially when not paired with clear messages.",
      visual: "[Alarm UX Matrix + Redesigned OLED Alert Interface]",
      chart: "[Transition Animation: Default → Alarm → Resolution States]",
      icon: "📟"
    },
    {
      title: "Complex User Journeys",
      description: "From prescription to setup, use, failure, and repair—the user journey is fragmented and lacks feedback loops.",
      visual: "[Storyboard: Sambit's End-to-End Journey]",
      chart: "[User Journey Map]",
      icon: "🧩"
    },
    {
      title: "Socio-Economic Expectations Differ",
      description: "Product features must adapt to the user's context (e.g., affordability vs. advanced control).",
      visual: "[Three-column Matrix: LIG vs. MIG vs. HIG Requirements]",
      chart: "",
      icon: "💰"
    }
  ];

  return (
    <section id="findings" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="key-findings" className="w-full">
            <AccordionItem value="key-findings" className="border border-orange-200/50 rounded-2xl px-6 bg-orange-50/30 dark:bg-orange-900/10 dark:border-orange-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-orange-600 dark:hover:text-orange-400 py-6">
                📌 KEY FINDINGS
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  {findings.map((finding, index) => (
                    <motion.div
                      key={index}
                      className="bg-background/60 rounded-xl p-6 border border-orange-200/30 dark:border-orange-800/30 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{finding.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground text-lg mb-2">
                            Finding {index + 1}: {finding.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {finding.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-orange-50/50 dark:bg-orange-900/10 rounded-lg p-4 border border-orange-200/30">
                              <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">Visual Placeholder</h4>
                              <p className="text-sm text-muted-foreground">{finding.visual}</p>
                            </div>
                            
                            {finding.chart && (
                              <div className="bg-orange-50/50 dark:bg-orange-900/10 rounded-lg p-4 border border-orange-200/30">
                                <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">Data Visualization</h4>
                                <p className="text-sm text-muted-foreground">{finding.chart}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
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

export default KeyFindings;
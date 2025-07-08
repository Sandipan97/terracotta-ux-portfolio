import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EditableImage } from '@/components/ui/editable-image';

const KeyFindings = () => {
  const findings = [
    {
      title: "Manual Monitoring = Errors + No Audit Trail",
      implication: "Need for automation, real-time logs",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nurse manually logging IV data in medical ward"
    },
    {
      title: "Shared IV poles = No Room for Bulky Devices",
      implication: "Must avoid extra hangers or add-ons",
      imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Crowded hospital ward with shared IV poles"
    },
    {
      title: "Alarms at bedside ≠ Effective",
      implication: "Need central system with precise mapping",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Central console screen with bed layout and alerts"
    },
    {
      title: "High Device Theft Risk",
      implication: "Must be non-functional outside secure Wi-Fi",
      imageSrc: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Lockable clamp and hospital-only pairing logic"
    },
    {
      title: "Nurses prefer \"plug-n-play\" interfaces",
      implication: "Snap-fit sensor design and color-coded feedback",
      imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Snap-fit sensor mechanism and LED indicators"
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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="key-findings" className="border border-emerald-200/50 rounded-2xl px-6 bg-emerald-50/30 dark:bg-emerald-900/10 dark:border-emerald-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 py-6">
                ▶️ KEY FINDINGS (with visual evidence)
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  {findings.map((finding, index) => (
                    <motion.div
                      key={index}
                      className="bg-background/60 rounded-lg p-5 border border-emerald-200/30 dark:border-emerald-800/30"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="md:col-span-2">
                          <h4 className="font-semibold text-foreground mb-2 flex items-start">
                            <span className="text-emerald-600 dark:text-emerald-400 mr-2">📌</span>
                            <span className="font-bold">{index + 1}. {finding.title}</span>
                          </h4>
                          <p className="text-muted-foreground text-sm flex items-start">
                            <span className="text-teal-600 dark:text-teal-400 mr-2">🔽</span>
                            <em>Implication: {finding.implication}</em>
                          </p>
                        </div>
                        <div className="md:col-span-1">
                          <EditableImage
                            src={finding.imageSrc}
                            alt={finding.imageAlt}
                            className="w-full h-32 object-cover rounded-lg border border-emerald-200/50"
                            fallbackSrc="/placeholder.svg"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  <div className="bg-emerald-100/50 dark:bg-emerald-900/20 rounded-lg p-4 border-l-4 border-emerald-500">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">➡️</strong> See <a href="#solutions" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">Design Solutions</a> for how these insights shaped our approach.
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

export default KeyFindings;
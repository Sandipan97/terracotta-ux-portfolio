import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const StrategicVision = () => {
  const visionPoints = [
    {
      question: "📍 Where do we want to go?",
      answer: "To make playful anatomy education mainstream by introducing modular, mechatronic toys to both homes and classrooms."
    },
    {
      question: "🚀 How will we get there?",
      answer: "By partnering with companies like Smartivity, FirstCry, and IMM and expanding through CSR initiatives and e-learning platforms."
    },
    {
      question: "🏆 Why will it succeed?",
      answer: "Because it's engaging, modular, educational, and fun for kids & functional for medical learners."
    }
  ];

  const revenueStreams = [
    "Modular kits (B2C)",
    "Training replicas (B2B)",
    "App subscriptions",
    "Custom kits for NGOs/schools"
  ];

  const channels = [
    "E-commerce (FirstCry, Amazon)",
    "EdTech partners",
    "STEM expos & school distributors"
  ];

  return (
    <section id="strategy" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="strategic-vision" className="w-full">
            <AccordionItem value="strategic-vision" className="border border-indigo-200/50 rounded-2xl px-6 bg-indigo-50/30 dark:bg-indigo-900/10 dark:border-indigo-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 py-6">
                🚀 STRATEGIC VISION (CSV)
                <span className="ml-2 text-sm text-muted-foreground">[Timeline Roadmap Animation: Concept → MVP → Scale]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="bg-background/60 rounded-lg p-6 border border-indigo-200/30 dark:border-indigo-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4">Strategic Framework</h3>
                    <div className="space-y-4">
                      {visionPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          className="bg-indigo-50/50 dark:bg-indigo-900/10 rounded-lg p-4 border border-indigo-200/30"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{point.question}</h4>
                          <p className="text-muted-foreground">{point.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-6 border border-indigo-200/30 dark:border-indigo-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                      📦 BUSINESS MODEL CANVAS
                      <span className="ml-2 text-sm text-muted-foreground">[Infographic Placeholder: BMC for Modular Anatomy Toy]</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Revenue Streams:</h4>
                        <div className="space-y-2">
                          {revenueStreams.map((stream, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                              <span className="text-muted-foreground">{stream}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Channels:</h4>
                        <div className="space-y-2">
                          {channels.map((channel, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                              <span className="text-muted-foreground">{channel}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
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

export default StrategicVision;
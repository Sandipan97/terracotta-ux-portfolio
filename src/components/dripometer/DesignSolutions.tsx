
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EditableImage } from '@/components/ui/editable-image';

const DesignSolutions = () => {
  const solutions = [{
    category: "🧩 Hardware",
    items: ["Clamp-on pole device (no extra hanger needed)", "Dual optical sensors with tamper-proof casing", "Angled screen for visual ergonomics (45°)", "LED status and sensor activity indicators"]
  }, {
    category: "🌐 System Architecture",
    items: ["Mesh-connected bedside units with console relay", "Real-time alerts for high/low/critical drip deviation", "Device memory protects data from power cuts"]
  }, {
    category: "🎨 User Interface (UI/UX)",
    items: ["Central console with bed-wise status map", "Non-audio alerts in wards, auditory alerts at station", "Nurse task flows simplified to \"green light go\" setup"]
  }, {
    category: "🔋 Power Performance",
    items: ["Power use: ~0.14W", "Runtime: ~20 hrs on 1x 10,000mAh battery", "Fast charge enabled (USB standard)"]
  }, {
    category: "🔐 Anti-Theft Design",
    items: ["Device lock requires special key", "Functionality locked to hospital Wi-Fi mesh"]
  }];

  return (
    <section id="solutions" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="design-solutions" className="w-full">
            <AccordionItem value="design-solutions" className="border border-teal-200/50 rounded-2xl px-6 bg-teal-50/30 dark:bg-teal-900/10 dark:border-teal-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-teal-600 dark:hover:text-teal-400 py-6">
                ▶️ 🔗 DESIGN SOLUTIONS (Insights to Execution)
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  {/* Compact grid layout for solution cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        className="bg-background/60 rounded-lg p-4 border border-teal-200/30 dark:border-teal-800/30 h-full"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="font-semibold text-foreground mb-3 text-base">
                          {solution.category}
                        </h4>
                        <ul className="space-y-1.5">
                          {solution.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-muted-foreground text-xs flex items-start leading-tight">
                              <span className="text-teal-600 dark:text-teal-400 mr-2 text-sm">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Concept Comparison - Full Width Landscape */}
                  <motion.div
                    className="space-y-6 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-teal-600 dark:text-teal-400 mr-2">📋</span>
                      Concept Generation
                    </h4>
                    <div className="w-full">
                      <EditableImage
                        src="/lovable-uploads/0a2bbc05-480f-4072-9af3-2a444df422b3.png"
                        alt="Concept comparison table showing four design alternatives with parameters for attachment, lock type, alerts, chargeability, sensor placement, and communication"
                        className="w-full h-auto rounded-lg border border-teal-200/50 shadow-md bg-white"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>
                  </motion.div>

                  {/* User Requirements vs Specifications - Full Width Landscape */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-teal-600 dark:text-teal-400 mr-2">⚙️</span>
                      Quality Function Deployment (QFD)
                    </h4>
                    <div className="w-full">
                      <EditableImage
                        src="/lovable-uploads/eedc0627-f4b4-4046-be1c-9710e8c88510.png"
                        alt="Quality Function Deployment (QFD) matrix mapping customer requirements to technical specifications with competitor analysis"
                        className="w-full h-auto rounded-lg border border-teal-200/50 shadow-md bg-white"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>
                  </motion.div>

                  {/* Device Display Photos - Two Portrait Images Side by Side */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-teal-600 dark:text-teal-400 mr-2">🔧</span>
                      The New Embodiment
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <EditableImage
                          src="/lovable-uploads/f4433b81-09ec-4d52-a0ec-dc9ac7ee5cd4.png"
                          alt="Front display interface of the dripometer device showing the digital screen and control elements"
                          className="w-full h-auto rounded-lg border border-teal-200/50 shadow-md bg-white object-cover object-right"
                          fallbackSrc="/placeholder.svg"
                        />
                        <p className="text-xs text-muted-foreground text-center">Front Display Interface</p>
                      </div>
                      <div className="space-y-2">
                        <EditableImage
                          src="/lovable-uploads/3b7054fd-1060-42b5-afa3-890c44d9991f.png"
                          alt="Detailed view of the device assembly showing modular construction and connection points"
                          className="w-full h-auto rounded-lg border border-teal-200/50 shadow-md"
                          fallbackSrc="/placeholder.svg"
                        />
                        <p className="text-xs text-muted-foreground text-center">Back Embodiment</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="bg-teal-100/50 dark:bg-teal-900/20 rounded-lg p-4 border-l-4 border-teal-500">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">📈 From Concept to Execution:</strong> Each feature mapped directly to a validated insight and stakeholder need.
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

export default DesignSolutions;

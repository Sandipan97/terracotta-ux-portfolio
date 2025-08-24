
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EditableImage } from '@/components/ui/editable-image';

const NewEmbodimentDesign = () => {
  return (
    <section id="embodiment" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="embodiment-design" className="w-full">
            <AccordionItem value="embodiment-design" className="border border-emerald-200/50 rounded-2xl px-6 bg-emerald-50/30 dark:bg-emerald-900/10 dark:border-emerald-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 py-6">
                ▶️ 🔧 NEW EMBODIMENT DESIGN (Physical Prototype)
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-8">
                  {/* Technical Drawings */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-emerald-600 dark:text-emerald-400 mr-2">📐</span>
                      Technical Drawings & Specifications
                    </h4>
                    <div className="w-full">
                      <EditableImage
                        src="/lovable-uploads/65a1c70b-0e77-4dc8-884a-4187c2184a88.png"
                        alt="Technical drawings showing detailed dimensions and component specifications for the Dripometer device"
                        className="w-full h-auto rounded-lg border border-emerald-200/50 shadow-md bg-white"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>
                  </motion.div>

                  {/* 3D Rendered Device */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-emerald-600 dark:text-emerald-400 mr-2">🎨</span>
                      3D Rendered Final Design
                    </h4>
                    <div className="w-full">
                      <EditableImage
                        src="/lovable-uploads/0910b8fc-6d6d-470d-a9cf-402a4995699a.png"
                        alt="3D rendered view of the Dripometer device showing the final design with display, LED indicators, and pole mounting system"
                        className="w-full h-auto rounded-lg border border-emerald-200/50 shadow-md"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>
                  </motion.div>

                  {/* Component Assembly */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground text-lg flex items-center">
                      <span className="text-emerald-600 dark:text-emerald-400 mr-2">🔩</span>
                      Component Assembly & Hardware Details
                    </h4>
                    <div className="w-full">
                      <EditableImage
                        src="/lovable-uploads/fd591559-34bf-47c7-b106-fde3b50253e7.png"
                        alt="Detailed view of component assembly showing mounting hardware, sensors, and internal structure of the Dripometer"
                        className="w-full h-auto rounded-lg border border-emerald-200/50 shadow-md"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>
                  </motion.div>

                  <div className="bg-emerald-100/50 dark:bg-emerald-900/20 rounded-lg p-4 border-l-4 border-emerald-500">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">🛠️ Physical Implementation:</strong> These designs represent the transition from concept to manufacturable product, incorporating all technical specifications and user requirements into a cohesive physical embodiment.
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

export default NewEmbodimentDesign;


import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EditableImage } from '@/components/ui/editable-image';
import { Target, Lightbulb, Play } from 'lucide-react';

const ObjectiveMethodologies = () => {
  return (
    <section id="objective" className="py-20 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 dark:from-emerald-950/20 dark:via-gray-900 dark:to-teal-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="objective-methodologies" className="w-full">
            <AccordionItem 
              value="objective-methodologies" 
              className="border-2 border-emerald-200/60 dark:border-emerald-800/60 rounded-3xl px-8 py-2 bg-gradient-to-r from-emerald-50/80 via-white to-emerald-50/80 dark:from-emerald-900/20 dark:via-gray-900/50 dark:to-emerald-900/20 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <AccordionTrigger className="text-2xl font-bold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 py-8 group">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span>OBJECTIVE & METHODOLOGIES</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-emerald-100/80 to-emerald-50/50 dark:from-emerald-900/30 dark:to-emerald-950/20 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-800/50 shadow-lg"
                    >
                      <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-4 flex items-center gap-3">
                        <div className="bg-emerald-600 p-2 rounded-lg">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        Objective
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        Redesign and Revamp an IV-drip monitor system developed by CPDMed (IISc) with new functionalities, robust tamperproof embodiment, affordability in mind tailored for resource-constrained medical environments such as NICUs, burns wards, and rural health centers.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-teal-100/80 to-teal-50/50 dark:from-teal-900/30 dark:to-teal-950/20 rounded-2xl p-6 border border-teal-200/50 dark:border-teal-800/50 shadow-lg"
                    >
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-6 flex items-center gap-3">
                        <div className="bg-teal-600 p-2 rounded-lg">
                          <Lightbulb className="w-5 h-5 text-white" />
                        </div>
                        Methodologies Employed
                      </h3>
                      <div className="grid gap-4">
                        {[
                          {
                            title: "Contextual Inquiry:",
                            description: "Stakeholder interviews across public/private healthcare facilities",
                            color: "emerald"
                          },
                          {
                            title: "Functional Decomposition & Morphological Analysis:",
                            description: "Created over 10 design variants",
                            color: "teal"
                          },
                          {
                            title: "Quality Function Deployment (QFD):",
                            description: "Mapped stakeholder voice to engineering specs",
                            color: "cyan"
                          },
                          {
                            title: "Failure Mode and Effects Analysis (FMEA):",
                            description: "Risk evaluation with high-RPN mitigation",
                            color: "blue"
                          },
                          {
                            title: "Power Budgeting:",
                            description: "Ensured 20-hour operation with a 3.7V 10,000mAh battery",
                            color: "indigo"
                          }
                        ].map((method, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`bg-white/80 dark:bg-gray-800/50 rounded-xl p-4 border-l-4 border-${method.color}-500 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                          >
                            <strong className="text-gray-900 dark:text-gray-100 text-lg">{method.title}</strong>
                            <p className="text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{method.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-emerald-100/90 to-teal-100/90 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-2xl p-6 border-l-4 border-emerald-500 shadow-lg"
                    >
                      <p className="text-gray-700 dark:text-gray-200 text-lg">
                        <strong className="text-emerald-700 dark:text-emerald-300 text-xl">📌 Result:</strong> 
                        <span className="ml-2">A clear, insight-driven pathway from user needs to validated, deployable design.</span>
                      </p>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {/* Video Showcase */}
                    <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-800/50 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
                          <Play className="text-white font-bold text-sm w-4 h-4" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">Product Showcase</h4>
                      </div>
                      <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                        <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                          <iframe 
                            src="https://player.vimeo.com/video/1112610596?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&dnt=1" 
                            frameBorder="0" 
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                            title="Dripometer"
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                        Interactive demonstration of the Dripometer 2.0 system showcasing real-time monitoring capabilities
                      </p>
                    </div>

                    {/* Legacy Device */}
                    <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-800/50 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                          <span className="text-white font-bold text-sm">OLD</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">Legacy Device</h4>
                      </div>
                      <div className="relative group overflow-hidden rounded-xl">
                        <EditableImage 
                          src="/lovable-uploads/d7004b56-b3d9-4f38-b006-2c629ba78879.png" 
                          alt="Old IV drip monitoring device setup showing monitoring device and sensor-mount attached to drip set"
                          className="w-full h-auto rounded-xl border-2 border-gray-200/50 dark:border-gray-700/50 transition-transform duration-500 group-hover:scale-105"
                          editableKey="dripometer-old-device-image"
                          objectFit="contain"
                          fallbackSrc="/placeholder.svg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                        Previous generation device with basic monitoring capabilities and limited user interface
                      </p>
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

export default ObjectiveMethodologies;

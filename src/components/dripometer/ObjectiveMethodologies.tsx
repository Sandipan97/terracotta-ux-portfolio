
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EditableImage } from '@/components/ui/editable-image';

const ObjectiveMethodologies = () => {
  const methodologies = [
    { stage: "Market Research", technique: "TAM Analysis, Patent Study, User Personas" },
    { stage: "Ideation & Brainstorming", technique: "60+ Playful Anatomy Concepts" },
    { stage: "Design & Prototyping", technique: "Function Structure, Mechatronic Integration" },
    { stage: "Customer Experience", technique: "Journey Maps for Students, Teachers, Parents" },
    { stage: "Validation", technique: "Surveys + HOQ Matrix + Feasibility Studies" }
  ];

  return (
    <section id="objective" className="py-16 bg-emerald-50/30 dark:bg-emerald-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="objective-methodologies" className="w-full">
            <AccordionItem value="objective-methodologies" className="border border-emerald-200 dark:border-emerald-800 rounded-2xl px-6 bg-emerald-50/20 dark:bg-emerald-950/10">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-emerald-600 py-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span>OBJECTIVE & METHODOLOGY</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="w-full lg:w-[35%] space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-background/90 rounded-lg p-6 border border-emerald-200/50 dark:border-emerald-800/50"
                    >
                      <h3 className="font-bold text-lg text-foreground mb-4">🎯 OBJECTIVE</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        To introduce an interactive, modular anatomy simulator toy that educates children (aged 5–13) through a playful, tactile, and mechatronics-enhanced experience — turning human biology into fun, hands-on learning.
                      </p>
                      <div className="bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/30 dark:border-emerald-800/30 rounded-lg p-4">
                        <p className="text-foreground font-medium">
                          💡 Aimed at bridging the gap between bookish biology and experiential learning — with a future-ready toy that talks, lights up, and responds to touch.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-background/90 rounded-lg p-6 border border-emerald-200/50 dark:border-emerald-800/50"
                    >
                      <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                        🛠️ METHODOLOGY
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-emerald-200 dark:border-emerald-800">
                              <th className="text-left py-3 px-4 font-semibold text-foreground bg-emerald-50/50 dark:bg-emerald-950/30 rounded-tl-lg">
                                Stage
                              </th>
                              <th className="text-left py-3 px-4 font-semibold text-foreground bg-emerald-50/50 dark:bg-emerald-950/30 rounded-tr-lg">
                                Technique Used
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {methodologies.map((row, index) => (
                              <motion.tr
                                key={index}
                                className="border-b border-emerald-200/30 dark:border-emerald-800/30 hover:bg-emerald-50/20 dark:hover:bg-emerald-950/20 transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <td className="py-3 px-4 font-medium text-emerald-600 dark:text-emerald-400">
                                  {row.stage}
                                </td>
                                <td className="py-3 px-4 text-muted-foreground">
                                  {row.technique}
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="w-full lg:w-[65%] space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-800/50 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
                          <span className="text-white text-lg">🏥</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">Legacy IV Monitoring</h4>
                      </div>
                      <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 h-64">
                        <EditableImage
                          src="/lovable-uploads/f9158d02-a831-4cc5-8cc4-ec86a3ee4989.png"
                          alt="Legacy IV drip monitoring device showing traditional analog display"
                          className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                          fallbackSrc="/placeholder.svg"
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                        Current IV monitoring relies on manual observation and basic analog displays, leading to delayed detection of critical issues.
                      </p>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-800/50 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
                          <span className="text-white text-lg">🎥</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">Product Showcase</h4>
                      </div>
                      <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 aspect-square">
                        <iframe 
                          src="https://player.vimeo.com/video/1112610596?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&dnt=1" 
                          frameBorder="0" 
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          className="absolute inset-0 w-full h-full rounded-xl" 
                          title="Dripometer"
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                        Interactive demonstration of the Dripometer 2.0 system showcasing real-time monitoring capabilities and smart alerting features.
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

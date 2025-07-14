import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ObjectiveMethodologies = () => {
  const methodologies = [
    { stage: "Market Research", technique: "TAM Analysis, Patent Study, User Personas" },
    { stage: "Ideation & Brainstorming", technique: "60+ Playful Anatomy Concepts" },
    { stage: "Design & Prototyping", technique: "Function Structure, Mechatronic Integration" },
    { stage: "Customer Experience", technique: "Journey Maps for Students, Teachers, Parents" },
    { stage: "Validation", technique: "Surveys + HOQ Matrix + Feasibility Studies" }
  ];

  return (
    <section id="objective" className="py-16 bg-toy-anatomy-peachy-orange/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="objective-methodologies" className="w-full">
            <AccordionItem value="objective-methodologies" className="border border-toy-anatomy-light-cyan rounded-2xl px-6 bg-toy-anatomy-light-cyan/20">
              <AccordionTrigger className="text-xl font-semibold text-toy-anatomy-text-dark hover:text-toy-anatomy-teal py-6">
                🎯 OBJECTIVE & METHODOLOGY
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="bg-background/90 rounded-lg p-6 border border-toy-anatomy-vibrant-orange/30">
                    <h3 className="font-bold text-lg text-toy-anatomy-text-dark mb-4">🎯 OBJECTIVE</h3>
                    <p className="text-toy-anatomy-text-dark/80 leading-relaxed mb-4">
                      To introduce an interactive, modular anatomy simulator toy that educates children (aged 5–13) through a playful, tactile, and mechatronics-enhanced experience — turning human biology into fun, hands-on learning.
                    </p>
                    <div className="bg-toy-anatomy-teal/10 border border-toy-anatomy-teal/30 rounded-lg p-4">
                      <p className="text-toy-anatomy-text-dark font-medium">
                        💡 Aimed at bridging the gap between bookish biology and experiential learning — with a future-ready toy that talks, lights up, and responds to touch.
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-toy-anatomy-text-dark/60">🖼️ [Hero Image Placeholder: Modular Anatomy Toy (Exploded View)]</p>
                    </div>
                  </div>

                  <div className="bg-background/90 rounded-lg p-6 border border-toy-anatomy-vibrant-orange/30">
                    <h3 className="font-bold text-lg text-toy-anatomy-text-dark mb-4 flex items-center">
                      🛠️ METHODOLOGY
                      <span className="ml-2 text-sm text-toy-anatomy-text-dark/60">[Infographic Placeholder: Research-to-Design Funnel]</span>
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-toy-anatomy-light-cyan">
                            <th className="text-left py-3 px-4 font-semibold text-toy-anatomy-text-dark bg-toy-anatomy-light-cyan/50 rounded-tl-lg">
                              Stage
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-toy-anatomy-text-dark bg-toy-anatomy-light-cyan/50 rounded-tr-lg">
                              Technique Used
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {methodologies.map((row, index) => (
                            <motion.tr
                              key={index}
                              className="border-b border-toy-anatomy-light-cyan/30 hover:bg-toy-anatomy-peachy-orange/20 transition-colors"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <td className="py-3 px-4 font-medium text-toy-anatomy-teal">
                                {row.stage}
                              </td>
                              <td className="py-3 px-4 text-toy-anatomy-text-dark/80">
                                {row.technique}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
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

export default ObjectiveMethodologies;
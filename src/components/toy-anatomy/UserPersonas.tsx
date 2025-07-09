import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const UserPersonas = () => {
  const personas = [
    {
      type: "Student",
      need: "Fun, hands-on anatomy learning",
      frustration: "Books are boring, models are static",
      icon: "🧑‍🔬"
    },
    {
      type: "Teacher", 
      need: "Engage every child in class",
      frustration: "Models lack interaction or excitement",
      icon: "🎓"
    },
    {
      type: "Parent",
      need: "Fear-free health learning",
      frustration: "Kids fear doctors & hospitals",
      icon: "🏡"
    }
  ];

  return (
    <section id="personas" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="user-personas" className="w-full">
            <AccordionItem value="user-personas" className="border border-green-200/50 rounded-2xl px-6 bg-green-50/30 dark:bg-green-900/10 dark:border-green-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-green-600 dark:hover:text-green-400 py-6">
                🧑‍🔬 USER PERSONAS & NEEDS
                <span className="ml-2 text-sm text-muted-foreground">[Persona Carousel Placeholder: Student, Teacher, Parent]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-background/60 rounded-lg">
                      <thead>
                        <tr className="border-b border-green-200/50">
                          <th className="text-left py-3 px-4 font-semibold text-foreground bg-green-100/50 dark:bg-green-900/20 rounded-tl-lg">
                            User
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground bg-green-100/50 dark:bg-green-900/20">
                            Need
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground bg-green-100/50 dark:bg-green-900/20 rounded-tr-lg">
                            Frustration
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {personas.map((persona, index) => (
                          <motion.tr
                            key={index}
                            className="border-b border-green-200/30 hover:bg-green-50/30 dark:hover:bg-green-900/10 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <td className="py-3 px-4 font-medium text-green-700 dark:text-green-400 flex items-center">
                              <span className="text-2xl mr-2">{persona.icon}</span>
                              {persona.type}
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">
                              {persona.need}
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">
                              {persona.frustration}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">🎞️ [Storyboard: Classroom Discovery Moment]</p>
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

export default UserPersonas;
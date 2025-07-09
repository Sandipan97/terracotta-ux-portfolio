import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const UserJourneys = () => {
  const journeys = [
    {
      user: "🎒 Student",
      journey: "Curious → Engaged → Confident",
      icon: "🧑‍🎓"
    },
    {
      user: "🎓 Teacher", 
      journey: "Plan → Demo → Interactive Teaching",
      icon: "👩‍🏫"
    },
    {
      user: "🏡 Parent",
      journey: "Skeptical → Surprised → Supportive", 
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <section id="journeys" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="user-journeys" className="w-full">
            <AccordionItem value="user-journeys" className="border border-teal-200/50 rounded-2xl px-6 bg-teal-50/30 dark:bg-teal-900/10 dark:border-teal-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-teal-600 dark:hover:text-teal-400 py-6">
                🔄 USER JOURNEY SNAPSHOTS
                <span className="ml-2 text-sm text-muted-foreground">[Journey Maps with Illustrations]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {journeys.map((journey, index) => (
                      <motion.div
                        key={index}
                        className="bg-background/60 rounded-xl p-6 border border-teal-200/30 dark:border-teal-800/30 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="text-center mb-4">
                          <div className="text-4xl mb-2">{journey.icon}</div>
                          <h3 className="font-bold text-foreground text-lg mb-2">{journey.user}</h3>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-teal-600 dark:text-teal-400">{journey.journey}</p>
                        </div>
                      </motion.div>
                    ))}
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

export default UserJourneys;
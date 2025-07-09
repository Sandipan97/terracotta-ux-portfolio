import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const UserPersonas = () => {
  const personas = [
    {
      name: "Sambit Sur",
      segment: "LIG",
      segmentColor: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      location: "Jhargram (Rural Bengal)",
      needs: "Affordable, rugged, and simple device",
      challenges: "Family lacks tech literacy",
      icon: "👨‍🌾"
    },
    {
      name: "Deepika Patel",
      segment: "MIG", 
      segmentColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      location: "Indore",
      needs: "Easy-to-use, reliable machine with customer support",
      challenges: "Elderly father + untrained caretaker",
      icon: "👩‍⚕️"
    },
    {
      name: "Akshay Mandal",
      segment: "HIG",
      segmentColor: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      location: "Kolkata",
      needs: "Premium-looking device with intuitive features",
      challenges: "Elderly panic at harsh feedback, needs seamless controls",
      icon: "👨‍💼"
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
            <AccordionItem value="user-personas" className="border border-emerald-200/50 rounded-2xl px-6 bg-emerald-50/30 dark:bg-emerald-900/10 dark:border-emerald-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 py-6">
                👥 USER PERSONAS
                <span className="ml-2 text-sm text-muted-foreground">[Carousel Placeholder: Economic Segments]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {personas.map((persona, index) => (
                    <motion.div
                      key={index}
                      className="bg-background/60 rounded-xl p-6 border border-emerald-200/30 dark:border-emerald-800/30 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{persona.icon}</div>
                        <h3 className="font-bold text-foreground text-lg mb-1">{persona.name}</h3>
                        <Badge className={`${persona.segmentColor} border-0`}>
                          {persona.segment}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium text-emerald-600 dark:text-emerald-400">📍 Location:</span>
                          <p className="text-muted-foreground mt-1">{persona.location}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-emerald-600 dark:text-emerald-400">💡 Needs:</span>
                          <p className="text-muted-foreground mt-1">{persona.needs}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-emerald-600 dark:text-emerald-400">⚠️ Challenges:</span>
                          <p className="text-muted-foreground mt-1">{persona.challenges}</p>
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

export default UserPersonas;
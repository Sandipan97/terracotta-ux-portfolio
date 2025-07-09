import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const KeyFeatures = () => {
  const features = [
    {
      title: "Mechatronic Plug & Play Organs",
      description: "Connect each correctly → Lights, Vibration, Voice",
      icon: "🎮"
    },
    {
      title: "Mobile App Companion",
      description: "Scan toy to unlock interactive anatomy games",
      icon: "🔍"
    },
    {
      title: "Safe & Sensory-Friendly Materials",
      description: "Vibrant, soft textures with snap-fit safety joints",
      icon: "🌈"
    }
  ];

  const kitVariants = [
    { level: "Beginner", description: "Bones Puzzle Kit" },
    { level: "Intermediate", description: "Connective Tissue Set" },
    { level: "Advanced", description: "Respiratory & Circulatory Kit" }
  ];

  return (
    <section id="features" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="key-features" className="w-full">
            <AccordionItem value="key-features" className="border border-purple-200/50 rounded-2xl px-6 bg-purple-50/30 dark:bg-purple-900/10 dark:border-purple-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-purple-600 dark:hover:text-purple-400 py-6">
                ✨ KEY FEATURES
                <span className="ml-2 text-sm text-muted-foreground">[Feature Highlight Mockups]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-background/60 rounded-xl p-6 border border-purple-200/30 dark:border-purple-800/30 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="text-center mb-4">
                          <div className="text-4xl mb-2">{feature.icon}</div>
                          <h3 className="font-bold text-foreground text-lg mb-2">✅ {feature.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-center">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-background/60 rounded-lg p-6 border border-purple-200/30 dark:border-purple-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4">✅ Multi-Variant Kit Ecosystem</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {kitVariants.map((kit, index) => (
                        <motion.div
                          key={index}
                          className="bg-purple-50/50 dark:bg-purple-900/10 rounded-lg p-4 border border-purple-200/30 text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">{kit.level}</h4>
                          <p className="text-sm text-muted-foreground">{kit.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">🖼️ [Feature Highlight Mockups]</p>
                    <p className="text-sm text-muted-foreground">🎞️ [Transition Animation: Toy Assembly → Activation → Organs Glow]</p>
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

export default KeyFeatures;
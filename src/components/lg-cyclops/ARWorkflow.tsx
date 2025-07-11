import { motion } from 'framer-motion';
import { Scan, View, RotateCcw, Volume2, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const workflowSteps = [
  {
    id: 1,
    icon: Scan,
    title: "Select & Scan",
    description: "Choose your product and scan a surface to place it virtually in your space",
    details: [
      "Product catalog selection",
      "Surface detection technology",
      "Automatic placement optimization"
    ],
    color: "bengali-terracotta"
  },
  {
    id: 2,
    icon: View,
    title: "3D Interaction",
    description: "Interact with the virtual product in real-time with intuitive gestures",
    details: [
      "Touch to open doors",
      "Pinch to zoom and explore",
      "Rotate for different angles"
    ],
    color: "bengali-mustard"
  },
  {
    id: 3,
    icon: RotateCcw,
    title: "Explore Features",
    description: "View dimensions, capacity, and internal components with AR overlays",
    details: [
      "Dimensional measurements",
      "Capacity visualization",
      "Component identification"
    ],
    color: "bengali-red"
  },
  {
    id: 4,
    icon: Volume2,
    title: "Voice Guidance",
    description: "Follow along with multilingual voice instructions and contextual tips",
    details: [
      "15+ language support",
      "Step-by-step narration",
      "Contextual safety tips"
    ],
    color: "bengali-terracotta"
  }
];

export const ARWorkflow = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-bengali-mustard/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                📱 How the AR Manual Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A seamless user journey from product selection to mastery through intuitive AR interactions
              </p>
            </motion.div>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <Badge className={`bg-${step.color}/10 text-${step.color} border-${step.color}/20 mb-2`}>
                        Step {step.id}
                      </Badge>
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + detailIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 bg-${step.color} rounded-full`}></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Step Visual */}
                <div className="flex-1">
                  <Card className={`bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 border-${step.color}/20 overflow-hidden group hover:border-${step.color}/40 transition-all duration-300`}>
                    <CardContent className="p-0">
                      <div className="relative h-64 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                        {/* Placeholder for step visualization */}
                        <div className={`w-20 h-20 bg-${step.color}/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className={`w-10 h-10 text-${step.color}`} />
                        </div>
                        
                        {/* Step number overlay */}
                        <div className={`absolute top-4 right-4 w-8 h-8 bg-${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                          {step.id}
                        </div>

                        {/* Animation indicators */}
                        <motion.div
                          className={`absolute inset-4 border-2 border-${step.color}/30 rounded-lg`}
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Connector Arrow */}
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="absolute left-1/2 transform -translate-x-1/2 lg:hidden"
                    style={{ top: '100%', zIndex: 10 }}
                  >
                    <ChevronRight className="w-6 h-6 text-bengali-terracotta rotate-90 lg:rotate-0" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Workflow Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-bengali-terracotta/10 to-bengali-mustard/10 border-bengali-terracotta/20">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Seamless AR Experience
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                  The entire workflow takes less than 2 minutes, with users able to access comprehensive 
                  product guidance through intuitive AR interactions and multilingual voice support.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-bengali-terracotta mb-2">&lt;2min</div>
                    <div className="text-sm text-muted-foreground">Setup Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-bengali-mustard mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Visual Guidance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-bengali-red mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Languages</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
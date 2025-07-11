import { motion } from 'framer-motion';
import { Shield, Settings, CheckCircle, AlertTriangle, Volume2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const safetyInstructions = [
  {
    id: 1,
    icon: Shield,
    title: "Child Lock Activation",
    description: "Visual guide to enable child safety features",
    steps: [
      "Locate the child lock button on the control panel",
      "Press and hold for 3 seconds until lock icon appears",
      "Test by attempting to open door - should remain locked",
      "Disable by pressing and holding again for 3 seconds"
    ],
    priority: "High",
    color: "bengali-red"
  },
  {
    id: 2,
    icon: AlertTriangle,
    title: "Door Safety Check",
    description: "Ensure proper door alignment and seal integrity",
    steps: [
      "Check door hinges for smooth operation",
      "Inspect rubber door seal for damage or debris",
      "Verify door closes completely with firm pressure",
      "Test door lock mechanism before first use"
    ],
    priority: "High",
    color: "bengali-terracotta"
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Cooking Precautions",
    description: "Essential safety guidelines for microwave operation",
    steps: [
      "Never operate with metal objects inside",
      "Use only microwave-safe containers",
      "Avoid heating sealed containers or eggs",
      "Keep ventilation areas clear during operation"
    ],
    priority: "Critical",
    color: "bengali-red"
  }
];

const setupInstructions = [
  {
    id: 1,
    icon: Settings,
    title: "Placement & Installation",
    description: "Proper positioning for optimal performance",
    steps: [
      "Choose level surface away from heat sources",
      "Maintain 6-inch clearance on all sides",
      "Ensure power outlet is easily accessible",
      "Verify adequate ventilation space above unit"
    ],
    visual: "placement",
    color: "bengali-mustard"
  },
  {
    id: 2,
    icon: Settings,
    title: "Turntable Installation",
    description: "Installing the glass turntable and support ring",
    steps: [
      "Place turntable support ring in center of cavity",
      "Align ring tabs with cavity guide slots",
      "Place glass turntable on support ring",
      "Test rotation by gently spinning turntable"
    ],
    visual: "turntable",
    color: "bengali-terracotta"
  }
];

export const SafetySetup = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-bengali-red/5">
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
                🛡️ Safety & Setup Guidance
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive safety protocols and setup instructions with AR-guided visual demonstrations
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Safety Instructions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-bengali-red" />
                  Safety Instructions
                </h3>
                <p className="text-muted-foreground">
                  Critical safety procedures with interactive AR demonstrations and voice guidance
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {safetyInstructions.map((instruction) => (
                  <AccordionItem 
                    key={instruction.id}
                    value={`safety-${instruction.id}`}
                    className={`border border-${instruction.color}/20 rounded-lg bg-gradient-to-br from-${instruction.color}/5 to-${instruction.color}/10`}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div className={`w-10 h-10 bg-${instruction.color} rounded-full flex items-center justify-center`}>
                          <instruction.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">{instruction.title}</h4>
                            <Badge 
                              variant={instruction.priority === 'Critical' ? 'destructive' : 'default'}
                              className="text-xs"
                            >
                              {instruction.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{instruction.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4">
                        {/* AR Visual Demo */}
                        <div className={`relative h-40 bg-${instruction.color}/5 rounded-lg border border-${instruction.color}/20 overflow-hidden`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.7, 1, 0.7],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <instruction.icon className={`w-16 h-16 text-${instruction.color}/50`} />
                            </motion.div>
                          </div>
                          
                          {/* Voice Guidance Indicator */}
                          <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-background/90 px-3 py-1 rounded-full text-xs">
                            <Volume2 className="w-3 h-3 text-bengali-mustard" />
                            <span className="text-muted-foreground">Voice guided</span>
                          </div>
                        </div>

                        {/* Step-by-step Instructions */}
                        <div className="space-y-3">
                          {instruction.steps.map((step, stepIndex) => (
                            <motion.div
                              key={stepIndex}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * stepIndex }}
                              className="flex items-start gap-3"
                            >
                              <div className={`w-6 h-6 bg-${instruction.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5`}>
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm text-foreground">{step}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Setup Instructions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Settings className="w-8 h-8 text-bengali-mustard" />
                  Setup Instructions
                </h3>
                <p className="text-muted-foreground">
                  Step-by-step installation guide with visual positioning assistance
                </p>
              </div>

              <div className="space-y-6">
                {setupInstructions.map((instruction, index) => (
                  <motion.div
                    key={instruction.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Card className={`bg-gradient-to-br from-${instruction.color}/10 to-${instruction.color}/5 border-${instruction.color}/20`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 bg-${instruction.color} rounded-full flex items-center justify-center`}>
                            <instruction.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-heading text-lg font-bold text-foreground">
                              {instruction.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{instruction.description}</p>
                          </div>
                        </div>

                        {/* Visual Demo Area */}
                        <div className={`relative h-32 bg-${instruction.color}/5 rounded-lg border border-${instruction.color}/20 mb-4 overflow-hidden`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              className={`w-20 h-12 bg-${instruction.color}/30 rounded-lg flex items-center justify-center`}
                              animate={{
                                y: [0, -5, 0],
                                rotateY: instruction.visual === 'turntable' ? [0, 360] : [0, 0],
                              }}
                              transition={{
                                duration: instruction.visual === 'turntable' ? 4 : 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <instruction.icon className={`w-6 h-6 text-${instruction.color}`} />
                            </motion.div>
                          </div>
                        </div>

                        {/* Steps */}
                        <div className="space-y-3">
                          {instruction.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start gap-3">
                              <div className={`w-5 h-5 bg-${instruction.color}/20 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>
                                <div className={`w-2 h-2 bg-${instruction.color} rounded-full`}></div>
                              </div>
                              <span className="text-sm text-foreground">{step}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Setup Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Card className="bg-gradient-to-br from-bengali-terracotta/10 to-bengali-mustard/10 border-bengali-terracotta/20">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-bengali-terracotta mx-auto mb-4" />
                    <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                      Setup Complete
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your microwave is now ready for safe operation with all safety features enabled
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="text-center">
                        <div className="font-bold text-bengali-terracotta">✓ Safety</div>
                        <div className="text-muted-foreground">Verified</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-bengali-mustard">✓ Setup</div>
                        <div className="text-muted-foreground">Complete</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
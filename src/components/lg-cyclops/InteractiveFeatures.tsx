import { motion } from 'framer-motion';
import { RotateCcw, Move3D, Eye, Volume2, Hand, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const interactiveFeatures = [
  {
    id: 1,
    icon: Hand,
    title: "Door Open/Close",
    description: "Touch to open and close the microwave door with realistic animations",
    action: "Tap to interact",
    color: "bengali-terracotta",
    demo: "door"
  },
  {
    id: 2,
    icon: Move3D,
    title: "View Dimensions",
    description: "See precise measurements with AR overlays and size comparisons",
    action: "Explore dimensions",
    color: "bengali-mustard",
    demo: "dimensions"
  },
  {
    id: 3,
    icon: RotateCcw,
    title: "360° Rotation",
    description: "Rotate the product to view from any angle with smooth gestures",
    action: "Drag to rotate",
    color: "bengali-red",
    demo: "rotate"
  },
  {
    id: 4,
    icon: Eye,
    title: "Internal Capacity",
    description: "Explore the interior space with visual capacity indicators",
    action: "Peer inside",
    color: "bengali-terracotta",
    demo: "capacity"
  },
  {
    id: 5,
    icon: Volume2,
    title: "Voice Guidance",
    description: "Listen to step-by-step instructions in your preferred language",
    action: "Tap for audio",
    color: "bengali-mustard",
    demo: "voice"
  },
  {
    id: 6,
    icon: Zap,
    title: "Feature Highlights",
    description: "Interactive hotspots reveal advanced features and specifications",
    action: "Touch hotspots",
    color: "bengali-red",
    demo: "features"
  }
];

export const InteractiveFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-bengali-terracotta/5 to-background">
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
                🔧 Interactive Features & Animations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Immersive 3D interactions that make product exploration intuitive and engaging
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {interactiveFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className={`h-full bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5 border-${feature.color}/20 hover:border-${feature.color}/40 transition-all duration-300 group cursor-pointer`}>
                  <CardContent className="p-6">
                    {/* Feature Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className={`w-12 h-12 bg-${feature.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 10 }}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          {feature.title}
                        </h3>
                        <div className={`text-xs text-${feature.color} font-medium`}>
                          Feature #{feature.id}
                        </div>
                      </div>
                    </div>

                    {/* Feature Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Interactive Demo Area */}
                    <div className={`relative h-32 bg-${feature.color}/5 rounded-lg border border-${feature.color}/20 mb-4 overflow-hidden group-hover:bg-${feature.color}/10 transition-colors duration-300`}>
                      {/* Demo Animation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className={`w-16 h-16 bg-${feature.color}/20 rounded-full flex items-center justify-center`}
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: feature.demo === 'rotate' ? [0, 360] : [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: feature.demo === 'rotate' ? 4 : 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                        </motion.div>
                      </div>

                      {/* Interaction Indicator */}
                      <motion.div
                        className={`absolute inset-2 border-2 border-${feature.color}/30 rounded-lg`}
                        animate={{
                          opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Tooltip */}
                      <div className={`absolute top-2 right-2 bg-${feature.color} text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        {feature.action}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`w-full border-${feature.color}/30 text-${feature.color} hover:bg-${feature.color} hover:text-white transition-all duration-300`}
                    >
                      {feature.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Central Demo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-bengali-terracotta/10 via-bengali-mustard/10 to-bengali-red/10 border-bengali-terracotta/20 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Interactive 3D Model Viewer
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Experience all features in a single, comprehensive 3D environment with smooth Lottie animations 
                    and realistic physics-based interactions.
                  </p>
                </div>

                {/* Main Demo Area */}
                <div className="relative h-80 bg-gradient-to-br from-background/50 to-muted/30 rounded-2xl border border-bengali-terracotta/20 overflow-hidden">
                  {/* 3D Viewer Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-32 h-24 bg-bengali-terracotta/20 rounded-lg flex items-center justify-center">
                        <div className="text-2xl">📱</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Feature Icons */}
                  {interactiveFeatures.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      className="absolute"
                      style={{
                        left: `${20 + index * 20}%`,
                        top: `${20 + (index % 2) * 60}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className={`w-8 h-8 bg-${feature.color}/20 rounded-full flex items-center justify-center backdrop-blur-sm`}>
                        <feature.icon className={`w-4 h-4 text-${feature.color}`} />
                      </div>
                    </motion.div>
                  ))}

                  {/* Voice Guidance Indicator */}
                  <motion.div
                    className="absolute bottom-4 left-4 flex items-center gap-2 bg-bengali-mustard/90 text-bengali-dark px-3 py-2 rounded-full text-sm font-medium"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Voice guidance active</span>
                  </motion.div>
                </div>

                {/* Interaction Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-bengali-terracotta/10 rounded-lg">
                    <div className="text-2xl font-bold text-bengali-terracotta mb-1">6</div>
                    <div className="text-sm text-muted-foreground">Interactive Features</div>
                  </div>
                  <div className="text-center p-4 bg-bengali-mustard/10 rounded-lg">
                    <div className="text-2xl font-bold text-bengali-dark mb-1">60fps</div>
                    <div className="text-sm text-muted-foreground">Smooth Animations</div>
                  </div>
                  <div className="text-center p-4 bg-bengali-red/10 rounded-lg">
                    <div className="text-2xl font-bold text-bengali-red mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Touch Responsive</div>
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
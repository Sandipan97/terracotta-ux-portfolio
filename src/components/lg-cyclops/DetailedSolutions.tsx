import { motion } from 'framer-motion';
import { Mic, RotateCcw, Globe, Eye, Shield, Code, Layers, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const detailedSolutions = [
  {
    id: 'detailed-voice-guidance',
    icon: Mic,
    title: "Voice-Guided AR Interface Implementation",
    overview: "Multi-language voice instructions synchronized with visual AR overlays for hands-free operation guidance.",
    implementation: [
      "Speech recognition engine with 15+ language support",
      "Real-time audio-visual synchronization framework",
      "Contextual voice commands for AR interaction",
      "Accessibility features for hearing-impaired users"
    ],
    features: [
      "Natural language processing for command recognition",
      "Dynamic voice speed adjustment based on user preference",
      "Cultural adaptation of instruction tone and style",
      "Offline voice guidance for areas with poor connectivity"
    ],
    impact: "89% user preference for voice + visual guidance",
    tags: ["Voice UI", "NLP", "Accessibility", "Multi-language"]
  },
  {
    id: 'detailed-3d-interaction',
    icon: RotateCcw,
    title: "3D Product Interaction System",
    overview: "360° product visualization with dimensional arrows and interactive component highlighting for spatial understanding.",
    implementation: [
      "3D model optimization for mobile AR performance",
      "Gesture recognition for rotation and zoom controls",
      "Dynamic lighting adaptation to environment",
      "Progressive loading for complex product models"
    ],
    features: [
      "Interactive hotspots for component information",
      "X-ray vision mode for internal component viewing",
      "Assembly/disassembly animation sequences",
      "Scale adjustment for different viewing distances"
    ],
    impact: "73% reduction in setup time",
    tags: ["3D Visualization", "Gesture Control", "Spatial UI", "Performance"]
  },
  {
    id: 'detailed-multilingual',
    icon: Globe,
    title: "Global Accessibility Framework",
    overview: "Seamless language switching with cultural adaptations and universal visual symbols for global markets.",
    implementation: [
      "Modular localization system for rapid market entry",
      "Cultural adaptation engine for visual symbols",
      "Right-to-left language support for AR overlays",
      "Regional compliance integration (safety standards)"
    ],
    features: [
      "Auto-detection of device language preferences",
      "Cultural color associations and symbol meanings",
      "Regional measurement unit conversion",
      "Time zone and date format adaptations"
    ],
    impact: "15+ languages with 94% satisfaction",
    tags: ["Localization", "Cultural Design", "Global Scale", "Compliance"]
  },
  {
    id: 'detailed-visual-guidance',
    icon: Eye,
    title: "Real-Time Visual Guidance Engine",
    overview: "Step-by-step animated overlays with contextual hints and progress indicators for complex procedures.",
    implementation: [
      "Computer vision for real-time object tracking",
      "Adaptive overlay positioning system",
      "Progress tracking with checkpoint validation",
      "Error detection and correction guidance"
    ],
    features: [
      "Contextual hint system based on user hesitation",
      "Visual progress indicators with time estimates",
      "Mistake prevention through predictive guidance",
      "Success celebration and completion confirmation"
    ],
    impact: "85% task completion rate improvement",
    tags: ["Computer Vision", "Animation", "Progress Tracking", "Error Prevention"]
  },
  {
    id: 'detailed-safety-features',
    icon: Shield,
    title: "Comprehensive Safety & Precaution System",
    overview: "Proactive safety warnings, child lock indicators, and hazard prevention through contextual AR alerts.",
    implementation: [
      "Risk assessment engine for procedure evaluation",
      "Environmental hazard detection system",
      "Emergency protocol integration",
      "Child safety compliance framework"
    ],
    features: [
      "Proactive warning system for dangerous operations",
      "Visual safety zone indicators in AR space",
      "Emergency contact integration for critical issues",
      "Parental controls and child lock visualization"
    ],
    impact: "Zero safety incidents in testing",
    tags: ["Safety Design", "Risk Assessment", "Emergency Protocols", "Child Safety"]
  }
];

export const DetailedSolutions = () => {
  return (
    <section className="py-20 bg-slate-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Detailed Solution Implementation
            </motion.h2>
            <motion.p 
              className="text-xl text-indigo-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Deep dive into the technical architecture and design decisions behind each AR solution
            </motion.p>
          </div>

          <div className="space-y-12">
            {detailedSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-indigo-500/30 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-2xl mb-3">{solution.title}</CardTitle>
                        <p className="text-gray-300 text-lg leading-relaxed">{solution.overview}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {solution.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-400 mb-1">{solution.impact.split(' ')[0]}</div>
                        <div className="text-sm text-gray-400">{solution.impact.split(' ').slice(1).join(' ')}</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-indigo-300 font-semibold mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          Technical Implementation
                        </h4>
                        <ul className="space-y-3">
                          {solution.implementation.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-purple-300 font-semibold mb-4 flex items-center gap-2">
                          <Layers className="w-5 h-5" />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { Smartphone, Cpu, Eye, Volume2, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';
const ARTechnologyShowcase = () => {
  const arFeatures = [{
    icon: Smartphone,
    title: "Cross-Platform AR",
    description: "Native Android and iOS AR support",
    details: ["ARCore integration", "ARKit compatibility", "Unity 3D engine"],
    color: "bg-blue-500"
  }, {
    icon: Cpu,
    title: "Real-time Processing",
    description: "Instant 3D model rendering and tracking",
    details: ["60 FPS rendering", "SLAM tracking", "Occlusion handling"],
    color: "bg-green-500"
  }, {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced surface detection and tracking",
    details: ["Plane detection", "Light estimation", "Object recognition"],
    color: "bg-purple-500"
  }, {
    icon: Volume2,
    title: "Voice Guidance",
    description: "Multi-language audio instructions",
    details: ["Text-to-speech", "Multiple accents", "Adjustable speed"],
    color: "bg-orange-500"
  }, {
    icon: Globe,
    title: "Offline Capability",
    description: "Full functionality without internet",
    details: ["Local 3D models", "Cached content", "Progressive download"],
    color: "bg-teal-500"
  }, {
    icon: Zap,
    title: "Performance Optimized",
    description: "Battery efficient AR experience",
    details: ["Dynamic LOD", "GPU optimization", "Power management"],
    color: "bg-red-500"
  }];
  const demoImages = [{
    title: "Product Placement",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "AR microwave placement in kitchen environment",
    description: "Accurate spatial positioning with realistic lighting"
  }, {
    title: "Interactive Features",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "AR interaction with 3D microwave model",
    description: "Touch interactions with animated feedback"
  }, {
    title: "Voice Guidance",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Voice guidance visualization in AR",
    description: "Audio-visual instructions with progress indicators"
  }];
  return <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AR Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge augmented reality technology delivering seamless user experiences
          </p>
        </motion.div>

        {/* Technical Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {arFeatures.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20 group">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`${feature.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {feature.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.details.map((detail, i) => <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-sm text-muted-foreground">
                          {detail}
                        </span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>

        {/* AR Demo Showcase */}
        

        {/* Technical Specifications */}
        
      </div>
    </section>;
};
export default ARTechnologyShowcase;
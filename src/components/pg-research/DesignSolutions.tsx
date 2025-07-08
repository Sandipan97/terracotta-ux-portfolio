import { motion } from 'framer-motion';
import { Monitor, Palette, Navigation, BarChart3, Shield, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EditableImage } from '@/components/ui/editable-image';

const solutions = [
  {
    id: 'interface-redesign',
    icon: Monitor,
    title: "Interface Redesign",
    description: "Complete visual overhaul with improved information hierarchy, cleaner layouts, and intuitive data organization.",
    image: "/lovable-uploads/c2dfb2fc-13e4-4095-a586-8bbe9a0d451f.png",
    improvements: [
      "Simplified navigation structure",
      "Enhanced visual hierarchy",
      "Improved readability"
    ]
  },
  {
    id: 'accessibility-features',
    icon: Shield,
    title: "Accessibility Enhancements",
    description: "WCAG 2.1 AA compliant design with improved color contrast, keyboard navigation, and screen reader support.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    improvements: [
      "High contrast color schemes",
      "Keyboard navigation support",
      "Screen reader optimization"
    ]
  },
  {
    id: 'data-visualization',
    icon: BarChart3,
    title: "Enhanced Data Visualization",
    description: "Interactive charts and graphs with customizable views for better data interpretation and analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    improvements: [
      "Interactive chart elements",
      "Customizable data views",
      "Export capabilities"
    ]
  },
  {
    id: 'mobile-optimization',
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Responsive design ensuring full functionality across devices, enabling field researchers to access data remotely.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    improvements: [
      "Responsive design system",
      "Touch-friendly interfaces",
      "Offline data access"
    ]
  }
];

export const DesignSolutions = () => {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Design Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive redesign addressing identified usability issues through user-centered design principles
            </motion.p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="bg-background/80 backdrop-blur-sm border-border/50 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <solution.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-foreground text-2xl">{solution.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {solution.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Improvements</h4>
                        <ul className="space-y-2">
                          {solution.improvements.map((improvement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} h-64 lg:h-80 overflow-hidden rounded-2xl border border-border/30 shadow-lg`}>
                  <EditableImage 
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Palette, Type, Layout, Component, Code, Zap } from 'lucide-react';

const DesignSystemGallery = () => {
  const systemComponents = [
    {
      category: "Color System",
      icon: Palette,
      description: "Unified color palette with semantic tokens",
      items: ["Primary", "Secondary", "Success", "Warning", "Error"],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      category: "Typography",
      icon: Type,
      description: "Scalable type system with clear hierarchy",
      items: ["Headings", "Body Text", "Captions", "Labels"],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      category: "Layout Grid",
      icon: Layout,
      description: "Responsive grid system for all devices",
      items: ["12-column", "Breakpoints", "Spacing", "Containers"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      category: "Components",
      icon: Component,
      description: "50+ reusable UI components",
      items: ["Buttons", "Forms", "Cards", "Navigation", "Modals"],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      category: "Code Quality",
      icon: Code,
      description: "Documented, tested, and accessible",
      items: ["TypeScript", "Storybook", "Tests", "Documentation"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      category: "Performance",
      icon: Zap,
      description: "Optimized for speed and efficiency",
      items: ["Tree-shaking", "Lazy loading", "Caching", "Bundle optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const metrics = [
    { label: "Components", value: "50+", description: "Reusable components" },
    { label: "Coverage", value: "95%", description: "Design token adoption" },
    { label: "Efficiency", value: "35%", description: "Development speed increase" },
    { label: "Consistency", value: "100%", description: "Brand alignment" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            🎨 Design System
          </Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            A Comprehensive Design System
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Built from the ground up to ensure consistency, scalability, and developer efficiency across all Welbilt products
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                <div className="text-xs text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Component Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {systemComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white h-full">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img 
                      src={component.image}
                      alt={`${component.category} design system`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-white/90 rounded-lg">
                        <Icon className="text-primary" size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {component.category}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {component.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {component.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      View Components
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            See the Design System in Action
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our design system reduced development time by 35% while maintaining perfect brand consistency across all touchpoints.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="px-8">
              View Documentation
            </Button>
            <Button variant="outline" className="px-8">
              Download Assets
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignSystemGallery;

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Palette, Type, Layout, Component, Code, Zap } from 'lucide-react';

const DesignSystemGallery = () => {
  const systemComponents = [{
    category: "Color System",
    icon: Palette,
    description: "Unified color palette with semantic tokens",
    items: ["Primary", "Secondary", "Success", "Warning", "Error"]
  }, {
    category: "Typography",
    icon: Type,
    description: "Scalable type system with clear hierarchy",
    items: ["Headings", "Body Text", "Captions", "Labels"]
  }, {
    category: "Layout Grid",
    icon: Layout,
    description: "Responsive grid system for all devices",
    items: ["12-column", "Breakpoints", "Spacing", "Containers"]
  }, {
    category: "Components",
    icon: Component,
    description: "50+ reusable UI components",
    items: ["Buttons", "Forms", "Cards", "Navigation", "Modals"]
  }, {
    category: "Code Quality",
    icon: Code,
    description: "Documented, tested, and accessible",
    items: ["TypeScript", "Storybook", "Tests", "Documentation"]
  }, {
    category: "Performance",
    icon: Zap,
    description: "Optimized for speed and efficiency",
    items: ["Tree-shaking", "Lazy loading", "Caching", "Bundle optimization"]
  }];

  const metrics = [{
    label: "Component Sets",
    value: "200+",
    description: "Reusable Variable-enabled components"
  }, {
    label: "Coverage",
    value: "95%",
    description: "Design token adoption"
  }, {
    label: "Efficiency",
    value: "85%",
    description: "Development speed increase"
  }, {
    label: "Consistency",
    value: "100%",
    description: "Brand alignment"
  }];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <span data-lovable-editable="welbilt-design-system-badge">🎨 Design System</span>
          </Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6" data-lovable-editable="welbilt-design-system-title">
            A Comprehensive Design System
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8" data-lovable-editable="welbilt-design-system-description">
            Built from the ground up to ensure consistency, scalability, and developer efficiency across all Welbilt products
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {metrics.map((metric, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="bg-muted rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1" data-lovable-editable={`welbilt-metric-${index}-value`}>{metric.value}</div>
                <div className="text-sm font-medium text-foreground" data-lovable-editable={`welbilt-metric-${index}-label`}>{metric.label}</div>
                <div className="text-xs text-muted-foreground" data-lovable-editable={`welbilt-metric-${index}-desc`}>{metric.description}</div>
              </motion.div>)}
          </div>

          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full max-w-6xl mx-auto mb-16"
          >
            <div className="relative w-full" style={{ padding: '56.25% 0 0 0' }}>
              <iframe 
                src="https://player.vimeo.com/video/1112119240?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&dnt=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Welbilt Design System Showcase"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Component Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {systemComponents.map((component, index) => {
          const Icon = component.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground" data-lovable-editable={`welbilt-component-${index}-title`}>
                        {component.category}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm" data-lovable-editable={`welbilt-component-${index}-desc`}>
                      {component.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {component.items.map((item, itemIndex) => <Badge key={itemIndex} variant="outline" className="text-xs">
                          <span data-lovable-editable={`welbilt-component-${index}-item-${itemIndex}`}>{item}</span>
                        </Badge>)}
                    </div>
                  </div>
                </Card>
              </motion.div>;
        })}
        </div>

        {/* Interactive Demo */}
        
      </div>
    </section>
  );
};

export default DesignSystemGallery;

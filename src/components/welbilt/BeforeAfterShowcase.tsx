
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock, BarChart3 } from 'lucide-react';
import { EditableImage } from '@/components/ui/editable-image';

const BeforeAfterShowcase = () => {
  const improvements = [{
    metric: "Loading Time",
    before: "1.5 - 2 minutes",
    after: "40 seconds",
    improvement: "67% faster",
    icon: Clock
  }, {
    metric: "User Satisfaction - PCSAT",
    before: "4.1/7",
    after: "6.9/7",
    improvement: "+40% increase",
    icon: Users
  }, {
    metric: "Error Rate",
    before: "12%",
    after: "3%",
    improvement: "75% reduction",
    icon: BarChart3
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
            <span data-lovable-editable="welbilt-transformation-badge">🔄 Transformation Story</span>
          </Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6" data-lovable-editable="welbilt-transformation-title">
            Before & After: A Complete Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-lovable-editable="welbilt-transformation-description">
            See how our comprehensive redesign transformed Welbilt's kitchen management experience
          </p>
        </motion.div>

        {/* Before/After Interface Comparison */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="p-6 bg-card border-border">
              <div className="mb-4">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
                  <span data-lovable-editable="welbilt-before-badge">Before</span>
                </Badge>
              </div>
              <div className="aspect-video bg-muted rounded-lg mb-4 relative overflow-hidden">
                <EditableImage src="https://Sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/Welbilt Legacy.webp" alt="Legacy kitchen management interface" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-red-900/10"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2" data-lovable-editable="welbilt-before-title">Legacy Interface</h3>
              <ul className="text-muted-foreground space-y-1">
                <li data-lovable-editable="welbilt-before-item-1">• Cluttered navigation</li>
                <li data-lovable-editable="welbilt-before-item-2">• Inconsistent UI elements</li>
                <li data-lovable-editable="welbilt-before-item-3">• Poor mobile experience</li>
                <li data-lovable-editable="welbilt-before-item-4">• Limited accessibility</li>
              </ul>
            </Card>

            {/* After */}
            <Card className="p-6 bg-card border-border">
              <div className="mb-4">
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  <span data-lovable-editable="welbilt-after-badge">After</span>
                </Badge>
              </div>
              <div className="aspect-video bg-muted rounded-lg mb-4 relative overflow-hidden">
                <EditableImage src="https://Sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/Welbilt Revamp.webp" 
                     alt="Modern kitchen management interface" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-green-900/10"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2" data-lovable-editable="welbilt-after-title">Redesigned Experience</h3>
              <ul className="text-muted-foreground space-y-1">
                <li data-lovable-editable="welbilt-after-item-1">• Clean, intuitive interface</li>
                <li data-lovable-editable="welbilt-after-item-2">• Unified design system</li>
                <li data-lovable-editable="welbilt-after-item-3">• Mobile-first approach</li>
                <li data-lovable-editable="welbilt-after-item-4">• WCAG AA compliant</li>
              </ul>
            </Card>
          </div>

          {/* Arrow Indicator */}
          <div className="flex justify-center mb-12">
            <motion.div animate={{
            x: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="flex items-center gap-4 bg-card px-6 py-3 rounded-full shadow-sm border-border border">
              <span className="text-muted-foreground font-medium" data-lovable-editable="welbilt-transformation-arrow">Transformation</span>
              <ArrowRight className="text-primary" size={20} />
            </motion.div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {improvements.map((item, index) => {
          const Icon = item.icon;
          return <Card key={index} className="p-6 bg-card border-border text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-3" data-lovable-editable={`welbilt-metric-${index}-title`}>{item.metric}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-red-600" data-lovable-editable={`welbilt-metric-${index}-before`}>Before: {item.before}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600" data-lovable-editable={`welbilt-metric-${index}-after`}>After: {item.after}</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    <span data-lovable-editable={`welbilt-metric-${index}-improvement`}>{item.improvement}</span>
                  </Badge>
                </div>
              </Card>;
        })}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;

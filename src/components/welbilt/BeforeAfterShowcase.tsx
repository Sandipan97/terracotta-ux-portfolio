import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock, BarChart3 } from 'lucide-react';

const BeforeAfterShowcase = () => {
  const improvements = [
    {
      metric: "Task Completion Time",
      before: "8.5 minutes",
      after: "3.2 minutes",
      improvement: "62% faster",
      icon: Clock
    },
    {
      metric: "User Satisfaction",
      before: "6.2/10",
      after: "8.7/10",
      improvement: "+40% increase",
      icon: Users
    },
    {
      metric: "Error Rate",
      before: "12%",
      after: "3%",
      improvement: "75% reduction",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            🔄 Transformation Story
          </Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Before & After: A Complete Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our comprehensive redesign transformed Welbilt's kitchen management experience
          </p>
        </motion.div>

        {/* Before/After Interface Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="p-6 bg-white border border-gray-200">
              <div className="mb-4">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
                  Before
                </Badge>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Legacy kitchen management interface"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-red-900/10"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Legacy Interface</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Cluttered navigation</li>
                <li>• Inconsistent UI elements</li>
                <li>• Poor mobile experience</li>
                <li>• Limited accessibility</li>
              </ul>
            </Card>

            {/* After */}
            <Card className="p-6 bg-white border border-gray-200">
              <div className="mb-4">
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  After
                </Badge>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern kitchen management interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-900/10"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Redesigned Experience</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Clean, intuitive interface</li>
                <li>• Unified design system</li>
                <li>• Mobile-first approach</li>
                <li>• WCAG AA compliant</li>
              </ul>
            </Card>
          </div>

          {/* Arrow Indicator */}
          <div className="flex justify-center mb-12">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200"
            >
              <span className="text-gray-600 font-medium">Transformation</span>
              <ArrowRight className="text-primary" size={20} />
            </motion.div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {improvements.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 bg-white border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{item.metric}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-red-600">Before: {item.before}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">After: {item.after}</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    {item.improvement}
                  </Badge>
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;

import { motion } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';

const BeforeAfterShowcase = () => {
  const comparisons = [{
    title: "Main Dashboard",
    before: {
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Legacy dashboard with cluttered interface",
      issues: ["No clear sections", "Poor visual hierarchy", "Confusing navigation"]
    },
    after: {
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Modern dashboard with clean design",
      improvements: ["Organized sections", "Clear navigation", "Dark/light mode"]
    }
  }, {
    title: "Alarm Settings",
    before: {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Old alarm settings interface",
      issues: ["Scattered controls", "Unclear feedback", "No grouping"]
    },
    after: {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "New organized alarm settings",
      improvements: ["Grouped controls", "Visual feedback", "Toggle switches"]
    }
  }];

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16" 
          initial="initial" 
          whileInView="animate" 
          variants={fadeInUp} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-lovable-editable="pg-datalogger-showcase-title">
            Before & After Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-lovable-editable="pg-datalogger-showcase-description">
            See the dramatic transformation from legacy interface to modern, user-friendly design
          </p>
        </motion.div>

        <div className="space-y-16">
          {comparisons.map((comparison, index) => (
            <motion.div 
              key={index}
              initial="initial" 
              whileInView="animate" 
              variants={fadeInUp} 
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8">{comparison.title}</h3>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Before */}
                <Card className="p-6">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="destructive" className="bg-red-100 text-red-800">
                        Before
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                      <EditableImage 
                        src={comparison.before.image}
                        alt={comparison.before.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      {comparison.before.issues.map((issue, issueIndex) => (
                        <div key={issueIndex} className="flex items-center gap-2 text-muted-foreground">
                          <X className="w-4 h-4 text-red-500" />
                          <span className="text-sm">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* After */}
                <Card className="p-6">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        After
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                      <EditableImage 
                        src={comparison.after.image}
                        alt={comparison.after.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      {comparison.after.improvements.map((improvement, improvementIndex) => (
                        <div key={improvementIndex} className="flex items-center gap-2 text-muted-foreground">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Transformation Arrow */}
              {index < comparisons.length - 1 && (
                <div className="flex justify-center mt-8">
                  <motion.div 
                    animate={{ x: [0, 10, 0] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
                  >
                    <span className="text-primary font-medium">Transformation</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;

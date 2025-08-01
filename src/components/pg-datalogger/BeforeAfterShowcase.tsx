import { motion } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';

const BeforeAfterShowcase = () => {
  const comparisons = [
    {
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
    },
    {
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
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="initial" 
          whileInView="animate" 
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Before & After Transformation</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See the dramatic improvement in usability and visual design
          </p>
        </motion.div>

        <div className="space-y-16">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{comparison.title}</h3>
                <Badge variant="outline" className="text-sm">UI/UX Redesign</Badge>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Before */}
                <Card className="relative overflow-hidden group">
                  <CardHeader className="bg-destructive/10 border-b border-destructive/20">
                    <CardTitle className="flex items-center text-destructive">
                      <X className="w-5 h-5 mr-2" />
                      Before
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <EditableImage
                        src={comparison.before.image}
                        alt={comparison.before.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        fallbackSrc="/placeholder.svg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold mb-3 text-destructive">Key Issues:</h4>
                      <ul className="space-y-2">
                        {comparison.before.issues.map((issue, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <X className="w-4 h-4 text-destructive mr-2 mt-0.5 flex-shrink-0" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow */}
                <div className="hidden lg:flex justify-center items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* After */}
                <Card className="relative overflow-hidden group">
                  <CardHeader className="bg-primary/10 border-b border-primary/20">
                    <CardTitle className="flex items-center text-primary">
                      <Check className="w-5 h-5 mr-2" />
                      After
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <EditableImage
                        src={comparison.after.image}
                        alt={comparison.after.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        fallbackSrc="/placeholder.svg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold mb-3 text-primary">Improvements:</h4>
                      <ul className="space-y-2">
                        {comparison.after.improvements.map((improvement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
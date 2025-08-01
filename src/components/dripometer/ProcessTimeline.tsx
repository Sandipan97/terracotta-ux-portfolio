import { motion } from 'framer-motion';
import { Users, Search, Lightbulb, TestTube, Cog, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { EditableImage } from '@/components/ui/editable-image';

const ProcessTimeline = () => {
  const phases = [
    {
      icon: Users,
      title: "Stakeholder Research",
      description: "Healthcare worker interviews and needs assessment",
      duration: "4 weeks",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Healthcare workers in hospital setting"
    },
    {
      icon: Search,
      title: "Market Analysis",
      description: "Competitive landscape and technology review",
      duration: "2 weeks", 
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Medical device market research"
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "Ideation and initial design concepts",
      duration: "3 weeks",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Design brainstorming and concept sketches"
    },
    {
      icon: TestTube,
      title: "Prototyping",
      description: "Hardware prototypes and user testing",
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Medical device prototyping process"
    },
    {
      icon: Cog,
      title: "Refinement",
      description: "Design iteration based on feedback",
      duration: "4 weeks",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Product refinement and testing"
    },
    {
      icon: Rocket,
      title: "Deployment Ready",
      description: "Final validation and production preparation",
      duration: "2 weeks",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Final product ready for deployment"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50/30 dark:bg-emerald-950/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-900 dark:text-emerald-100">
            Design Process Journey
          </h2>
          <p className="text-lg text-emerald-700 dark:text-emerald-300 max-w-3xl mx-auto">
            A comprehensive 23-week journey from initial research to deployment-ready medical device
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline path */}
            <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600 rounded-full" />
            
            <div className="grid grid-cols-6 gap-4">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative z-10 hover:shadow-lg transition-all duration-300 border-emerald-200 dark:border-emerald-800">
                    <CardContent className="p-4">
                      <div className="mb-3 h-32 overflow-hidden rounded-lg">
                        <EditableImage
                          src={phase.image}
                          alt={phase.alt}
                          className="w-full h-full object-cover"
                          fallbackSrc="/placeholder.svg"
                        />
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-lg mb-3 flex justify-center">
                          <phase.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-sm font-semibold mb-2 text-emerald-900 dark:text-emerald-100">
                          {phase.title}
                        </h3>
                        <p className="text-xs text-emerald-700 dark:text-emerald-300 mb-2">
                          {phase.description}
                        </p>
                        <div className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {phase.duration}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-600 rounded-full border-4 border-white dark:border-gray-900 z-20 shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
                
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 border-emerald-200 dark:border-emerald-800">
                  <CardContent className="p-6">
                    <div className="mb-4 h-40 overflow-hidden rounded-lg">
                      <EditableImage
                        src={phase.image}
                        alt={phase.alt}
                        className="w-full h-full object-cover"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 text-emerald-900 dark:text-emerald-100">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">
                      {phase.description}
                    </p>
                    <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium inline-block">
                      {phase.duration}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Connecting line */}
              {index < phases.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-emerald-300 dark:bg-emerald-700" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
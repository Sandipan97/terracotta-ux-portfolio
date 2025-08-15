import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { EditableImage } from '@/components/ui/editable-image';
const ProcessTimeline = () => {
  const timelineSteps = [{
    title: "Requirements Analysis",
    description: "Stakeholder interviews and requirement gathering",
    duration: "2 weeks",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Team collaboration and requirements gathering"
  }, {
    title: "Heuristic Evaluation",
    description: "UX audit using Nielsen's usability principles",
    duration: "1 week",
    image: "https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/pg heuristic 1.webp",
    alt: "UX evaluation and analysis process"
  }, {
    title: "Design System",
    description: "Scalable component library and tokenized design",
    duration: "3 weeks",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Design system components and patterns"
  }, {
    title: "Implementation",
    description: "Development and testing with stakeholders",
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Development and implementation process"
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
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
        once: true
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Process Timeline</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to transforming legacy industrial UX into modern, user-friendly interfaces
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between relative">
              {/* Timeline Line */}
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-primary/20 z-0" />
              
              {timelineSteps.map((step, index) => <motion.div key={index} className="relative flex-1 max-w-xs" initial={{
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
                  <Card className="relative z-10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 px-[24px] py-[24px]">
                      <div className="mb-4 relative h-40 overflow-hidden rounded-lg">
                        <EditableImage src={step.image} alt={step.alt} className="w-full h-full object-cover" fallbackSrc="/placeholder.svg" />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                        
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline Dot */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-20" />
                  
                  {/* Arrow (except for last item) */}
                  {index < timelineSteps.length - 1 && <ArrowRight className="absolute top-24 -right-6 w-6 h-6 text-primary/60 z-30" />}
                </motion.div>)}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {timelineSteps.map((step, index) => <motion.div key={index} className="relative" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  
                  <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 h-40 overflow-hidden rounded-lg">
                        <EditableImage src={step.image} alt={step.alt} className="w-full h-full object-cover" fallbackSrc="/placeholder.svg" />
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block">
                        {step.duration}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Connecting Line */}
                {index < timelineSteps.length - 1 && <div className="absolute left-4 top-8 w-0.5 h-16 bg-primary/20" />}
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ProcessTimeline;
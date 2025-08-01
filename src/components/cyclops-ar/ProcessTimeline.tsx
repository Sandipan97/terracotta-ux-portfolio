import { motion } from 'framer-motion';
import { Users, Search, Lightbulb, Code, TestTube, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { EditableImage } from '@/components/ui/editable-image';

const ProcessTimeline = () => {
  const phases = [
    {
      icon: Users,
      title: "User Research",
      description: "Consumer interviews and pain point analysis",
      duration: "3 weeks",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "User research and interview sessions"
    },
    {
      icon: Search,
      title: "AR Technology Research", 
      description: "Platform capabilities and technical feasibility",
      duration: "2 weeks",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "AR technology research and analysis"
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "AR interaction design and user flow mapping",
      duration: "4 weeks",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "AR concept design and wireframing"
    },
    {
      icon: Code,
      title: "Prototype Development",
      description: "AR app development and 3D model creation",
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "AR prototype development process"
    },
    {
      icon: TestTube,
      title: "User Testing",
      description: "AR experience testing and iteration",
      duration: "3 weeks",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "AR user testing sessions"
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "App store optimization and launch",
      duration: "2 weeks",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "AR app deployment and launch"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AR Development Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive 22-week journey from user research to AR app deployment
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline path */}
            <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
            
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
                  <Card className="relative z-10 hover:shadow-lg transition-all duration-300 border-primary/20 group">
                    <CardContent className="p-4">
                      <div className="mb-3 h-32 overflow-hidden rounded-lg">
                        <EditableImage
                          src={phase.image}
                          alt={phase.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          fallbackSrc="/placeholder.svg"
                        />
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-primary/10 p-2 rounded-lg mb-3 flex justify-center">
                          <phase.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-sm font-semibold mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {phase.description}
                        </p>
                        <div className="bg-gradient-to-r from-primary to-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                          {phase.duration}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background z-20 shadow-lg" />
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
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
                
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 border-primary/20 group">
                  <CardContent className="p-6">
                    <div className="mb-4 h-40 overflow-hidden rounded-lg">
                      <EditableImage
                        src={phase.image}
                        alt={phase.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {phase.description}
                    </p>
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-medium inline-block">
                      {phase.duration}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Connecting line */}
              {index < phases.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary to-accent opacity-30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Lightbulb, Palette, Code, TestTube, Rocket } from 'lucide-react';
import { EditableImage } from '@/components/ui/editable-image';
const ProcessTimeline = () => {
  const phases = [{
    phase: "Discovery",
    icon: Search,
    duration: "2 weeks",
    deliverables: ["Stakeholder interviews", "Competitive analysis", "Current state audit"],
    color: "blue",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }, {
    phase: "Research",
    icon: Lightbulb,
    duration: "3 weeks",
    deliverables: ["User interviews", "Kitchen observations", "Pain point mapping"],
    color: "green",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }, {
    phase: "Design",
    icon: Palette,
    duration: "4 weeks",
    deliverables: ["Design system", "Wireframes", "High-fidelity prototypes"],
    color: "purple",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }, {
    phase: "Development",
    icon: Code,
    duration: "6 weeks",
    deliverables: ["Component library", "Frontend implementation", "API integration"],
    color: "orange",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }, {
    phase: "Testing",
    icon: TestTube,
    duration: "2 weeks",
    deliverables: ["Usability testing", "Kitchen staff feedback", "Performance optimization"],
    color: "red",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }, {
    phase: "Launch",
    icon: Rocket,
    duration: "1 week",
    deliverables: ["Deployment", "Staff training", "Success metrics tracking"],
    color: "emerald",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }];
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      green: "bg-green-50 text-green-700 border-green-200",
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      orange: "bg-orange-50 text-orange-700 border-orange-200",
      red: "bg-red-50 text-red-700 border-red-200",
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-200"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-50 text-gray-700 border-gray-200";
  };
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <span data-lovable-editable="welbilt-process-badge">🔄 Design Process</span>
          </Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-6" data-lovable-editable="welbilt-process-title">
            From Research to Launch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-lovable-editable="welbilt-process-description">
            A systematic approach that transformed complex kitchen operations into an intuitive digital experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full top-0"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isEven = index % 2 === 0;
            return <motion.div key={index} initial={{
              opacity: 0,
              x: isEven ? -50 : 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content Card */}
                  <div className="flex-1 max-w-lg">
                    <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${getColorClasses(phase.color)}`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900" data-lovable-editable={`welbilt-phase-${index}-title`}>{phase.phase}</h3>
                          
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, deliverableIndex) => <li key={deliverableIndex} className="text-gray-600 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span data-lovable-editable={`welbilt-phase-${index}-deliverable-${deliverableIndex}`}>{deliverable}</span>
                          </li>)}
                      </ul>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-white border-4 border-primary rounded-full shadow-sm z-10">
                    <Icon className="text-primary" size={20} />
                  </div>

                  {/* Image */}
                  <div className="flex-1 max-w-lg">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-sm">
                      <EditableImage src={phase.image} alt={`${phase.phase} phase`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-lovable-editable="welbilt-stat-1-value">18</div>
              <div className="text-gray-600" data-lovable-editable="welbilt-stat-1-label">Total Weeks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-lovable-editable="welbilt-stat-2-value">25+</div>
              <div className="text-gray-600" data-lovable-editable="welbilt-stat-2-label">Stakeholders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-lovable-editable="welbilt-stat-3-value">150+</div>
              <div className="text-gray-600" data-lovable-editable="welbilt-stat-3-label">User Insights</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-lovable-editable="welbilt-stat-4-value">50+</div>
              <div className="text-gray-600" data-lovable-editable="welbilt-stat-4-label">Components Built</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ProcessTimeline;

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Lightbulb, Palette, Code, TestTube, Rocket } from 'lucide-react';
import { EditableImage } from '@/components/ui/editable-image';

const ProcessTimeline = () => {
  const phases = [{
    phase: "Requirements Overload",
    icon: Search,
    duration: "Evolving Timeline",
    deliverables: ["Dynamic Requirements by multiple stakeholders", "Complete revamp + Legacy website support", "Competitive analysis + Brand guidelines", "Current state audit"],
    color: "warm-terracotta",
    image: "/lovable-uploads/WB01.webp"
  }, {
    phase: "Incremental Research",
    icon: Lightbulb,
    duration: "6 weeks + 6 weeks",
    deliverables: ["Define market standards", "Incorporate existing user demands", "Pain point mapping", "Architecture + Visual language"],
    color: "warm-golden",
    image: "/lovable-uploads/WB2.webp" 
  }, {
    phase: "Design in Phases",
    icon: Palette,
    duration: "50 weeks",
    deliverables: ["Design system with customized components", "Detailed Wireframes in 4 breakpoints", "High-fidelity prototypes and documentation"],
    color: "warm-sage",
    image: "/lovable-uploads/WB.webp"
  }, {
    phase: "Development",
    icon: Code,
    duration: "Parallel timeline",
    deliverables: ["Dev connect", "Validate frontend implementation", "SPRINT management"],
    color: "warm-rust",
    image: "/lovable-uploads/WB4.webp"
  }, {
    phase: "Testing",
    icon: TestTube,
    duration: "8 weeks",
    deliverables: ["Usability testing", "Brand feedback", "Customer Feedback", "Performance optimization"],
    color: "warm-terracotta",
    image: "/lovable-uploads/WBtest.webp"
  }, {
    phase: "Launch",
    icon: Rocket,
    duration: "4 week",
    deliverables: ["Deployment", "NAFEM 2025 Showcase", "Success metrics tracking"],
    color: "warm-golden",
    image: "/lovable-uploads/WB6.webp"
  }];

  const getColorClasses = (color: string) => {
    const colorMap = {
      "warm-terracotta": {
        card: "bg-gradient-to-br from-warm-terracotta-light/10 to-warm-terracotta-light/5 border-warm-terracotta-light/30 hover:border-warm-terracotta-light/50",
        icon: "bg-gradient-to-br from-warm-terracotta to-warm-terracotta-hover text-white",
        dot: "bg-warm-terracotta border-warm-terracotta-light/20"
      },
      "warm-golden": {
        card: "bg-gradient-to-br from-warm-golden-light/10 to-warm-golden-light/5 border-warm-golden-light/30 hover:border-warm-golden-light/50",
        icon: "bg-gradient-to-br from-warm-golden to-warm-golden-hover text-white",
        dot: "bg-warm-golden border-warm-golden-light/20"
      },
      "warm-sage": {
        card: "bg-gradient-to-br from-warm-sage-light/15 to-warm-sage-light/5 border-warm-sage-light/30 hover:border-warm-sage-light/50",
        icon: "bg-gradient-to-br from-warm-sage to-warm-sage/90 text-white",
        dot: "bg-warm-sage border-warm-sage-light/20"
      },
      "warm-rust": {
        card: "bg-gradient-to-br from-warm-rust-light/15 to-warm-rust-light/5 border-warm-rust-light/30 hover:border-warm-rust-light/50",
        icon: "bg-gradient-to-br from-warm-rust to-warm-rust/90 text-white",
        dot: "bg-warm-rust border-warm-rust-light/20"
      }
    };
    return colorMap[color as keyof typeof colorMap] || {
      card: "bg-white border-gray-200 hover:border-gray-300",
      icon: "bg-gray-600 text-white",
      dot: "bg-primary border-primary/20"
    };
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
          <Badge variant="secondary" className="mb-4 bg-warm-terracotta-light/20 text-warm-terracotta border-warm-terracotta-light/40">
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
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-warm-terracotta-light/40 via-warm-golden-light/40 to-warm-sage-light/40 h-full top-0"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isEven = index % 2 === 0;
            const colorClasses = getColorClasses(phase.color);
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
                  {/* Content Card - Made narrower */}
                  <div className="flex-1 max-w-sm">
                    <Card className={`p-6 ${colorClasses.card} shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClasses.icon} shadow-lg`}>
                          <Icon size={24} />
                        </div>
                        <div>
                           <h3 className="text-xl font-semibold text-gray-900" data-lovable-editable={`welbilt-phase-${index}-title`}>{phase.phase}</h3>
                           <span className="text-sm text-gray-500" data-lovable-editable={`welbilt-phase-${index}-duration`}>{phase.duration}</span>
                         </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, deliverableIndex) => <li key={deliverableIndex} className="text-gray-600 text-sm flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${phase.color === 'warm-terracotta' ? 'bg-warm-terracotta' : phase.color === 'warm-golden' ? 'bg-warm-golden' : phase.color === 'warm-sage' ? 'bg-warm-sage' : 'bg-warm-rust'}`}></div>
                            <span data-lovable-editable={`welbilt-phase-${index}-deliverable-${deliverableIndex}`}>{deliverable}</span>
                          </li>)}
                      </ul>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className={`hidden lg:flex items-center justify-center w-14 h-14 ${colorClasses.dot} rounded-full shadow-lg border-4 border-white z-10`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Image - Made bigger */}
                  <div className="flex-1 max-w-2xl">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center min-h-[300px] border border-gray-200/50">
                      <EditableImage 
                        src={phase.image} 
                        alt={`${phase.phase} phase`} 
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300" 
                        style={{ width: 'auto', height: 'auto' }}
                      />
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
      }} className="mt-16 bg-gradient-to-r from-white to-warm-terracotta-light/5 rounded-2xl p-8 border border-warm-terracotta-light/20 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-warm-terracotta mb-2" data-lovable-editable="welbilt-stat-1-value">1.5</div>
              <div className="text-gray-600" data-lovable-editable="welbilt-stat-1-label">Years Duration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warm-golden mb-2" data-lovable-editable="welbilt-stat-2-value">10+</div>
              <div className="text-gray-600" data-lovable-editable="welbilt-stat-2-label">Stakeholders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warm-sage mb-2" data-lovable-editable="welbilt-stat-3-value">$1,28,000</div>
              <div className="text-gray-600" data-lovable-editable="welbilt-stat-3-label">Earned Revenue</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warm-rust mb-2" data-lovable-editable="welbilt-stat-4-value">200+</div>
              <div className="text-gray-600" data-lovable-editable="welbilt-stat-4-label">Components Built</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default ProcessTimeline;

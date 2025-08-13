import { motion } from 'framer-motion';
import { Target, Users, BarChart, MessageSquare, Lightbulb, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
const methodologies = [{
  icon: Users,
  title: "User Research",
  description: "Conducted in-depth interviews with kitchen staff and managers to understand pain points and workflows",
  connection: "research-q1"
}, {
  icon: BarChart,
  title: "Usability Analysis",
  description: "Evaluated existing system performance and identified critical inefficiencies in daily operations",
  connection: "research-q2"
}, {
  icon: MessageSquare,
  title: "Stakeholder Workshops",
  description: "Facilitated collaborative sessions with development teams and business stakeholders",
  connection: "research-q3"
}, {
  icon: Lightbulb,
  title: "Design Thinking",
  description: "Applied systematic design methodology to transform insights into actionable solutions",
  connection: "research-q4"
}];
export const ObjectiveMethodologies = () => {
  return <section id="objective" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="max-w-6xl mx-auto">
          <Accordion type="single" defaultValue="objective" collapsible className="space-y-6">
            {/* Objective Section */}
            <AccordionItem value="objective" className="border-border rounded-2xl bg-card">
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground" data-lovable-editable="welbilt-objective-title">Project Objective</h2>
                    <p className="text-muted-foreground mt-1" data-lovable-editable="welbilt-objective-subtitle">Transform kitchen management through systematic design</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <div className="bg-muted rounded-xl p-6 border-border border">
                  <p className="text-foreground leading-relaxed text-lg" data-lovable-editable="welbilt-objective-description">
                    Create a comprehensive design system and platform redesign for Welbilt's kitchen management solution 
                    that addresses inconsistent user experiences, accelerates development cycles, and improves operational 
                    efficiency for commercial kitchen staff while maintaining scalability for future product evolution.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-card rounded-lg border-border border">
                      <div className="text-2xl font-bold text-blue-600" data-lovable-editable="welbilt-objective-metric-1-value">35%</div>
                      <div className="text-sm text-muted-foreground" data-lovable-editable="welbilt-objective-metric-1-label">Development Speed</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border-border border">
                      <div className="text-2xl font-bold text-blue-600" data-lovable-editable="welbilt-objective-metric-2-value">50+</div>
                      <div className="text-sm text-muted-foreground" data-lovable-editable="welbilt-objective-metric-2-label">Design Components</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border-border border">
                      <div className="text-2xl font-bold text-blue-600" data-lovable-editable="welbilt-objective-metric-3-value">85%</div>
                      <div className="text-sm text-muted-foreground" data-lovable-editable="welbilt-objective-metric-3-label">User Satisfaction</div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Methodologies Section */}
            
          </Accordion>
        </motion.div>
      </div>
    </section>;
};
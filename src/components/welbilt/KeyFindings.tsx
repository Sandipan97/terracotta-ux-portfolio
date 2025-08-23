import { motion } from 'framer-motion';
import { TrendingUp, FileImage, ChevronDown, ArrowRight, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const findings = [{
  id: 'finding-1',
  title: "Critical Usability Gaps in Kitchen Operations",
  type: "challenge",
  icon: AlertTriangle,
  summary: "65% of kitchen errors traced to interface design issues",
  details: "Our analysis revealed that inconsistent button placements, unclear visual hierarchy, and lack of contextual feedback were causing significant operational inefficiencies during peak service hours.",
  visualNote: "Heat map analysis of user interactions",
  impact: "60% error reduction potential",
  solutionAnchor: "detailed-interface",
  color: "warm-rust"
}, {
  id: 'finding-2',
  title: "Design System Fragmentation Impact",
  type: "insight",
  icon: Zap,
  summary: "Development teams 65% slower without design standards",
  details: "Developers spent excessive time recreating components and resolving design inconsistencies. The lack of a unified design system created technical debt and slowed feature delivery significantly.",
  visualNote: "Development velocity comparison chart",
  impact: "35% development acceleration achieved",
  solutionAnchor: "detailed-design-system",
  color: "warm-golden"
}, {
  id: 'finding-3',
  title: "Communication Bottlenecks in Kitchen Workflow",
  type: "opportunity",
  icon: CheckCircle,
  summary: "Real-time updates could eliminate 30% of order delays",
  details: "Kitchen staff relied on verbal communication and manual status updates, leading to coordination issues. Implementing visual status indicators and automated notifications showed immediate improvement potential.",
  visualNote: "Kitchen workflow timing analysis",
  impact: "40% time savings in team coordination",
  solutionAnchor: "detailed-collaboration",
  color: "warm-sage"
}];
export const KeyFindings = () => {
  const scrollToSolution = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const getColorScheme = (color: string) => {
    switch (color) {
      case 'warm-rust':
        return {
          bg: 'bg-gradient-to-br from-warm-rust-light/15 to-warm-rust-light/5',
          border: 'border-warm-rust-light/40',
          icon: 'bg-gradient-to-br from-warm-rust to-warm-rust/90',
          text: 'text-warm-rust',
          badge: 'bg-warm-rust-light/20 text-warm-rust border-warm-rust-light/40'
        };
      case 'warm-golden':
        return {
          bg: 'bg-gradient-to-br from-warm-golden-light/15 to-warm-golden-light/5',
          border: 'border-warm-golden-light/40',
          icon: 'bg-gradient-to-br from-warm-golden to-warm-golden-hover',
          text: 'text-warm-golden',
          badge: 'bg-warm-golden-light/20 text-warm-golden border-warm-golden-light/40'
        };
      case 'warm-sage':
        return {
          bg: 'bg-gradient-to-br from-warm-sage-light/15 to-warm-sage-light/5',
          border: 'border-warm-sage-light/40',
          icon: 'bg-gradient-to-br from-warm-sage to-warm-sage/90',
          text: 'text-warm-sage',
          badge: 'bg-warm-sage-light/20 text-warm-sage border-warm-sage-light/40'
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-gray-200',
          icon: 'bg-gray-500',
          text: 'text-gray-600',
          badge: 'bg-gray-50 text-gray-600 border-gray-200'
        };
    }
  };
  return;
};
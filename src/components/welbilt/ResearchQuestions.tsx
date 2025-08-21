import { motion } from 'framer-motion';
import { Search, ArrowRight, HelpCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const researchQuestions = [{
  id: 'q1',
  number: '01',
  question: "How can we reduce cognitive load for kitchen staff during peak hours?",
  methodology: "User Research & Workflow Analysis",
  insight: "Staff spend 40% more time navigating complex menus during rush periods",
  solutionAnchor: "detailed-workflows",
  methodIcon: Target
}, {
  id: 'q2',
  number: '02',
  question: "What design patterns cause the most confusion in kitchen equipment management?",
  methodology: "Usability Analysis & Error Tracking",
  insight: "Inconsistent button placements led to 60% of operational errors",
  solutionAnchor: "detailed-interface",
  methodIcon: Search
}, {
  id: 'q3',
  number: '03',
  question: "How can real-time communication improve kitchen coordination?",
  methodology: "Stakeholder Workshops & Observation",
  insight: "Miscommunication causes 30% of order delays and quality issues",
  solutionAnchor: "detailed-collaboration",
  methodIcon: HelpCircle
}, {
  id: 'q4',
  number: '04',
  question: "What development inefficiencies stem from design inconsistencies?",
  methodology: "Design Thinking & Developer Interviews",
  insight: "Teams spent 65% more time on design implementation without standards",
  solutionAnchor: "detailed-design-system",
  methodIcon: Target
}];
export const ResearchQuestions = () => {
  const scrollToSolution = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return;
};
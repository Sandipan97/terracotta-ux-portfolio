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
  return;
};
export default BeforeAfterShowcase;
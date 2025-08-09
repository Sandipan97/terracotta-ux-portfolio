
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';

interface Competency {
  name: string;
  level: number;
  projects: string[];
  category: 'strategic' | 'design' | 'research' | 'technical';
}

const competencies: Competency[] = [
  {
    name: "Design Strategy",
    level: 95,
    projects: ["LG Cyclops AR", "Welbilt Kitchen"],
    category: "strategic"
  },
  {
    name: "User Research",
    level: 90,
    projects: ["O2C Platform", "Dripometer"],
    category: "research"
  },
  {
    name: "Design Systems",
    level: 85,
    projects: ["PG Datalogger", "Toy Anatomy"],
    category: "design"
  },
  {
    name: "Product Management",
    level: 80,
    projects: ["Farm Monitoring", "Gharana Food"],
    category: "strategic"
  },
  {
    name: "Prototyping",
    level: 88,
    projects: ["Cyclops AR Manual"],
    category: "technical"
  },
  {
    name: "Cross-functional Leadership",
    level: 92,
    projects: ["Multiple Enterprise Projects"],
    category: "strategic"
  }
];

// Static class mappings for Tailwind visibility
const getCategoryClasses = (category: string) => {
  switch (category) {
    case 'strategic':
      return {
        bg: 'bg-warm-terracotta/10',
        text: 'text-warm-terracotta',
        border: 'border-warm-terracotta/20'
      };
    case 'design':
      return {
        bg: 'bg-warm-rust/10',
        text: 'text-warm-rust',
        border: 'border-warm-rust/20'
      };
    case 'research':
      return {
        bg: 'bg-warm-golden/10',
        text: 'text-warm-golden',
        border: 'border-warm-golden/20'
      };
    case 'technical':
      return {
        bg: 'bg-warm-sage/10',
        text: 'text-warm-sage',
        border: 'border-warm-sage/20'
      };
    default:
      return {
        bg: 'bg-muted/10',
        text: 'text-muted-foreground',
        border: 'border-muted/20'
      };
  }
};

const CompetencyMatrix = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <Card className="bg-card backdrop-blur-md shadow-xl border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-xl">Professional Competency Matrix</CardTitle>
          <p className="text-muted-foreground">Evidence-based skill assessment with project examples</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencies.map((competency, index) => {
              const categoryClasses = getCategoryClasses(competency.category);
              
              return (
                <motion.div
                  key={competency.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{competency.name}</h4>
                    <Badge 
                      variant="secondary" 
                      className={`${categoryClasses.bg} ${categoryClasses.text} ${categoryClasses.border}`}
                    >
                      {competency.level}%
                    </Badge>
                  </div>
                  <Progress 
                    value={competency.level} 
                    className="h-2 bg-muted"
                  />
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Evidence: </span>
                    {competency.projects.join(', ')}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CompetencyMatrix;

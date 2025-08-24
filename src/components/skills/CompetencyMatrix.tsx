
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
    projects: ["Cyclops AR Manual", "Welbilt Kitchen", "O2C Platform", "Farm Monitoring"],
    category: "strategic"
  },
  {
    name: "User Research",
    level: 90,
    projects: ["O2C Platform", "Dripometer", "Farm Monitoring"],
    category: "research"
  },
  {
    name: "Design Systems",
    level: 85,
    projects: ["PG Datalogger", "Welbilt Kitchen"],
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
    level: 95,
    projects: ["PG Datalogger", "Welbilt Kitchen", "Cyclops AR Manual"],
    category: "technical"
  },
  {
    name: "Cross-functional Leadership",
    level: 90,
    projects: ["Multiple Enterprise Projects"],
    category: "strategic"
  }
];

// Static class mappings for Tailwind visibility
const getCategoryClasses = (category: string) => {
  switch (category) {
    case 'strategic':
      return {
        bg: 'bg-warm-terracotta/15 dark:bg-warm-terracotta-light/10',
        text: 'text-warm-terracotta dark:text-warm-terracotta-light',
        border: 'border-warm-terracotta/30 dark:border-warm-terracotta-light/20'
      };
    case 'design':
      return {
        bg: 'bg-warm-rust/15 dark:bg-warm-rust-light/10',
        text: 'text-warm-rust dark:text-warm-rust-light',
        border: 'border-warm-rust/30 dark:border-warm-rust-light/20'
      };
    case 'research':
      return {
        bg: 'bg-warm-golden/15 dark:bg-warm-golden-light/10',
        text: 'text-warm-golden dark:text-warm-golden-light',
        border: 'border-warm-golden/30 dark:border-warm-golden-light/20'
      };
    case 'technical':
      return {
        bg: 'bg-warm-sage/15 dark:bg-warm-sage-light/10',
        text: 'text-warm-sage dark:text-warm-sage-light',
        border: 'border-warm-sage/30 dark:border-warm-sage-light/20'
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
      <Card className="bg-card/80 dark:bg-card/90 backdrop-blur-md shadow-xl border-warm-terracotta/20 dark:border-warm-terracotta-light/10">
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

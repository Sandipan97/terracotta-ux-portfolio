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

const categoryColors = {
  strategic: 'warm-terracotta',
  design: 'warm-rust',
  research: 'warm-golden',
  technical: 'warm-sage'
};

const CompetencyMatrix = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <Card className="bg-white/95 backdrop-blur-md shadow-xl border border-warm-terracotta/20">
        <CardHeader>
          <CardTitle className="text-warm-clay text-xl">Professional Competency Matrix</CardTitle>
          <p className="text-warm-clay/70">Evidence-based skill assessment with project examples</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-warm-clay">{competency.name}</h4>
                  <Badge 
                    variant="secondary" 
                    className={`bg-${categoryColors[competency.category]}/10 text-${categoryColors[competency.category]} border-${categoryColors[competency.category]}/20`}
                  >
                    {competency.level}%
                  </Badge>
                </div>
                <Progress 
                  value={competency.level} 
                  className="h-2 bg-warm-terracotta/10"
                />
                <div className="text-sm text-warm-clay/60">
                  <span className="font-medium">Evidence: </span>
                  {competency.projects.join(', ')}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CompetencyMatrix;
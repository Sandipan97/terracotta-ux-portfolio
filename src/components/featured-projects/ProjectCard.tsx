
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  date?: string;
  slug?: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
  variants: any;
}

const ProjectCard = ({ project, index, variants }: ProjectCardProps) => {
  const projectLink = project.slug ? `/projects/${project.slug}` : `/projects/${project.id}`;

  return (
    <motion.div variants={variants}>
      <Link to={projectLink}>
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-full"
        >
          <Card className="overflow-hidden h-full group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 dark-glow-card">
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <Badge 
                className="absolute top-3 left-3 bg-bengali-terracotta text-white shadow-lg"
              >
                {project.category}
              </Badge>
              {project.date && (
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 bg-background/90 text-foreground shadow-lg"
                >
                  {project.date}
                </Badge>
              )}
            </div>
            <CardContent className="p-6">
              <motion.h3 
                className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-bengali-terracotta transition-colors duration-300"
                layoutId={`title-${project.id}`}
              >
                {project.title}
              </motion.h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              {project.results && (
                <motion.div 
                  className="flex items-center text-sm text-bengali-terracotta font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mr-2">📈</span>
                  {project.results}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;


import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  route?: string;
  index: number;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  image, 
  category, 
  tags, 
  route,
  index 
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card 
        className="group h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden dark-glow-card"
        onClick={handleCardClick}
      >
        <CardContent className="p-0 h-full flex flex-col">
          {/* Image container with mobile-responsive height */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <EditableImage
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              fallbackSrc="/placeholder.svg"
              priority={index < 3}
            />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <Badge 
                variant="secondary" 
                className="bg-background/80 backdrop-blur-sm text-xs font-medium border-border/50"
              >
                {category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 xs:p-6 flex-1 flex flex-col">
            <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-2 xs:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {title}
            </h3>
            
            <p className="text-muted-foreground text-sm xs:text-base leading-relaxed mb-3 xs:mb-4 flex-1 line-clamp-3">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 xs:gap-2">
              {tags.slice(0, 3).map((tag, tagIndex) => (
                <Badge 
                  key={tagIndex}
                  variant="outline" 
                  className="text-xs px-2 py-0.5 border-border/60 hover:border-primary/40 transition-colors duration-300"
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge 
                  variant="outline" 
                  className="text-xs px-2 py-0.5 border-border/60 text-muted-foreground"
                >
                  +{tags.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

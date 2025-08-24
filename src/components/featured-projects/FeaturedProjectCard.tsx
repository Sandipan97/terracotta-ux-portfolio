import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';
import { Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  date?: string;
  slug?: string;
  videoThumbnail?: string;
};

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
  variants: any;
}

const FeaturedProjectCard = ({ project, index, variants }: FeaturedProjectCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Projects that should show "Coming Soon" toast instead of navigating
  const comingSoonProjects = ['o2c-project', 'toy-anatomy'];

  const handleCardClick = () => {
    if (comingSoonProjects.includes(project.slug || '')) {
      toast({
        title: "Stay Tuned! Coming Soon",
        description: "This project page is currently under development.",
      });
      return;
    }

    if (project.slug) {
      navigate(`/projects/${project.slug}`);
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  // Convert project data to tags for display
  const tags = [project.category];
  if (project.results) {
    tags.push('Impact Driven');
  }

  // Use video thumbnail if available, otherwise fallback to image
  const displayImage = project.videoThumbnail || project.image;
  const hasVideo = !!project.videoThumbnail;

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card 
        className="group h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden dark-glow-card"
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View project: ${project.title}`}
      >
        <CardContent className="p-0 h-full flex flex-col">
          {/* Image container with mobile-responsive height */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <EditableImage
              src={displayImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              fallbackSrc={project.image}
              priority={index < 3 ? "high" : "medium"}
            />
            
            {/* Video Play Icon Overlay */}
            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            )}
            
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <Badge 
                variant="secondary" 
                className="bg-background/80 backdrop-blur-sm text-xs font-medium border-border/50"
              >
                {project.category}
              </Badge>
            </div>

            {/* Video indicator badge */}
            {hasVideo && (
              <div className="absolute top-3 right-3">
                <Badge 
                  variant="secondary" 
                  className="bg-primary/80 text-primary-foreground backdrop-blur-sm text-xs font-medium border-primary/50"
                >
                  <Play className="w-3 h-3 mr-1" />
                  Video
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 xs:p-6 flex-1 flex flex-col">
            <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-2 xs:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm xs:text-base leading-relaxed mb-3 xs:mb-4 flex-1 line-clamp-3">
              {project.description}
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
              {project.results && (
                <Badge 
                  variant="outline" 
                  className="text-xs px-2 py-0.5 border-border/60 text-muted-foreground"
                >
                  Results Available
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturedProjectCard;

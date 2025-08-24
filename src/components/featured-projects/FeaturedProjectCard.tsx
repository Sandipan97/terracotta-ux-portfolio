
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

  // Projects that should show "Coming Soon" banner and be non-clickable
  const comingSoonProjects = ['gharana-food-delivery', 'o2c-project', 'toy-anatomy'];
  const isComingSoon = comingSoonProjects.includes(project.slug || '');

  const handleCardClick = () => {
    // Don't navigate if it's a coming soon project
    if (isComingSoon) {
      return;
    }

    if (project.slug) {
      navigate(`/projects/${project.slug}`);
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isComingSoon) {
      return;
    }

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
      whileHover={!isComingSoon ? { y: -8, scale: 1.02 } : {}}
      className="h-full"
    >
      <Card 
        className={`group h-full bg-card/60 backdrop-blur-sm border-border/50 transition-all duration-500 overflow-hidden dark-glow-card ${
          isComingSoon 
            ? 'cursor-not-allowed opacity-90' 
            : 'hover:border-primary/30 cursor-pointer'
        }`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        role={isComingSoon ? "presentation" : "button"}
        tabIndex={isComingSoon ? -1 : 0}
        aria-label={isComingSoon ? `${project.title} - Coming Soon` : `View project: ${project.title}`}
      >
        <CardContent className="p-0 h-full flex flex-col">
          {/* Image container with responsive height */}
          <div className="relative h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
            <EditableImage
              src={displayImage}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                !isComingSoon ? 'group-hover:scale-110' : ''
              }`}
              fallbackSrc={project.image}
              priority={index < 3 ? "high" : "medium"}
            />
            
            {/* Coming Soon Banner */}
            {isComingSoon && (
              <div className="absolute inset-0 z-20">
                {/* Banner Ribbon */}
                <div className="absolute top-3 sm:top-4 -right-6 sm:-right-8 transform rotate-12 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white font-bold text-xs sm:text-sm px-8 sm:px-12 py-1.5 sm:py-2 shadow-lg">
                  <motion.span
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 10px rgba(255,255,255,0.8)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    COMING SOON!
                  </motion.span>
                </div>
                
                {/* Overlay for slight dimming */}
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
              </div>
            )}
            
            {/* Video Play Icon Overlay */}
            {hasVideo && !isComingSoon && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            )}
            
            {/* Category badge */}
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
              <Badge 
                variant="secondary" 
                className="bg-background/80 backdrop-blur-sm text-xs sm:text-sm font-medium border-border/50 px-2 sm:px-2.5 py-0.5 sm:py-1"
              >
                {project.category}
              </Badge>
            </div>

            {/* Video indicator badge */}
            {hasVideo && !isComingSoon && (
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                <Badge 
                  variant="secondary" 
                  className="bg-primary/80 text-primary-foreground backdrop-blur-sm text-xs sm:text-sm font-medium border-primary/50 px-2 sm:px-2.5 py-0.5 sm:py-1"
                >
                  <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                  Video
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col">
            <h3 className={`font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-2 sm:mb-3 md:mb-4 transition-colors duration-300 line-clamp-2 leading-tight ${
              !isComingSoon ? 'group-hover:text-primary' : ''
            }`}>
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-5 flex-1 line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
              {isComingSoon ? (
                <Badge 
                  variant="outline" 
                  className="text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 sm:py-1 border-red-500/60 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20"
                >
                  Coming Soon
                </Badge>
              ) : (
                <>
                  {tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline" 
                      className="text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 sm:py-1 border-border/60 hover:border-primary/40 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.results && (
                    <Badge 
                      variant="outline" 
                      className="text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 sm:py-1 border-border/60 text-muted-foreground"
                    >
                      Results Available
                    </Badge>
                  )}
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturedProjectCard;

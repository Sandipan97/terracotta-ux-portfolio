
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { EditableImage } from '@/components/ui/editable-image';

type Testimonial = {
  quote: string;
  author: string;
  title: string;
  image?: string;
};

interface ProjectTestimonialProps {
  testimonial: Testimonial;
}

const ProjectTestimonial = ({ testimonial }: ProjectTestimonialProps) => {
  return (
    <section className="py-12 xs:py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(249,211,66)_1px,_transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-background/60 backdrop-blur-sm p-6 xs:p-8 md:p-10 rounded-2xl shadow-xl border border-border/50 relative dark-glow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            boxShadow: "0 25px 50px -10px rgba(0, 0, 0, 0.1)",
            y: -5
          }}
        >
          {/* Quote icon */}
          <div className="absolute -top-4 left-8">
            <div className="bg-bengali-terracotta p-3 rounded-full shadow-lg dark-glow-subtle">
              <Quote size={20} className="text-white" />
            </div>
          </div>

          {/* Testimonial content */}
          <div className="pt-6">
            <blockquote 
              className="text-foreground/80 text-sm xs:text-base md:text-lg italic mb-6 xs:mb-8 leading-relaxed text-center"
              data-lovable-editable="true"
              data-lovable-key="project-testimonial-quote-text"
              data-lovable-path="project.testimonial.quote"
            >
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <Avatar className="w-12 h-12 xs:w-16 xs:h-16 border-2 border-bengali-terracotta/20 shadow-lg dark-glow-image">
                <EditableImage 
                  src={testimonial.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                  fallbackSrc="/placeholder.svg"
                />
                <AvatarFallback className="bg-bengali-terracotta/20 text-bengali-terracotta font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="ml-4 text-center">
                <div 
                  className="font-semibold text-sm xs:text-base text-foreground"
                  data-lovable-editable="true"
                  data-lovable-key="project-testimonial-author-name"
                  data-lovable-path="project.testimonial.author"
                >
                  {testimonial.author}
                </div>
                <div 
                  className="text-muted-foreground text-xs xs:text-sm"
                  data-lovable-editable="true"
                  data-lovable-key="project-testimonial-author-title"
                  data-lovable-path="project.testimonial.authorTitle"
                >
                  {testimonial.title}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTestimonial;

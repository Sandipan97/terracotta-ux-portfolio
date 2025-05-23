
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
    <section className="py-12 xs:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto bg-white p-6 xs:p-8 rounded-lg shadow-lg border-l-4 border-bengali-mustard backdrop-blur-sm border border-white/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
            y: -5
          }}
        >
          <blockquote className="text-bengali-dark/80 text-sm xs:text-base md:text-lg italic mb-6">
            "{testimonial.quote}"
          </blockquote>
          <div className="flex items-center">
            <Avatar className="w-10 h-10 xs:w-12 xs:h-12 border-2 border-bengali-terracotta/20">
              <AvatarImage src={testimonial.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"} alt={testimonial.author} />
              <AvatarFallback className="bg-bengali-terracotta/20 text-bengali-terracotta font-bold">
                {testimonial.author.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <div className="font-semibold text-sm xs:text-base text-bengali-dark">
                {testimonial.author}
              </div>
              <div className="text-bengali-dark/70 text-xs xs:text-sm">
                {testimonial.title}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTestimonial;

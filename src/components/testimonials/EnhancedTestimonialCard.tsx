import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Star, Quote, Building, User } from 'lucide-react';

interface EnhancedTestimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  image: string;
  companyLogo?: string;
  rating: number;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  projectType: string;
}

interface EnhancedTestimonialCardProps {
  testimonial: EnhancedTestimonial;
  isActive: boolean;
}

const EnhancedTestimonialCard = ({ testimonial, isActive }: EnhancedTestimonialCardProps) => {
  return (
    <motion.div
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/95 backdrop-blur-md shadow-2xl border border-warm-terracotta/20">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Author Section */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full mx-auto md:mx-0 object-cover border-4 border-warm-terracotta/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-warm-terracotta rounded-full p-1">
                  <Building className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-warm-clay">{testimonial.author}</h4>
                <p className="text-sm text-warm-clay/70">{testimonial.title}</p>
                <p className="text-sm font-medium text-warm-terracotta">{testimonial.company}</p>
                
                {/* Rating */}
                <div className="flex justify-center md:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating 
                          ? 'text-warm-golden fill-current' 
                          : 'text-warm-golden/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-start gap-2 mb-4">
                <Quote className="w-6 h-6 text-warm-terracotta flex-shrink-0 mt-1" />
                <blockquote className="text-warm-clay/80 leading-relaxed italic">
                  {testimonial.quote}
                </blockquote>
              </div>

              {/* Project Type Badge */}
              <Badge 
                variant="secondary" 
                className="mb-4 bg-warm-terracotta/10 text-warm-terracotta border-warm-terracotta/20"
              >
                {testimonial.projectType}
              </Badge>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {testimonial.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-warm-terracotta">
                      {metric.value}
                    </div>
                    <div className="text-xs text-warm-clay/60">
                      {metric.label}
                    </div>
                    <div className="text-xs text-warm-golden font-medium">
                      {metric.improvement}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedTestimonialCard;
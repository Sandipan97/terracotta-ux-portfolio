import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center">
      {/* Background shape */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-bengali-terracotta rounded-t-[50%] transform translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-slide-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-bengali-dark mb-4">
              Designing Impactful User Experiences with Research and Innovation
            </h1>
            <p className="text-lg text-bengali-dark/80 mb-8 max-w-md">
              Senior UX Designer & Researcher with 5 years of experience and a Master's in Design from IISc
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToProjects} className="bg-bengali-mustard text-bengali-dark">
                View My Work
              </Button>
              <Button variant="outline" className="border-bengali-terracotta text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Senior UX Designer and Researcher" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-bengali-mustard text-bengali-dark px-6 py-3 rounded-full font-medium">
                5+ Years Experience
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToProjects} className="text-white bg-bengali-dark/20 backdrop-blur-sm p-3 rounded-full hover:bg-bengali-dark/30 transition-colors" aria-label="Scroll to projects">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;
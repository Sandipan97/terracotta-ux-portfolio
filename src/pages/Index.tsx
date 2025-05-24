
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DesignProcess from '@/components/DesignProcess';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutPreview from '@/components/AboutPreview';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div id="hero" className="bg-background">
        <Navbar />
        <Hero />
      </div>
      <div id="design-process" className="bg-background dark:bg-background">
        <DesignProcess />
      </div>
      <div id="featured-projects" className="bg-muted/30 dark:bg-card/30">
        <FeaturedProjects />
      </div>
      <div id="about-preview" className="bg-background dark:bg-background">
        <AboutPreview />
      </div>
      <div id="skills" className="bg-muted/30 dark:bg-card/30">
        <Skills />
      </div>
      <div id="testimonials" className="bg-background dark:bg-background">
        <Testimonials />
      </div>
      <div id="contact" className="bg-muted/30 dark:bg-card/30">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

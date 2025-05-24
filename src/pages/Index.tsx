
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
    <div className="min-h-screen">
      <div id="hero">
        <Navbar />
        <Hero />
      </div>
      <div id="design-process">
        <DesignProcess />
      </div>
      <div id="featured-projects">
        <FeaturedProjects />
      </div>
      <div id="about-preview">
        <AboutPreview />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

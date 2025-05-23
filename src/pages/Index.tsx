
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DesignProcess from '@/components/DesignProcess';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutPreview from '@/components/AboutPreview';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import ContactPreview from '@/components/ContactPreview';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div id="hero">
        <Navbar />
        <Hero />
      </div>
      <DesignProcess />
      <FeaturedProjects />
      <AboutPreview />
      <Skills />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;

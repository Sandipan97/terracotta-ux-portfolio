
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutPreview from '@/components/AboutPreview';
import Testimonials from '@/components/Testimonials';
import ContactPreview from '@/components/ContactPreview';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <Testimonials />
      <ContactPreview />
      <Footer />
    </div>
  );
};

export default HomePage;

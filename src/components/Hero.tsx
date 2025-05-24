
import HeroBackground from './hero/HeroBackground';
import HeroTextContent from './hero/HeroTextContent';
import HeroProfileSection from './hero/HeroProfileSection';
import HeroScrollButton from './hero/HeroScrollButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <HeroTextContent />
          <HeroProfileSection />
        </div>

        <HeroScrollButton />
      </div>
    </section>
  );
};

export default Hero;

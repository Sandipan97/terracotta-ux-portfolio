
import HeroBackground from './hero/HeroBackground';
import HeroTextContent from './hero/HeroTextContent';
import HeroProfileSection from './hero/HeroProfileSection';
import HeroScrollButton from './hero/HeroScrollButton';
import InteractivePolkaDotBackground from './hero/InteractivePolkaDotBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dark-glow-subtle pt-16 md:pt-20">
      <HeroBackground />
      <InteractivePolkaDotBackground />

      <div className="container mx-auto px-4 md:px-6 z-10 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 items-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-6rem)]">
          <HeroTextContent />
          <HeroProfileSection />
        </div>

        <HeroScrollButton />
      </div>
    </section>
  );
};

export default Hero;

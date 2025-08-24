
import HeroBackground from './hero/HeroBackground';
import HeroTextContent from './hero/HeroTextContent';
import HeroProfileSection from './hero/HeroProfileSection';
import HeroScrollButton from './hero/HeroScrollButton';
import InteractivePolkaDotBackground from './hero/InteractivePolkaDotBackground';
import { useOptimizedImageLoading } from '@/hooks/useOptimizedImageLoading';

const Hero = () => {
  useOptimizedImageLoading();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dark-glow-subtle pt-12 md:pt-16">
      <HeroBackground />
      <InteractivePolkaDotBackground />

      <div className="container mx-auto px-3 md:px-4 lg:px-6 xl:px-8 z-10 py-4 md:py-6 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-12 items-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-4rem)]">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="w-full lg:col-span-7 xl:col-span-6 order-2 lg:order-1">
            <HeroTextContent />
          </div>
          <div className="w-full lg:col-span-5 xl:col-span-6 order-1 lg:order-2">
            <HeroProfileSection />
          </div>
        </div>

        <HeroScrollButton />
      </div>
    </section>
  );
};

export default Hero;

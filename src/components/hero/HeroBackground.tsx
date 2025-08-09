
import { useTheme } from "next-themes";
import { Waves } from "@/components/ui/waves-background";

const HeroBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/30" />
      
      <div className="absolute inset-0 opacity-30">
        <Waves
          lineColor={theme === 'dark' ? 'hsl(220, 13%, 91%)' : 'hsl(224, 71%, 4%)'}
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.95}
          tension={0.01}
        />
      </div>
    </div>
  );
};

export default HeroBackground;

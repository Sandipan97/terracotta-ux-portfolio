
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UniversalStickyNavigation from '@/components/ui/universal-sticky-navigation';
import HeroSection from '@/components/pg-datalogger/HeroSection';
import { ProjectOverview } from '@/components/pg-datalogger/ProjectOverview';
import { UXGoalsStrategy } from '@/components/pg-datalogger/UXGoalsStrategy';
import { UXAuditMethodology } from '@/components/pg-datalogger/UXAuditMethodology';
import { KeyProblems } from '@/components/pg-datalogger/KeyProblems';
import { UXSolutionsRedesign } from '@/components/pg-datalogger/UXSolutionsRedesign';
import { DesignSystemComponents } from '@/components/pg-datalogger/DesignSystemComponents';
import { MeasurableImpact } from '@/components/pg-datalogger/MeasurableImpact';
import { FutureEnhancements } from '@/components/pg-datalogger/FutureEnhancements';
import { FinalUIShowcase } from '@/components/pg-datalogger/FinalUIShowcase';

const LGCyclopsAR = () => {
  const navigationSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'goals', label: 'Goals' },
    { id: 'audit', label: 'Audit' },
    { id: 'problems', label: 'Problems' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'components', label: 'Components' },
    { id: 'impact', label: 'Impact' },
    { id: 'future', label: 'Future' },
    { id: 'showcase', label: 'Showcase' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bengali-terracotta/5 to-bengali-red/5">
      <Navbar />
      <UniversalStickyNavigation sections={navigationSections} />
      
      <main className="pt-20">
        <div id="overview">
          <HeroSection />
          <ProjectOverview />
        </div>
        <div id="goals">
          <UXGoalsStrategy />
        </div>
        <div id="audit">
          <UXAuditMethodology />
        </div>
        <div id="problems">
          <KeyProblems />
        </div>
        <div id="solutions">
          <UXSolutionsRedesign />
        </div>
        <div id="components">
          <DesignSystemComponents />
        </div>
        <div id="impact">
          <MeasurableImpact />
        </div>
        <div id="future">
          <FutureEnhancements />
        </div>
        <div id="showcase">
          <FinalUIShowcase />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LGCyclopsAR;


import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/pg-datalogger/HeroSection';
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-bengali-terracotta/5 to-bengali-red/5">
      <Navbar />
      
      <main className="pt-20">
        <HeroSection />
        <ProjectOverview />
        <UXGoalsStrategy />
        <UXAuditMethodology />
        <KeyProblems />
        <UXSolutionsRedesign />
        <DesignSystemComponents />
        <MeasurableImpact />
        <FutureEnhancements />
        <FinalUIShowcase />
      </main>
      
      <Footer />
    </div>
  );
};

export default LGCyclopsAR;

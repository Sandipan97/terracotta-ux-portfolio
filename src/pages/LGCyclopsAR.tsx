
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/pg-datalogger/HeroSection';
import { ProjectOverview } from '@/components/pg-datalogger/ProjectOverview';
import { UXGoalsStrategy } from '@/components/pg-datalogger/UXGoalsStrategy';
import { UXAuditMethodology } from '@/components/pg-datalogger/UXAuditMethodology';
import { KeyProblems } from '@/components/pg-datalogger/KeyProblems';
import { UXSolutionsRedesign } from '@/components/pg-datalogger/UXSolutionsRedesign';

const LGCyclopsAR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <HeroSection />
        <ProjectOverview />
        <UXGoalsStrategy />
        <UXAuditMethodology />
        <KeyProblems />
        <UXSolutionsRedesign />
      </main>
      
      <Footer />
    </div>
  );
};

export default LGCyclopsAR;


import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import LoadingAnimation from '@/components/LoadingAnimation';
import { useRoutePreloader } from '@/hooks/useRoutePreloader';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';

// Lazy load components with preload functions
const Index = lazy(() => import('@/pages/Index'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const GharanaFoodDelivery = lazy(() => import('@/pages/GharanaFoodDelivery'));
const CyclopsARManual = lazy(() => import('@/pages/CyclopsARManual'));
const WelbiltKitchenConnect = lazy(() => import('@/pages/WelbiltKitchenConnect'));

const DripometerProject = lazy(() => import('@/pages/DripometerProject'));
const ToyAnatomyProject = lazy(() => import('@/pages/ToyAnatomyProject'));
const O2CProject = lazy(() => import('@/pages/O2CProject'));
const FarmMonitoringProject = lazy(() => import('@/pages/FarmMonitoringProject'));
const PGDataloggerProject = lazy(() => import('@/pages/PGDataloggerProject'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

// Performance wrapper component
const PerformanceWrapper = ({ children }: { children: React.ReactNode }) => {
  useRoutePreloader();
  usePerformanceOptimization();
  return <>{children}</>;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Router>
            <PerformanceWrapper>
              <div className="min-h-screen bg-background text-foreground">
                <Suspense fallback={<LoadingAnimation />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/projects/gharana-food-delivery" element={<GharanaFoodDelivery />} />
                    <Route path="/projects/welbilt-kitchen-connect" element={<WelbiltKitchenConnect />} />
                    <Route path="/projects/cyclops-ar-manual" element={<CyclopsARManual />} />
                    
                    <Route path="/projects/dripometer" element={<DripometerProject />} />
                    <Route path="/projects/toy-anatomy" element={<ToyAnatomyProject />} />
                    <Route path="/projects/o2c-project" element={<O2CProject />} />
                    <Route path="/projects/farm-monitoring" element={<FarmMonitoringProject />} />
                    <Route path="/projects/pg-datalogger" element={<PGDataloggerProject />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
                <Toaster />
              </div>
            </PerformanceWrapper>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

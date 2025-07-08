
import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import LoadingAnimation from '@/components/LoadingAnimation';

// Lazy load components
const Index = lazy(() => import('@/pages/Index'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const GharanaFoodDelivery = lazy(() => import('@/pages/GharanaFoodDelivery'));
const LGCyclopsARProject = lazy(() => import('@/pages/LGCyclopsARProject'));
const WelbiltKitchenConnect = lazy(() => import('@/pages/WelbiltKitchenConnect'));
const PGResearchRazor = lazy(() => import('@/pages/PGResearchRazor'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Router>
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
                  <Route path="/projects/lg-cyclops-ar" element={<LGCyclopsARProject />} />
                  <Route path="/projects/pg-research-razor" element={<PGResearchRazor />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Toaster />
            </div>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

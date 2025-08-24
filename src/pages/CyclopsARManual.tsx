
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Download, Smartphone, Globe, Sparkles, Cog, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ARTechnologyShowcase from "@/components/cyclops-ar/ARTechnologyShowcase";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyNavigation from '@/components/cyclops-ar/StickyNavigation';

export default function CyclopsARManual() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/projects");
  };
  
  const navigationSections = [{
    id: 'demo',
    label: 'Demo'
  }, {
    id: 'technology',
    label: 'AR Technology'
  }, {
    id: 'solution',
    label: 'Solution'
  }];

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/30">
      <Navbar />
      <StickyNavigation sections={navigationSections} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }}>
            <Button variant="ghost" onClick={handleBack} className="mb-8 hover:bg-background/50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge variant="secondary" className="mb-4">
                AR Innovation Project
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Revolutionizing Product Manuals with Augmented Reality
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                An immersive experience that simplifies setup, enhances understanding, and delights users through cutting-edge AR technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Demo
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border/50">
                <div style={{
                padding: "56.25% 0 0 0",
                position: "relative"
              }} className="rounded-xl overflow-hidden">
                <iframe 
                  src="https://player.vimeo.com/video/1112617166?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&dnt=1" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }} 
                  title="Rotate" 
                />
              </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-bounce" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo & Proof of Concept */}
      <section id="demo" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Demo & Proof of Concept</h2>
            <p className="text-muted-foreground">Real-world validation of our AR manual technology</p>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div style={{
                  padding: "56.25% 0 0 0",
                  position: "relative"
                }} className="rounded-xl overflow-hidden">
                  <iframe 
                    src="https://player.vimeo.com/video/1107501121?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&dnt=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }} 
                    title="AR video" 
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* AR Technology Showcase */}
      <div id="technology">
        <ARTechnologyShowcase />
      </div>

      {/* Solution Summary */}
      <section id="solution" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Solution Summary</h2>
            <p className="text-muted-foreground">Comprehensive AR manual capabilities</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            title: "Multilingual Support",
            icon: Globe,
            desc: "Global accessibility in multiple languages"
          }, {
            title: "Virtual Try-Before-Buy",
            icon: Sparkles,
            desc: "Experience products before purchase"
          }, {
            title: "Remote Assistance",
            icon: Heart,
            desc: "Expert help through AR guidance"
          }, {
            title: "Configuration Guide",
            icon: Cog,
            desc: "Step-by-step setup assistance"
          }].map((feature, index) => <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>;
}

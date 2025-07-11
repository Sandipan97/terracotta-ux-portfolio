import { motion } from 'framer-motion';
import { EditableImage } from '@/components/ui/editable-image';
import { Badge } from '@/components/ui/badge';

export const ProjectOverview = () => {
  return (
    <section id="overview" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-background/60 backdrop-blur-sm p-5 rounded-2xl border border-border/50 shadow-lg">
              <h3 className="text-bengali-terracotta text-sm font-medium mb-2 uppercase tracking-wide">Client</h3>
              <p className="font-semibold text-foreground">Procter & Gamble</p>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm p-5 rounded-2xl border border-border/50 shadow-lg">
              <h3 className="text-bengali-terracotta text-sm font-medium mb-2 uppercase tracking-wide">Duration</h3>
              <p className="font-semibold text-foreground">8 Weeks</p>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm p-5 rounded-2xl border border-border/50 shadow-lg">
              <h3 className="text-bengali-terracotta text-sm font-medium mb-2 uppercase tracking-wide">My Role</h3>
              <p className="font-semibold text-foreground">UX/UI Designer</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Project Overview
            </h2>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Badge className="bg-bengali-terracotta/10 text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300 border border-bengali-terracotta/20">
                Industrial UX
              </Badge>
              <Badge className="bg-bengali-terracotta/10 text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300 border border-bengali-terracotta/20">
                Data Logging
              </Badge>
              <Badge className="bg-bengali-terracotta/10 text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300 border border-bengali-terracotta/20">
                System Redesign
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6 text-lg leading-relaxed">
                  The Datalogger application is a critical tool used by P&G for device data logging and configuration. 
                  This industrial application serves as the primary interface for monitoring and managing data collection 
                  across various manufacturing processes.
                </p>
                
                <p className="mb-6 text-lg leading-relaxed">
                  The legacy system had significant usability issues, lacked modern design standards, and was prone to 
                  user errors that could impact critical operations. The outdated interface created barriers to efficient 
                  workflow and system reliability.
                </p>

                <p className="text-lg leading-relaxed">
                  This project aimed to modernize the interface, improve accessibility, enhance system feedback, 
                  and create a more intuitive user experience that would reduce errors and improve operational efficiency.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-muted/30 p-6 rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-2">Legacy Dashboard</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Cluttered layout with poor information hierarchy
                </p>
                <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Legacy UI Screenshot</span>
                </div>
              </div>

              <div className="bg-bengali-terracotta/5 p-6 rounded-xl border border-bengali-terracotta/20">
                <h4 className="font-semibold text-foreground mb-2">Redesigned Dashboard</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Clean, modern interface with clear visual hierarchy
                </p>
                <div className="bg-gradient-to-br from-bengali-terracotta/20 to-bengali-red/20 h-32 rounded-lg flex items-center justify-center border border-bengali-terracotta/30">
                  <span className="text-bengali-terracotta text-sm font-medium">Modern UI Design</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
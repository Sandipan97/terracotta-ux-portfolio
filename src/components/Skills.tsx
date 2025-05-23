
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'UX Research', level: 95, icon: '🔍' },
  { name: 'Interface Design', level: 90, icon: '🎨' },
  { name: 'Prototyping', level: 88, icon: '⚡' },
  { name: 'User Testing', level: 92, icon: '👥' },
  { name: 'Design Systems', level: 85, icon: '🔧' },
  { name: 'Accessibility', level: 87, icon: '♿' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-bengali-dark mb-4">
            Skills & Expertise
          </h2>
          <p className="text-bengali-dark/70 max-w-2xl mx-auto">
            My core competencies in UX design and research
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-lg shadow-md border border-white/60 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-4">
                  <motion.span 
                    className="text-2xl mr-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <h3 className="font-heading text-lg font-semibold text-bengali-dark">
                    {skill.name}
                  </h3>
                  <span className="ml-auto text-bengali-terracotta font-medium">
                    {skill.level}%
                  </span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="w-full"
                >
                  <Progress 
                    value={isInView ? skill.level : 0} 
                    className="h-3 bg-gray-200"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

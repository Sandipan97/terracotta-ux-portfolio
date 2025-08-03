import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollToNextSection from '@/components/ui/ScrollToNextSection';
import CategoryChips from './project-drawer/CategoryChips';
import ProjectGrid from './project-drawer/ProjectGrid';
import { projectFiles } from './project-drawer/projectData';
const ProjectDrawer = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1
  });
  const filteredFiles = selectedCategory === 'All' ? projectFiles : projectFiles.filter(file => file.category === selectedCategory);
  return;
};
export default ProjectDrawer;
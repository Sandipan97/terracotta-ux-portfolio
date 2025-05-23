
import { motion } from 'framer-motion';

export type DesignPhase = {
  id: number;
  label: string;
  description: string;
  color: string;
  illustration: JSX.Element;
};

export const designPhases: DesignPhase[] = [
  {
    id: 1,
    label: 'Research',
    description: 'User insights',
    color: 'bg-bengali-terracotta',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.circle
          cx="13"
          cy="13"
          r="9"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.path
          d="m22 22 6 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        <motion.circle
          cx="13"
          cy="13"
          r="3"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
      </svg>
    )
  },
  {
    id: 2,
    label: 'Define',
    description: 'Problem clarity',
    color: 'bg-bengali-mustard',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.path
          d="M20 4 12 28l-4-8-8-4 20-12z"
          fill="white"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.path
          d="M4 20 8 24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.circle
          cx="20"
          cy="4"
          r="2"
          fill="rgba(255,255,255,0.6)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, delay: 1.2 }}
        />
      </svg>
    )
  },
  {
    id: 3,
    label: 'More Research',
    description: 'Deep dive',
    color: 'bg-bengali-red',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.circle
          cx="11"
          cy="11"
          r="7"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.path
          d="m18 18 4 4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        />
        <motion.path
          d="M26 10h4M28 8v4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />
        <motion.circle
          cx="11"
          cy="11"
          r="2"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.7, delay: 1.8 }}
        />
      </svg>
    )
  },
  {
    id: 4,
    label: 'Ideate',
    description: 'Creative solutions',
    color: 'bg-bengali-terracotta',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.path
          d="M12 2a10 10 0 0 0-2 19.4V25a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.6A10 10 0 0 0 12 2Z"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.path
          d="M10 27h4"
          stroke="#802f1f"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        />
        <motion.path
          d="M10 29h4"
          stroke="#802f1f"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        <motion.circle
          cx="12"
          cy="8"
          r="1"
          fill="#802f1f"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />
        <motion.path
          d="M8 8h1M15 8h1M12 4v1M12 11v1"
          stroke="rgba(128,47,31,0.6)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        />
      </svg>
    )
  },
  {
    id: 5,
    label: 'Prototype',
    description: 'Build & test',
    color: 'bg-bengali-mustard',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.rect
          x="4"
          y="6"
          width="24"
          height="16"
          rx="2"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.rect
          x="12"
          y="26"
          width="8"
          height="2"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        />
        <motion.rect
          x="8"
          y="10"
          width="6"
          height="4"
          rx="1"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.rect
          x="18"
          y="10"
          width="6"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
        <motion.rect
          x="18"
          y="13"
          width="4"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />
        <motion.circle
          cx="16"
          cy="30"
          r="2"
          fill="rgba(255,255,255,0.8)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, delay: 1.8 }}
        />
      </svg>
    )
  },
  {
    id: 6,
    label: 'Test',
    description: 'Validate ideas',
    color: 'bg-bengali-red',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.rect
          x="4"
          y="6"
          width="24"
          height="20"
          rx="2"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.path
          d="m9 16 2 2 4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
        <motion.rect
          x="19"
          y="12"
          width="6"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
        />
        <motion.rect
          x="19"
          y="15"
          width="4"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        />
        <motion.rect
          x="19"
          y="18"
          width="5"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.7 }}
        />
        <motion.circle
          cx="11"
          cy="14"
          r="1"
          fill="rgba(255,255,255,0.8)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.6, delay: 1.9 }}
        />
      </svg>
    )
  },
  {
    id: 7,
    label: 'Implement',
    description: 'Launch solution',
    color: 'bg-bengali-terracotta',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.path
          d="M6 16 16 6l10 10-4 4-6-6-6 6-4-4z"
          fill="white"
          initial={{ scale: 0, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.rect
          x="14"
          y="16"
          width="4"
          height="10"
          fill="white"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.path
          d="M10 26h12"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        />
        <motion.circle
          cx="16"
          cy="4"
          r="2"
          fill="rgba(255,255,255,0.8)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />
        <motion.path
          d="M12 8l1 1M19 8l-1 1"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1.7 }}
        />
      </svg>
    )
  }
];

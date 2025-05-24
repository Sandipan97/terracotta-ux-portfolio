
import ResearchIllustration from '@/components/design-process/illustrations/ResearchIllustration';
import DefineIllustration from '@/components/design-process/illustrations/DefineIllustration';
import MoreResearchIllustration from '@/components/design-process/illustrations/MoreResearchIllustration';
import IdeateIllustration from '@/components/design-process/illustrations/IdeateIllustration';
import PrototypeIllustration from '@/components/design-process/illustrations/PrototypeIllustration';
import TestIllustration from '@/components/design-process/illustrations/TestIllustration';
import DeployIllustration from '@/components/design-process/illustrations/DeployIllustration';

export type DesignPhase = {
  id: number;
  label: string;
  description: string;
  color: string;
  illustration: JSX.Element;
  backgroundTheme: string;
};

export const designPhases: DesignPhase[] = [
  {
    id: 1,
    label: 'Research',
    description: 'User insights',
    color: 'bg-gradient-to-br from-bengali-terracotta to-bengali-red',
    illustration: <ResearchIllustration />,
    backgroundTheme: 'research'
  },
  {
    id: 2,
    label: 'Define',
    description: 'Problem clarity',
    color: 'bg-gradient-to-br from-bengali-mustard to-yellow-400',
    illustration: <DefineIllustration />,
    backgroundTheme: 'define'
  },
  {
    id: 3,
    label: 'More Research',
    description: 'Deep dive',
    color: 'bg-gradient-to-br from-bengali-red to-red-600',
    illustration: <MoreResearchIllustration />,
    backgroundTheme: 'more-research'
  },
  {
    id: 4,
    label: 'Ideate',
    description: 'Creative solutions',
    color: 'bg-gradient-to-br from-bengali-terracotta to-orange-600',
    illustration: <IdeateIllustration />,
    backgroundTheme: 'ideate'
  },
  {
    id: 5,
    label: 'Prototype',
    description: 'Build & test',
    color: 'bg-gradient-to-br from-bengali-mustard to-amber-500',
    illustration: <PrototypeIllustration />,
    backgroundTheme: 'prototype'
  },
  {
    id: 6,
    label: 'Test',
    description: 'Validate ideas',
    color: 'bg-gradient-to-br from-bengali-red to-rose-600',
    illustration: <TestIllustration />,
    backgroundTheme: 'test'
  },
  {
    id: 7,
    label: 'Deploy',
    description: 'Launch solution',
    color: 'bg-gradient-to-br from-bengali-terracotta to-red-700',
    illustration: <DeployIllustration />,
    backgroundTheme: 'deploy'
  }
];

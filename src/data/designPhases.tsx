
import ResearchIllustration from '@/components/design-process/illustrations/ResearchIllustration';
import DefineIllustration from '@/components/design-process/illustrations/DefineIllustration';
import MoreResearchIllustration from '@/components/design-process/illustrations/MoreResearchIllustration';
import IdeateIllustration from '@/components/design-process/illustrations/IdeateIllustration';
import PrototypeIllustration from '@/components/design-process/illustrations/PrototypeIllustration';
import TestIllustration from '@/components/design-process/illustrations/TestIllustration';
import DeployIllustration from '@/components/design-process/illustrations/DeployIllustration';

export interface DesignPhase {
  id: number;
  label: string;
  description: string;
  color: string;
  illustration: React.ReactNode;
  backgroundTheme: string;
}

export const designPhases: DesignPhase[] = [
  {
    id: 1,
    label: "Research",
    description: "Understanding users and market needs through comprehensive research",
    color: "bg-gradient-to-br from-red-500 to-red-600 dark:from-red-400 dark:to-red-500",
    illustration: <ResearchIllustration />,
    backgroundTheme: "research"
  },
  {
    id: 2,
    label: "Define",
    description: "Synthesizing insights to define clear problem statements",
    color: "bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
    illustration: <DefineIllustration />,
    backgroundTheme: "define"
  },
  {
    id: 3,
    label: "More Research",
    description: "Deep diving into specific areas for targeted insights",
    color: "bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
    illustration: <MoreResearchIllustration />,
    backgroundTheme: "more-research"
  },
  {
    id: 4,
    label: "Ideate",
    description: "Generating creative solutions through structured ideation",
    color: "bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
    illustration: <IdeateIllustration />,
    backgroundTheme: "ideate"
  },
  {
    id: 5,
    label: "Prototype",
    description: "Building tangible representations of design concepts",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500",
    illustration: <PrototypeIllustration />,
    backgroundTheme: "prototype"
  },
  {
    id: 6,
    label: "Test",
    description: "Validating designs through user testing and feedback",
    color: "bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
    illustration: <TestIllustration />,
    backgroundTheme: "test"
  },
  {
    id: 7,
    label: "Deploy",
    description: "Launching the final product and monitoring performance",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500",
    illustration: <DeployIllustration />,
    backgroundTheme: "deploy"
  }
];

export interface Skill {
  label: string;
  icon: string;
  ariaLabel: string;
}

export interface SkillCategory {
  title: string;
  subtitle?: string;
  skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      {
        label: 'JavaScript',
        icon: '/skills/javascript.svg',
        ariaLabel: 'JavaScript',
      },
      {
        label: 'TypeScript',
        icon: '/skills/typescript.svg',
        ariaLabel: 'TypeScript',
      },
      {
        label: 'React Native',
        icon: '/skills/react-native.png',
        ariaLabel: 'React Native',
      },
    ],
  },
  {
    title: 'Frameworks / Libraries',
    skills: [
      {
        label: 'React',
        icon: '/skills/react.svg',
        ariaLabel: 'React',
      },
    ],
  },
  {
    title: 'Backend & Runtime',
    skills: [],
  },
  {
    title: 'Database',
    skills: [],
  },
  {
    title: 'Developer Tools',
    skills: [],
  },
];
